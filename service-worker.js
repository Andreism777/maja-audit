const CACHE='maja-audit-et-v5';
const LOCAL=['./','./index.html','./manifest.json'];
const PDFLIB='https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js';

self.addEventListener('install',e=>{
  e.waitUntil((async()=>{
    const c=await caches.open(CACHE);
    await c.addAll(LOCAL);
    try{await c.add(PDFLIB)}catch(_){}
  })());
});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  e.respondWith((async()=>{
    const cached=await caches.match(e.request);
    if(cached)return cached;
    const fresh=await fetch(e.request);
    const c=await caches.open(CACHE);
    try{c.put(e.request,fresh.clone())}catch(_){}
    return fresh;
  })());
});
