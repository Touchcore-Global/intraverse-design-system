const API_BASE = "https://dev.intraversewebservices.com/api/main/v1";

export interface LoginResponse {
  message: string;
  data: {
    token: string;
    account: {
      _id: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      userType: string;
      accountStatus: string;
      roles: string[];
    };
  };
}

export interface SignUpResponse {
  message: string;
  data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    userType: string;
    accountStatus: string;
    _id: string;
  };
}

export interface SignUpPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userType: string;
  password: string;
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const res = await fetch(`${API_BASE}/account/login?populate=detail`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    const errorMsg = data?.data?.error || data.message || data.error || "Login failed. Please check your credentials.";
    throw new Error(errorMsg);
  }

  return data;
}

export async function signUp(payload: SignUpPayload): Promise<SignUpResponse> {
  const res = await fetch(`${API_BASE}/account`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || data.error || "Registration failed. Please try again.");
  }

  return data;
}

export function getGoogleAuthUrl(callbackUrl?: string): string {
  const callback = callbackUrl || window.location.origin;
  return `${API_BASE}/auth/google?callbackUrl=${encodeURIComponent(callback)}`;
}

export function storeAuthToken(token: string) {
  localStorage.setItem("intraverse_token", token);
}

export function getAuthToken(): string | null {
  return localStorage.getItem("intraverse_token");
}

export function clearAuthToken() {
  localStorage.removeItem("intraverse_token");
}

export async function verifyEmail(email: string, otp: string): Promise<LoginResponse> {
  const res = await fetch(
    `${API_BASE}/account/verifyEmail?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || data.error || "Verification failed. Please check your code.");
  }

  return data;
}

export async function resendVerificationOtp(email: string): Promise<{ message: string }> {
  const res = await fetch(`${API_BASE}/account/resendVerification`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || data.error || "Failed to resend verification code.");
  }

  return data;
}
