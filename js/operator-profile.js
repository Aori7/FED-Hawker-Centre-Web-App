document.addEventListener("DOMContentLoaded", () => {
    const $ = (sel) => document.querySelector(sel);

    const el = {
      displayName: document.getElementById("displayName") || $('[data-profile="displayName"]'),
      displayRole: document.getElementById("displayRole") || $('[data-profile="displayRole"]'),
  
      infoName: document.getElementById("infoName") || $('[data-profile="infoName"]'),
      infoEmail: document.getElementById("infoEmail") || $('[data-profile="infoEmail"]'),
      infoPhone: document.getElementById("infoPhone") || $('[data-profile="infoPhone"]'),
      infoManaged: document.getElementById("infoManaged") || $('[data-profile="infoManaged"]'),
  
      leaseActive: document.getElementById("leaseActive") || $('[data-profile="leaseActive"]'),
      leasePayments: document.getElementById("leasePayments") || $('[data-profile="leasePayments"]'),
      leaseExpiring: document.getElementById("leaseExpiring") || $('[data-profile="leaseExpiring"]'),
  
      btnEditProfile: document.getElementById("btnEditProfile") || $('[data-action="editProfile"]'),
      btnEditPersonal: document.getElementById("btnEditPersonal") || $('[data-action="editPersonal"]'),
      btnViewLeases: document.getElementById("btnViewLeases") || $('[data-action="viewLeases"]'),
      btnRequestLease: document.getElementById("btnRequestLease") || $('[data-action="requestLease"]'),
    };
  
    //state
    const STORAGE_KEY = "hawkersg_operator_profile_v1";
  
    const defaultState = {
      name: "XXXX",
      role: "Operator",
      email: "XXXX@gmail.com",
      phone: "12345678",
      managed: "X",
      leasesActive: "X",
      upcomingPayments: "X",
      expiringSoon: "X",
    };
  
    const state = loadState();
  
    function loadState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return { ...defaultState };
        const parsed = JSON.parse(raw);
        return { ...defaultState, ...parsed };
      } catch {
        return { ...defaultState };
      }
    }
  
    function saveState() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  
    function setText(node, value) {
      if (!node) return;
      node.textContent = value;
    }
  
    function render() {
      setText(el.displayName, state.name);
      setText(el.displayRole, state.role);
  
      setText(el.infoName, state.name);
      setText(el.infoEmail, state.email);
      setText(el.infoPhone, state.phone);
      setText(el.infoManaged, state.managed);
  
      setText(el.leaseActive, state.leasesActive);
      setText(el.leasePayments, state.upcomingPayments);
      setText(el.leaseExpiring, state.expiringSoon);
    }
  
    //actions
    function ask(label, current) {
      const v = prompt(`${label}:`, current ?? "");
      if (v === null) return null;                   // user cancelled
      return v.trim();
    }
  
    function editProfile() {
      const newName = ask("Enter Name", state.name);
      if (newName === null) return;
  
      const newRole = ask("Enter Role", state.role);
      if (newRole === null) return;
  
      if (newName) state.name = newName;
      if (newRole) state.role = newRole;
  
      saveState();
      render();
    }
  
    function editPersonal() {
      const newName = ask("Name", state.name);
      if (newName === null) return;
  
      const newEmail = ask("Email", state.email);
      if (newEmail === null) return;
  
      const newPhone = ask("Phone", state.phone);
      if (newPhone === null) return;
  
      const newManaged = ask("Hawker Centres Managed", state.managed);
      if (newManaged === null) return;
  
      if (newName) state.name = newName;
      if (newEmail) state.email = newEmail;
      if (newPhone) state.phone = newPhone;
      if (newManaged) state.managed = newManaged;
  
      saveState();
      render();
    }
  
    //wire buttons
    if (el.btnEditProfile) el.btnEditProfile.addEventListener("click", editProfile);
    if (el.btnEditPersonal) el.btnEditPersonal.addEventListener("click", editPersonal);
  
    if (el.btnViewLeases) {
      el.btnViewLeases.addEventListener("click", () => {
        alert("Demo: This would open the 'View All Leases' page.");

      });
    }
  
    if (el.btnRequestLease) {
      el.btnRequestLease.addEventListener("click", () => {
        alert("Demo: This would open the 'Request New Leases' form.");

      });
    }
  
    //first render
    render();
  });
  