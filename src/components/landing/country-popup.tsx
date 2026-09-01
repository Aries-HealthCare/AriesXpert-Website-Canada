"use client";

import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Globe } from "lucide-react";

export default function CountryPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const countryPreference = localStorage.getItem("country_preference_ca");
    if (!countryPreference) {
      const userLang = navigator.language || (navigator as any).userLanguage;
      if (userLang && userLang.startsWith("en-IN")) {
        setIsOpen(true);
      }
    }
  }, []);

  const handleStay = () => {
    localStorage.setItem("country_preference_ca", "canada");
    setIsOpen(false);
  };

  const handleSwitch = () => {
    localStorage.setItem("country_preference_ca", "in");
    window.location.href = "https://www.ariesphysiocare.com";
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="premium-card rounded-3xl border-0 overflow-hidden shadow-2xl bg-card/95 backdrop-blur-xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-3 font-headline text-2xl text-foreground">
            <Globe className="text-primary w-6 h-6" />
            <span>🍁 You Are on AriesXpert Canada</span>
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base text-muted-foreground mt-2">
            You are currently viewing the Canadian registered physiotherapy website. Looking for services in India?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-6">
          <AlertDialogCancel onClick={handleStay} className="rounded-xl font-bold">Stay on Canada Website</AlertDialogCancel>
          <AlertDialogAction onClick={handleSwitch} className="bg-primary text-primary-foreground hover:brightness-110 rounded-xl font-bold px-6 shadow-lg">
            Switch to India
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
