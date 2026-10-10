import { initialProducts, initialShops } from '../data/seed';
const KEYS = { products:'dg_products_v1', shops:'dg_shops_v1', enquiries:'dg_enquiries_v1', threshold:'dg_threshold_v1', demo:'dg_demo_v1' };
export function read(key, fallback) { try { const value = localStorage.getItem(key); return value === null ? fallback : JSON.parse(value); } catch { return fallback; } }
export function write(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
export function initialise() {
  if (!localStorage.getItem(KEYS.products)) write(KEYS.products, initialProducts);
  if (!localStorage.getItem(KEYS.shops)) write(KEYS.shops, initialShops);
  if (!localStorage.getItem(KEYS.enquiries)) write(KEYS.enquiries, []);
  if (!localStorage.getItem(KEYS.threshold)) write(KEYS.threshold, 5);
}
export const getProducts = () => read(KEYS.products, initialProducts);
export const saveProducts = v => write(KEYS.products, v);
export const getShops = () => read(KEYS.shops, initialShops);
export const saveShops = v => write(KEYS.shops, v);
export const getEnquiries = () => read(KEYS.enquiries, []);
export const saveEnquiries = v => write(KEYS.enquiries, v);
export const getThreshold = () => read(KEYS.threshold, 5);
export const saveThreshold = v => write(KEYS.threshold, Number(v));
export const KEYS_PUBLIC = KEYS;
