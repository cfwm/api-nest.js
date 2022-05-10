import * as bcrypt from 'bcrypt';

export async function encrypt(data: string) {
  if (!data) return;
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(data, salt);
}

export async function compare(email: string, hash: string) {
  return await bcrypt.compare(email, hash);
}
