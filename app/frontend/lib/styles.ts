/**
 * Fake Bootstrap CSS Engine
 * Scoped Bootstrap-like styles for preview areas
 */
export const fakeBootstrapStyles = `
  /* Reset & Base */
  .bs-scope { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; line-height: 1.5; color: #212529; background-color: white; }
  .bs-scope * { box-sizing: border-box; }
  
  /* Layout */
  .bs-scope .container { width: 100%; padding: 1rem; margin: 0 auto; max-width: 600px; }
  .bs-scope .text-center { text-align: center !important; }
  .bs-scope .text-end { text-align: right !important; }
  .bs-scope .text-start { text-align: left !important; }
  .bs-scope .d-flex { display: flex !important; }
  .bs-scope .align-items-center { align-items: center !important; }
  .bs-scope .justify-content-between { justify-content: space-between !important; }
  .bs-scope .justify-content-center { justify-content: center !important; }
  .bs-scope .flex-column { flex-direction: column !important; }
  .bs-scope .flex-wrap { flex-wrap: wrap !important; }
  
  /* Spacing */
  .bs-scope .gap-1 { gap: 0.25rem !important; }
  .bs-scope .gap-2 { gap: 0.5rem !important; }
  .bs-scope .gap-3 { gap: 1rem !important; }
  .bs-scope .m-0 { margin: 0 !important; }
  .bs-scope .m-1 { margin: 0.25rem !important; }
  .bs-scope .m-2 { margin: 0.5rem !important; }
  .bs-scope .m-3 { margin: 1rem !important; }
  .bs-scope .mt-2 { margin-top: 0.5rem !important; }
  .bs-scope .mt-3 { margin-top: 1rem !important; }
  .bs-scope .mt-4 { margin-top: 1.5rem !important; }
  .bs-scope .mb-2 { margin-bottom: 0.5rem !important; }
  .bs-scope .mb-3 { margin-bottom: 1rem !important; }
  .bs-scope .p-1 { padding: 0.25rem !important; }
  .bs-scope .p-2 { padding: 0.5rem !important; }
  .bs-scope .p-3 { padding: 1rem !important; }
  .bs-scope .p-4 { padding: 1.5rem !important; }
  .bs-scope .p-5 { padding: 3rem !important; }
  .bs-scope .py-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
  .bs-scope .px-3 { padding-left: 1rem !important; padding-right: 1rem !important; }

  /* Typography */
  .bs-scope .fw-bold { font-weight: 700 !important; }
  .bs-scope .fst-italic { font-style: italic !important; }
  .bs-scope .text-uppercase { text-transform: uppercase !important; }
  .bs-scope .text-decoration-none { text-decoration: none !important; }
  .bs-scope .fs-1 { font-size: 2.5rem !important; }
  .bs-scope .fs-2 { font-size: 2rem !important; }
  .bs-scope .fs-5 { font-size: 1.25rem !important; }
  .bs-scope .small { font-size: 0.875em !important; }

  /* Colors */
  .bs-scope .text-white { color: #fff !important; }
  .bs-scope .text-dark { color: #212529 !important; }
  .bs-scope .text-muted { color: #6c757d !important; }
  .bs-scope .text-primary { color: #0d6efd !important; }
  .bs-scope .text-success { color: #198754 !important; }
  .bs-scope .text-danger { color: #dc3545 !important; }
  .bs-scope .bg-primary { background-color: #0d6efd !important; color: white !important; }
  .bs-scope .bg-secondary { background-color: #6c757d !important; color: white !important; }
  .bs-scope .bg-success { background-color: #198754 !important; color: white !important; }
  .bs-scope .bg-danger { background-color: #dc3545 !important; color: white !important; }
  .bs-scope .bg-warning { background-color: #ffc107 !important; color: black !important; }
  .bs-scope .bg-info { background-color: #0dcaf0 !important; color: black !important; }
  .bs-scope .bg-dark { background-color: #212529 !important; color: white !important; }
  .bs-scope .bg-light { background-color: #f8f9fa !important; color: black !important; border: 1px solid #ddd; }
  .bs-scope .bg-white { background-color: #fff !important; }

  /* Components */
  .bs-scope .border { border: 1px solid #dee2e6 !important; }
  .bs-scope .border-0 { border: 0 !important; }
  .bs-scope .rounded { border-radius: 0.25rem !important; }
  .bs-scope .rounded-circle { border-radius: 50% !important; }
  .bs-scope .rounded-pill { border-radius: 50rem !important; }
  .bs-scope .shadow-sm { box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important; }
  .bs-scope .shadow { box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important; }
  .bs-scope .shadow-lg { box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important; }
  
  .bs-scope .btn { display: inline-block; font-weight: 400; text-align: center; vertical-align: middle; user-select: none; border: 1px solid transparent; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem; transition: all .15s; cursor: pointer; }
  .bs-scope .btn-primary { background-color: #0d6efd; color: white; border-color: #0d6efd; }
  .bs-scope .btn-outline-primary { color: #0d6efd; border-color: #0d6efd; background: transparent; }
  .bs-scope .btn-dark { background-color: #212529; color: white; }
  
  .bs-scope .card { position: relative; display: flex; flex-direction: column; min-width: 0; word-wrap: break-word; background-color: #fff; border: 1px solid rgba(0,0,0,.125); border-radius: 0.25rem; }
  .bs-scope .card-body { flex: 1 1 auto; padding: 1rem 1rem; }
  .bs-scope .badge { display: inline-block; padding: .35em .65em; font-size: .75em; font-weight: 700; line-height: 1; color: #fff; text-align: center; white-space: nowrap; vertical-align: baseline; border-radius: .25rem; }
  .bs-scope .alert { position: relative; padding: 1rem 1rem; margin-bottom: 1rem; border: 1px solid transparent; border-radius: .25rem; }
  .bs-scope .alert-info { color: #055160; background-color: #cff4fc; border-color: #b6effb; }
  .bs-scope .alert-danger { color: #842029; background-color: #f8d7da; border-color: #f5c2c7; }
  
  .bs-scope .progress { display: flex; height: 1rem; overflow: hidden; font-size: .75rem; background-color: #e9ecef; border-radius: .25rem; }
  .bs-scope .progress-bar { display: flex; flex-direction: column; justify-content: center; overflow: hidden; color: #fff; text-align: center; white-space: nowrap; background-color: #0d6efd; transition: width .6s ease; }
  .bs-scope .progress-bar-striped { background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent); background-size: 1rem 1rem; }
  
  .bs-scope .img-thumbnail { padding: 0.25rem; background-color: #fff; border: 1px solid #dee2e6; border-radius: 0.25rem; max-width: 100%; height: auto; }
  .bs-scope .rounded-3 { border-radius: 0.5rem !important; }

  .bs-scope img { max-width: 100%; height: auto; }
  .bs-scope h1, .bs-scope h2, .bs-scope h3, .bs-scope h4, .bs-scope h5, .bs-scope h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; }
  .bs-scope p { margin-top: 0; margin-bottom: 1rem; }
  .bs-scope a { color: #0d6efd; text-decoration: underline; }
  .bs-scope hr { margin: 1rem 0; color: inherit; border: 0; border-top: 1px solid; opacity: .25; }
  
  /* List Group */
  .bs-scope .list-group { display: flex; flex-direction: column; padding-left: 0; margin-bottom: 0; border-radius: .25rem; }
  .bs-scope .list-group-item { position: relative; display: block; padding: .5rem 1rem; color: #212529; text-decoration: none; background-color: #fff; border: 1px solid rgba(0,0,0,.125); }
  .bs-scope .list-group-item:first-child { border-top-left-radius: inherit; border-top-right-radius: inherit; }
  .bs-scope .list-group-item:last-child { border-bottom-left-radius: inherit; border-bottom-right-radius: inherit; }
  
  /* Tables */
  .bs-scope .table { --bs-table-bg: transparent; --bs-table-accent-bg: transparent; --bs-table-striped-color: #212529; --bs-table-striped-bg: rgba(0, 0, 0, 0.05); width: 100%; marginBottom: 1rem; color: #212529; vertical-align: top; border-color: #dee2e6; }
  .bs-scope .table > :not(caption) > * > * { padding: .5rem .5rem; background-color: var(--bs-table-bg); border-bottom-width: 1px; box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg); }
  .bs-scope .table-bordered > :not(caption) > * { border-width: 1px 0; }
  .bs-scope .table-bordered > :not(caption) > * > * { border-width: 0 1px; }
  .bs-scope .table-striped > tbody > tr:nth-of-type(odd) > * { --bs-table-accent-bg: var(--bs-table-striped-bg); color: var(--bs-table-striped-color); }
  .bs-scope .table-dark { --bs-table-bg: #212529; --bs-table-striped-bg: #2c3034; --bs-table-striped-color: #fff; --bs-table-active-bg: #373b3e; --bs-table-active-color: #fff; --bs-table-hover-bg: #323539; --bs-table-hover-color: #fff; color: #fff; border-color: #373b3e; }

  /* Forms */
  .bs-scope .form-label { margin-bottom: .5rem; display: inline-block; }
  .bs-scope .form-control { display: block; width: 100%; padding: .375rem .75rem; font-size: 1rem; font-weight: 400; line-height: 1.5; color: #212529; background-color: #fff; background-clip: padding-box; border: 1px solid #ced4da; appearance: none; border-radius: .25rem; transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out; }
  .bs-scope .form-control:focus { color: #212529; background-color: #fff; border-color: #86b7fe; outline: 0; box-shadow: 0 0 0 .25rem rgba(13,110,253,.25); }
`;
