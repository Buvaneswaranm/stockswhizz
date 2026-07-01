export type SipResult = {
  invested: number;
  returns: number;
  maturity: number;
};

export type EmiResult = {
  emi: number;
  totalPayment: number;
  totalInterest: number;
};

export type FdResult = {
  maturity: number;
  interest: number;
};

export function calculateSip(
  monthly: number,
  annualRate: number,
  years: number,
): SipResult {
  const months = years * 12;
  const monthlyRate = annualRate / 12 / 100;
  const invested = monthly * months;

  if (monthlyRate === 0) {
    return { invested, returns: 0, maturity: invested };
  }

  const maturity =
    monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);

  return { invested, returns: maturity - invested, maturity };
}

export function calculateStepUpSip(
  monthly: number,
  annualRate: number,
  years: number,
  stepUpPercent: number,
): SipResult {
  const monthlyRate = annualRate / 12 / 100;
  let balance = 0;
  let invested = 0;
  let currentSip = monthly;

  for (let year = 0; year < years; year++) {
    for (let month = 0; month < 12; month++) {
      balance = (balance + currentSip) * (1 + monthlyRate);
      invested += currentSip;
    }
    currentSip *= 1 + stepUpPercent / 100;
  }

  return { invested, returns: balance - invested, maturity: balance };
}

export function calculateEmi(
  principal: number,
  annualRate: number,
  years: number,
): EmiResult {
  const months = years * 12;
  const monthlyRate = annualRate / 12 / 100;

  if (monthlyRate === 0) {
    const emi = principal / months;
    return { emi, totalPayment: principal, totalInterest: 0 };
  }

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayment = emi * months;

  return {
    emi,
    totalPayment,
    totalInterest: totalPayment - principal,
  };
}

export function calculateFd(
  principal: number,
  annualRate: number,
  years: number,
  compoundingPerYear = 4,
): FdResult {
  const maturity =
    principal *
    Math.pow(1 + annualRate / 100 / compoundingPerYear, compoundingPerYear * years);

  return { maturity, interest: maturity - principal };
}

/** Post Office RD — quarterly compounding on each monthly deposit */
export function calculatePostOfficeRd(
  monthly: number,
  annualRate: number,
  years: number,
): SipResult {
  const totalMonths = years * 12;
  const quarterlyRate = annualRate / 400;
  let maturity = 0;

  for (let month = 1; month <= totalMonths; month++) {
    const monthsRemaining = totalMonths - month;
    const quartersRemaining = monthsRemaining / 3;
    maturity += monthly * Math.pow(1 + quarterlyRate, quartersRemaining);
  }

  const invested = monthly * totalMonths;
  return { invested, returns: maturity - invested, maturity };
}

/** PPF — annual compounding, yearly lump-sum deposit */
export function calculatePpf(
  yearlyDeposit: number,
  annualRate: number,
  years: number,
): SipResult {
  const rate = annualRate / 100;
  let balance = 0;
  let invested = 0;

  for (let year = 0; year < years; year++) {
    balance = (balance + yearlyDeposit) * (1 + rate);
    invested += yearlyDeposit;
  }

  return { invested, returns: balance - invested, maturity: balance };
}

/** NSC — lump sum, annual compounding */
export function calculateNsc(
  principal: number,
  annualRate: number,
  years: number,
): FdResult {
  return calculateFd(principal, annualRate, years, 1);
}

/** SSY — annual deposits, annual compounding over 15 years */
export function calculateSsy(
  yearlyDeposit: number,
  annualRate: number,
  years = 15,
): SipResult {
  return calculatePpf(yearlyDeposit, annualRate, years);
}

/** SCSS — lump sum, quarterly interest payout (returns total interest earned) */
export function calculateScss(
  principal: number,
  annualRate: number,
  years: number,
): { quarterlyPayout: number; totalInterest: number; maturity: number } {
  const quarterlyPayout = (principal * annualRate) / 100 / 4;
  const totalInterest = quarterlyPayout * 4 * years;
  return {
    quarterlyPayout,
    totalInterest,
    maturity: principal + totalInterest,
  };
}

/** MIS — monthly interest payout, principal returned at maturity */
export function calculateMis(
  principal: number,
  annualRate: number,
  years: number,
): { monthlyIncome: number; totalInterest: number; maturity: number } {
  const monthlyIncome = (principal * annualRate) / 100 / 12;
  const totalInterest = monthlyIncome * 12 * years;
  return {
    monthlyIncome,
    totalInterest,
    maturity: principal + totalInterest,
  };
}

/** KVP — lump sum doubles at maturity based on rate */
export function calculateKvp(
  principal: number,
  annualRate: number,
): { maturity: number; interest: number; monthsToDouble: number } {
  const monthsToDouble = Math.ceil(
    (Math.log(2) / Math.log(1 + annualRate / 100)) * 12,
  );
  const years = monthsToDouble / 12;
  const maturity = principal * Math.pow(1 + annualRate / 100, years);
  return { maturity, interest: maturity - principal, monthsToDouble };
}
