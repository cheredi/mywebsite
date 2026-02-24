(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate').forEach((el) => observer.observe(el));

  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navLinks');
  const navLinks = document.querySelectorAll('#navLinks a');
  const sectionIds = ['home', 'about', 'journey', 'skills', 'projects', 'education', 'writing', 'simulator', 'contact'];

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 130;
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) {
        return;
      }

      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        navLinks.forEach((link) => link.classList.remove('active'));
        const activeLink = document.querySelector(`#navLinks a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  });

  const proofSection = document.getElementById('proof');
  const proofNumbers = document.querySelectorAll('.proof-number');
  let countersStarted = false;

  const runCounters = () => {
    if (countersStarted) {
      return;
    }
    countersStarted = true;

    proofNumbers.forEach((counter) => {
      const target = Number(counter.dataset.target || 0);
      let current = 0;
      const increment = Math.max(1, Math.ceil(target / 45));
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = `${current}${target >= 10 ? '+' : ''}`;
      }, 26);
    });
  };

  const proofObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        runCounters();
      }
    });
  }, { threshold: 0.3 });

  if (proofSection) {
    proofObserver.observe(proofSection);
  }

  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('#projectList .project-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      const { filter } = button.dataset;

      projectCards.forEach((card) => {
        if (filter === 'all') {
          card.classList.remove('hidden');
          return;
        }

        const tags = card.dataset.tags ? card.dataset.tags.split(',') : [];
        if (tags.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  const tiltCards = document.querySelectorAll('.tilt-card');

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateX = ((event.clientY - centerY) / rect.height) * -4;
      const rotateY = ((event.clientX - centerX) / rect.width) * 4;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    });
  });

  const substackStatus = document.getElementById('substackStatus');
  const substackPosts = document.getElementById('substackPosts');

  const fallbackPosts = [
    {
      title: "You're Probably Telling AI Way More Than You Think",
      description: 'Privacy and practical AI usage in day-to-day workflows.',
      canonical_url: 'https://lipgloss2llms.substack.com/p/youre-probably-telling-ai-way-more',
      post_date: '2026-02-13T18:02:21.765Z'
    },
    {
      title: "I Have to Decide What's Next...",
      description: 'A practical decision framework using expected value and career tradeoffs.',
      canonical_url: 'https://lipgloss2llms.substack.com/p/i-have-to-decide-whats-next',
      post_date: '2026-02-04T00:01:27.818Z'
    },
    {
      title: 'I am learning to Say “I Don’t Know”',
      description: 'What uncertainty in AI models teaches us about honest decision making.',
      canonical_url: 'https://lipgloss2llms.substack.com/p/i-am-learning-to-say-i-dont-know',
      post_date: '2026-01-27T23:00:57.919Z'
    }
  ];

  function formatDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return 'Recent post';
    }

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  function buildPostCard(post) {
    const card = document.createElement('article');
    card.className = 'writing-card tilt-card';

    const title = document.createElement('h3');
    title.textContent = post.title || 'Untitled post';

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = formatDate(post.post_date);

    const description = document.createElement('p');
    const sourceText = post.description || post.subtitle || post.truncated_body_text || 'Read the full article on Substack.';
    description.textContent = sourceText.slice(0, 160);

    const link = document.createElement('a');
    link.href = post.canonical_url || `https://lipgloss2llms.substack.com/p/${post.slug}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'btn btn-secondary';
    link.textContent = 'Read on Substack';

    card.append(title, meta, description, link);
    return card;
  }

  function renderPosts(posts) {
    if (!substackPosts) {
      return;
    }

    substackPosts.innerHTML = '';
    posts.slice(0, 3).forEach((post) => {
      substackPosts.appendChild(buildPostCard(post));
    });
  }

  async function loadSubstackPosts() {
    if (!substackPosts || !substackStatus) {
      return;
    }

    try {
      const response = await fetch('https://lipgloss2llms.substack.com/api/v1/posts', {
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const posts = await response.json();
      if (!Array.isArray(posts) || posts.length === 0) {
        throw new Error('No posts returned');
      }

      renderPosts(posts);
      substackStatus.textContent = 'Latest posts synced from Substack.';
    } catch (error) {
      renderPosts(fallbackPosts);
      substackStatus.textContent = 'Live sync unavailable right now. Showing recent featured posts.';
    }
  }

  loadSubstackPosts();
})();

function sendEmail(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
  const mailto = `mailto:t_amugo@fanshaweonline.ca?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AReply to: ${email}`;
  window.location.href = mailto;
}
