/* ══════════════════════════════════════════
   Shared "like" (star) button logic -- backed by Supabase.
   Include the Supabase CDN script BEFORE this file, then call
   initLikeButtons() once your cards/post header are in the DOM.

   Usage: <button class="like-star-btn" data-like-id="blog:some-slug" type="button" disabled>
            <svg class="like-star-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5 L14.9 9.1 L22 9.9 L16.7 14.6 L18.2 21.6 L12 18 L5.8 21.6 L7.3 14.6 L2 9.9 L9.1 9.1 Z"/></svg>
            <span class="like-star-count">·</span>
          </button>
   ══════════════════════════════════════════ */
(function () {
  const SUPABASE_URL = 'https://jefmdtvlfxrgeoetprau.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_Wk40xyiMHxV89JhNkQiICg_amfConp-';

  function getVisitorId() {
    let id = localStorage.getItem('nu_visitor_id');
    if (!id) {
      id = (window.crypto && crypto.randomUUID)
        ? crypto.randomUUID()
        : 'v-' + Math.random().toString(36).slice(2) + Date.now();
      localStorage.setItem('nu_visitor_id', id);
    }
    return id;
  }

  function renderButton(btn, count, liked) {
    const countEl = btn.querySelector('.like-star-count');
    if (countEl) countEl.textContent = count;
    btn.classList.toggle('liked', liked);
    btn.setAttribute('aria-pressed', liked ? 'true' : 'false');
  }

  function spawnSparkles(btn) {
    const rect = btn.getBoundingClientRect();
    for (let i = 0; i < 6; i++) {
      const s = document.createElement('span');
      s.className = 'like-spark';
      s.textContent = '✦';
      const angle = (Math.PI * 2 * i) / 6 + Math.random() * 0.4;
      const dist = 24 + Math.random() * 14;
      s.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
      s.style.setProperty('--dy', `${Math.sin(angle) * dist}px`);
      s.style.left = `${rect.width / 2}px`;
      s.style.top = `${rect.height / 2}px`;
      btn.appendChild(s);
      s.addEventListener('animationend', () => s.remove());
    }
  }

  async function initLikeButtons() {
    const buttons = Array.from(document.querySelectorAll('.like-star-btn[data-like-id]'));
    if (!buttons.length) return;

    if (!window.supabase) {
      console.warn('Supabase client script not loaded; like buttons stay disabled.');
      return;
    }

    const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const visitorId = getVisitorId();
    const ids = [...new Set(buttons.map(b => b.dataset.likeId))];

    let rows = [];
    try {
      const { data, error } = await sb.from('likes').select('post_id, visitor_id').in('post_id', ids);
      if (error) throw error;
      rows = data || [];
    } catch (err) {
      console.warn('Could not load like counts:', err);
    }

    const counts = {};
    const likedByMe = new Set();
    rows.forEach(r => {
      counts[r.post_id] = (counts[r.post_id] || 0) + 1;
      if (r.visitor_id === visitorId) likedByMe.add(r.post_id);
    });

    buttons.forEach(btn => {
      const id = btn.dataset.likeId;
      renderButton(btn, counts[id] || 0, likedByMe.has(id));
      btn.disabled = false;

      btn.addEventListener('click', async () => {
        const isLiked = btn.classList.contains('liked');
        const current = parseInt(btn.querySelector('.like-star-count').textContent, 10) || 0;

        renderButton(btn, isLiked ? Math.max(0, current - 1) : current + 1, !isLiked);
        if (!isLiked) spawnSparkles(btn);

        try {
          if (isLiked) {
            const { error } = await sb.from('likes').delete().eq('post_id', id).eq('visitor_id', visitorId);
            if (error) throw error;
          } else {
            const { error } = await sb.from('likes').insert({ post_id: id, visitor_id: visitorId });
            if (error) throw error;
          }
        } catch (err) {
          renderButton(btn, current, isLiked);
          console.warn('Could not save like:', err);
        }
      });
    });
  }

  window.initLikeButtons = initLikeButtons;
})();
