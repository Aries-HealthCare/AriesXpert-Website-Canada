"use client";

import React from "react";
import { BookingModal as UIBookingModal } from "@/components/ui/BookingModal";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  context?: Record<string, any>;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  return <UIBookingModal isOpen={isOpen} onClose={onClose} />;
}
