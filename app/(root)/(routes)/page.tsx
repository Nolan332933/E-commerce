"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

import { useStoreModal } from "@/hooks/use-store-modal";

interface StoreModalState {
  onOpen: () => void;
  isOpen: boolean;
}

const SetupPage = () => {
  const onOpen = useStoreModal((state: StoreModalState) => state.onOpen);
  const isOpen = useStoreModal((state: StoreModalState) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
};

export default SetupPage;
