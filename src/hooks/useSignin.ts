import { Toast } from "native-base";
import "dotenv/config";

export default function useSignin() {
  const signIn = async ({ email, senha }: { email: string; senha: string }) => {
    try {
      console.log(process.env.API_KEY);
      const response = await fetch(process.env.API_KEY + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      if (!response.ok) {
        Toast.show({
          title: "Credenciais inválidas",
        });
        return;
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during sign in:", error);
      return null;
    }
  };

  return { signIn };
}
