"use server";

export const register = async (formData: FormData) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/register`, {
    method: "POST",
    body: formData,
    cache: "no-store",
  });

  const data = await response.json();
  return data;
};
