import { supabase } from "libs/initSupabase";
import { useRouter } from "next/router";
import { useState } from "react";

export const useHeaderEvent = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = async () => {
    await supabase.auth.signOut();
    setAnchorEl(null);

    void router.replace("/login");
  };

  return { anchorEl, handleMenu, handleClose };
};
