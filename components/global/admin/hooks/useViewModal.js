import { useState } from "react";

/**
 * Hook to open and close modal
 * @returns
 */
export function useViewModal() {
  const [viewModal, setViewModal] = useState(false);

  const handleViewModal = () => setViewModal(true);
  const handleNotViewModal = () => setViewModal(false);

  return { viewModal, setViewModal, handleViewModal, handleNotViewModal };
}
