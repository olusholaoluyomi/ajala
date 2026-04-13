// ── Replace with your live key before App Store submission ───────────────────
export const PAYSTACK_PUBLIC_KEY = 'pk_test_2fc7777dd72182ac7532657a3da288418523ea9c';
// ─────────────────────────────────────────────────────────────────────────────

export const TRIAL_DAYS = 30;

export const PRICING = {
  NGN: { currency: 'NGN', symbol: '₦', monthly: 5000, paystackPct: 0.015, paystackFlat: 100, paystackCap: 2000 },
  USD: { currency: 'USD', symbol: '$', monthly: 5,    paystackPct: 0.039, paystackFlat: 0,   paystackCap: null },
};

export function getTrialStatus(user) {
  if (!user) return { active: false, expired: true, daysLeft: 0, subscribed: false };
  if (user.subscriptionStatus === 'active') return { active: true, expired: false, daysLeft: null, subscribed: true };
  const days = Math.floor((Date.now() - new Date(user.createdAt)) / 86400000);
  const daysLeft = Math.max(TRIAL_DAYS - days, 0);
  return { active: daysLeft > 0, expired: daysLeft === 0, daysLeft, subscribed: false };
}

export function isSubscriptionActive(user) {
  if (!user) return false;
  if (user.subscriptionStatus === 'active') return true;
  return getTrialStatus(user).active;
}

function paystackFee(amount, currency) {
  const p = PRICING[currency] || PRICING.NGN;
  let fee = amount * p.paystackPct + p.paystackFlat;
  if (p.paystackCap && fee > p.paystackCap) fee = p.paystackCap;
  if (currency === 'NGN' && amount <= 2500) fee = amount * p.paystackPct;
  return parseFloat(fee.toFixed(2));
}

export function calcSubscription(currency = 'NGN') {
  const p = PRICING[currency] || PRICING.NGN;
  const fee = paystackFee(p.monthly, currency);
  return { base: p.monthly, fee, total: parseFloat((p.monthly + fee).toFixed(2)), totalKobo: Math.round((p.monthly + fee) * 100), symbol: p.symbol, currency };
}

export function calcTripPayment(guidePrice, currency = 'NGN') {
  const p = PRICING[currency] || PRICING.NGN;
  const platformCut = parseFloat((guidePrice * 0.1).toFixed(2));
  const subtotal = guidePrice + platformCut;
  const fee = paystackFee(subtotal, currency);
  const total = parseFloat((subtotal + fee).toFixed(2));
  return { guidePrice, platformCut, fee, total, totalKobo: Math.round(total * 100), symbol: p.symbol, currency };
}

export function generateRef(type, meta = {}) {
  const rand = Math.random().toString(36).slice(2, 7).toUpperCase();
  if (type === 'sub') {
    const month = new Date().toISOString().slice(0, 7).replace('-', '');
    return `AJALA-SUB-${meta.userId}-${month}-${rand}`;
  }
  if (type === 'booking') {
    return `AJALA-BOOK-${meta.bookingId}-GUIDE-${meta.guideId}-TRIP-${meta.tripId}-AMT-${meta.amount}${meta.currency}`;
  }
  return `AJALA-${type.toUpperCase()}-${Date.now()}-${rand}`;
}

export const NIGERIAN_BANKS = [
  'Access Bank','Citibank','Ecobank','Fidelity Bank','First Bank of Nigeria',
  'FCMB','GTBank','Heritage Bank','Jaiz Bank','Keystone Bank','Moniepoint MFB',
  'Polaris Bank','Providus Bank','Stanbic IBTC','Sterling Bank','Union Bank',
  'UBA','Unity Bank','Wema Bank','Zenith Bank','Opay','PalmPay','Kuda Bank','Carbon',
];
