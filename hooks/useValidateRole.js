import { useGetGlobalState } from "hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function useValidateRole(needRole) {
  const { role } = useGetGlobalState("user");
  const router = useRouter();

  useEffect(() => {
    if (role < needRole) {
      router.push("/");
    }
  }, [role]);
}
