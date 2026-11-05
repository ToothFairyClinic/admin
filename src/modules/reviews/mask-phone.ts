/** Ховає середину номера: +380671234567 -> +38067*****67 (видно код оператора і дві останні цифри). */
export const maskPhone = (phone?: string | null) => {
  if (!phone) return "";
  const digits = phone.replace(/\D/g, "").length;
  let index = 0;
  return phone.replace(/\d/g, (digit) => {
    index += 1;
    return index <= 5 || index > digits - 2 ? digit : "*";
  });
};
