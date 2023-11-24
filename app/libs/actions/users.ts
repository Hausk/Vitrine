import prisma from "@/utils/prisma";
import { signIn } from "next-auth/react";

export type State = {
    errors?: {
      customerId?: string[];
      amount?: string[];
      status?: string[];
    };
    message?: string | null;
  };
  
  export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', Object.fromEntries(formData));
    } catch (error) {
      if ((error as Error).message.includes('CredentialsSignin')) {
        return 'CredentialSignin';
      }
      throw error;
    }
  }

export async function getAllUsers() {
    return await prisma.user.findMany();
}