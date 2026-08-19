// ===================== Real trip data (from tours.html) =====================
      const trips = [
        { id:'t1', name:'Cairo & Pyramids', destination:'cairo', type:'historical', trip:'day', duration:'1 Day Trip', days:1, price:850, rating:4.8, reviews:120, img:'assets/images/tours_images/cairo/pyramids.jpg', popular:true },
        { id:'t2', name:'The Grand Egyptian Museum', destination:'cairo', type:'historical', trip:'day', duration:'1 Day Trip', days:1, price:1000, rating:4.9, reviews:113, img:'assets/images/tours_images/cairo/huge_Egyptian_museume.jpg', popular:true },
        { id:'t3', name:'Baron Palace', destination:'cairo', type:'historical', trip:'day', duration:'1 Day Trip', days:1, price:700, rating:4.2, reviews:45, img:'assets/images/tours_images/cairo/elbaron-house.jpg', popular:false },
        { id:'t4', name:'Saladin Citadel', destination:'cairo', type:'historical', trip:'day', duration:'1 Day Trip', days:1, price:600, rating:4.5, reviews:35, img:'assets/images/tours_images/cairo/salah_elden_caastle.jpg', popular:false },
        { id:'t5', name:'Cairo Tower', destination:'cairo', type:'adventure', trip:'day', duration:'1 Day Trip', days:1, price:600, rating:4.1, reviews:57, img:'assets/images/tours_images/cairo/cairo_tower.png', popular:true },
        { id:'t6', name:'Luxor Temples', destination:'luxor', type:'historical', trip:'day', duration:'1 Day Trip', days:1, price:1200, rating:4.9, reviews:95, img:'assets/images/tours_images/luxor/luxor_temple.jpg', popular:true },
        { id:'t7', name:'Luxor Tour', destination:'luxor', type:'adventure', trip:'package', duration:'7 Days Trip', days:7, price:7800, rating:4.9, reviews:150, img:'assets/images/tours_images/luxor/luxor.jpg', popular:true },
        { id:'t8', name:'Luxor Huge Tour', destination:'luxor', type:'adventure', trip:'package', duration:'15 Days Trip', days:15, price:13500, rating:4.9, reviews:115, img:'assets/images/tours_images/luxor/luxor_2.jpeg', popular:true },
        { id:'t9', name:'A Tour in Cairo', destination:'cairo', type:'adventure', trip:'package', duration:'7 Days Trip', days:7, price:4300, rating:4.3, reviews:38, img:'assets/images/tours_images/cairo/cairo.jpg', popular:false },
        { id:'t10', name:'Cairo Huge Tour', destination:'cairo', type:'adventure', trip:'package', duration:'15 Days Trip', days:15, price:10999, rating:4.6, reviews:134, img:'assets/images/tours_images/cairo/cairo_2.jpg', popular:true },
        { id:'t11', name:'Dream Beach', destination:'hurghada', type:'beach', trip:'day', duration:'1 Day Trip', days:1, price:800, rating:4.1, reviews:45, img:'assets/images/tours_images/hurghada/dream_beach.jpg', popular:false },
        { id:'t12', name:'Orange Bay / Giftun Island', destination:'hurghada', type:'beach', trip:'day', duration:'1 Day Trip', days:1, price:1700, rating:4.7, reviews:172, img:'assets/images/tours_images/hurghada/orange_island.jpg', popular:true },
        { id:'t13', name:'Diving', destination:'hurghada', type:'beach', trip:'day', duration:'1 Day Trip', days:1, price:2100, rating:4.1, reviews:25, img:'assets/images/tours_images/hurghada/diving.jpg', popular:false },
        { id:'t14', name:'Safari', destination:'hurghada', type:'adventure', trip:'day', duration:'1 Day Trip', days:1, price:1999, rating:4.3, reviews:75, img:'assets/images/tours_images/hurghada/safari.jpg', popular:true },
        { id:'t15', name:'Hurghada Tour', destination:'hurghada', type:'adventure', trip:'package', duration:'7 Days Trip', days:7, price:12999, rating:4.4, reviews:75, img:'assets/images/tours_images/hurghada/hurghada.jpg', popular:true },
        { id:'t16', name:'Hurghada Huge Tour', destination:'hurghada', type:'adventure', trip:'package', duration:'15 Days Trip', days:15, price:21600, rating:4.6, reviews:128, img:'assets/images/tours_images/hurghada/hurghada_2.jpg', popular:true },
        { id:'t17', name:'Aswan Tour', destination:'aswan', type:'adventure', trip:'package', duration:'7 Days Trip', days:7, price:13000, rating:4.8, reviews:44, img:'assets/images/tours_images/aswan/abu-simbel-temple.jpg', popular:true },
        { id:'t18', name:'Aswan Huge Tour', destination:'aswan', type:'adventure', trip:'package', duration:'15 Days Trip', days:15, price:22500, rating:4.9, reviews:122, img:'assets/images/tours_images/aswan/aswan_2.jpg', popular:false }
      ];

      let state = { tripId:null, name:'', email:'', phone:'', date:'', count:1, notes:'', ref:null };

      // ===================== Step 1: render + filter trips =====================
      const tourContainer = document.getElementById('tourContainer');
      const destinationFilter = document.getElementById('destinationFilter');
      const typeFilter = document.getElementById('typeFilter');
      const tripFilter = document.getElementById('tripFilter');

      function renderTrips(){
        const d = destinationFilter.value, t = typeFilter.value, p = tripFilter.value;
        const filtered = trips.filter(tr =>
          (d === 'all' || tr.destination === d) &&
          (t === 'all' || tr.type === t) &&
          (p === 'all' || tr.trip === p)
        );

        tourContainer.innerHTML = '';
        if(filtered.length === 0){
          tourContainer.innerHTML = '<p class="bk-empty">No trips match these filters.</p>';
          return;
        }

        filtered.forEach(tr=>{
          const card = document.createElement('div');
          card.className = 'tour-card' + (state.tripId === tr.id ? ' bk-selected' : '');
          card.dataset.id = tr.id;
          card.tabIndex = 0;
          card.setAttribute('role','radio');
          card.setAttribute('aria-checked', state.tripId === tr.id ? 'true' : 'false');
          card.innerHTML = `
            <div class="bk-check"><i class="fa-solid fa-check"></i></div>
            <div class="tour-image">
              <img src="${tr.img}" alt="${tr.name}">
              ${tr.popular ? '<span class="popular">Popular</span>' : ''}
            </div>
            <div class="tour-info">
              <h3>${tr.name}</h3>
              <div class="rating">⭐ ${tr.rating} <span>(${tr.reviews} reviews)</span></div>
              <p class="duration">${tr.duration}</p>
              <div class="card-bottom">
                <div class="price"><small>From</small><strong>${tr.price} EGP</strong></div>
              </div>
            </div>
          `;
          const select = ()=>{
            state.tripId = tr.id;
            document.querySelectorAll('.tour-card').forEach(c=>{
              c.classList.remove('bk-selected');
              c.setAttribute('aria-checked','false');
            });
            card.classList.add('bk-selected');
            card.setAttribute('aria-checked','true');
            document.getElementById('bkToStep2').disabled = false;
          };
          card.addEventListener('click', select);
          card.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); select(); } });
          tourContainer.appendChild(card);
        });
      }
      [destinationFilter, typeFilter, tripFilter].forEach(el=>el.addEventListener('change', renderTrips));
      renderTrips();

      function getTrip(){ return trips.find(t=>t.id === state.tripId); }

      // ===================== Stepper navigation =====================
      const stops = document.querySelectorAll('.bk-stop');
      const trackFill = document.getElementById('bkTrackFill');
      const fillWidths = {1:'0%', 2:'50%', 3:'100%'};

      function goToStep(n){
        document.querySelectorAll('.bk-pane').forEach(p=>p.classList.remove('active'));
        document.getElementById('bkPane'+n).classList.add('active');
        stops.forEach(s=>{
          const step = Number(s.dataset.step);
          s.classList.toggle('active', step===n);
          s.classList.toggle('done', step<n);
        });
        trackFill.style.width = fillWidths[n];
        if(n===2) renderSelectedTripSummary();
        if(n===3) fillTicket();
        document.querySelector('.bk-card').scrollIntoView({behavior:'smooth', block:'start'});
      }

      document.getElementById('bkToStep2').addEventListener('click', ()=>{
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('bkTripDate').min = today;
        goToStep(2);
      });
      document.getElementById('bkToStep1').addEventListener('click', ()=>goToStep(1));
      document.getElementById('bkToStep2b').addEventListener('click', ()=>goToStep(2));

      function renderSelectedTripSummary(){
        const tr = getTrip();
        document.getElementById('bkSelectedTrip').innerHTML = `
          <img src="${tr.img}" alt="${tr.name}">
          <div>
            <p class="name">${tr.name}</p>
            <p class="meta">${tr.duration} · ⭐ ${tr.rating} · From ${tr.price} EGP / person</p>
          </div>
        `;
        updateLiveTotal();
      }

      // ===================== Step 2: validation + live price =====================
      const nameEl = document.getElementById('bkFullName');
      const emailEl = document.getElementById('bkEmail');
      const phoneEl = document.getElementById('bkPhone');
      const dateEl = document.getElementById('bkTripDate');
      const countEl = document.getElementById('bkTravelers');
      const notesEl = document.getElementById('bkNotes');
      const liveTotal = document.getElementById('bkLiveTotal');

      function updateLiveTotal(){
        const tr = getTrip();
        if(!tr) return;
        const count = Math.max(1, Number(countEl.value) || 1);
        const total = tr.price * count;
        liveTotal.textContent = 'EGP ' + total.toLocaleString('en-US');
      }
      countEl.addEventListener('input', updateLiveTotal);

      function setInvalid(id, invalid){ document.getElementById(id).classList.toggle('bk-invalid', invalid); }

      function validateStep2(){
        let ok = true;
        const nameOk = nameEl.value.trim().length >= 3;
        setInvalid('bk-f-name', !nameOk); ok = ok && nameOk;

        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim());
        setInvalid('bk-f-email', !emailOk); ok = ok && emailOk;

        const phoneOk = /^01[0-9]{9}$/.test(phoneEl.value.trim());
        setInvalid('bk-f-phone', !phoneOk); ok = ok && phoneOk;

        const dateOk = !!dateEl.value && dateEl.value >= dateEl.min;
        setInvalid('bk-f-date', !dateOk); ok = ok && dateOk;

        const countOk = Number(countEl.value) >= 1 && Number(countEl.value) <= 20;
        setInvalid('bk-f-count', !countOk); ok = ok && countOk;

        return ok;
      }

      document.getElementById('bkToStep3').addEventListener('click', ()=>{
        if(!validateStep2()) return;
        state.name = nameEl.value.trim();
        state.email = emailEl.value.trim();
        state.phone = phoneEl.value.trim();
        state.date = dateEl.value;
        state.count = Number(countEl.value);
        state.notes = notesEl.value.trim();
        goToStep(3);
      });

      // ===================== Step 3: ticket + confirm =====================
      function formatDate(iso){
        if(!iso) return '—';
        const d = new Date(iso);
        return d.toLocaleDateString('en-US', {year:'numeric', month:'long', day:'numeric'});
      }

      function fillTicket(){
        const tr = getTrip();
        document.getElementById('bkTkTo').textContent = tr.name;
        document.getElementById('bkTkName').textContent = state.name;
        document.getElementById('bkTkDate').textContent = formatDate(state.date);
        document.getElementById('bkTkCount').textContent = state.count + (state.count === 1 ? ' traveler' : ' travelers');
        document.getElementById('bkTkDuration').textContent = tr.duration;
        document.getElementById('bkTkContact').textContent = state.phone;
        const total = tr.price * state.count;
        document.getElementById('bkTkTotal').textContent = 'EGP ' + total.toLocaleString('en-US');
      }

      function generateRef(){
        const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
        let code = '';
        for(let i=0;i<3;i++) code += letters[Math.floor(Math.random()*letters.length)];
        code += '-' + Math.floor(1000 + Math.random()*9000);
        return code;
      }

      document.getElementById('bkConfirmBtn').addEventListener('click', ()=>{
        state.ref = generateRef();
        document.getElementById('bkRefCode').textContent = state.ref;
        document.getElementById('bkConfirmBanner').style.display = 'flex';
        document.getElementById('bkConfirmBtn').textContent = 'Confirmed ✓';
        document.getElementById('bkConfirmBtn').disabled = true;
      });