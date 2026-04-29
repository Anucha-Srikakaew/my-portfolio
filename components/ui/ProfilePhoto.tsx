"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

export function ProfilePhoto({ name }: { name: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("modal-open");

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="profile-photo-frame"
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={t.ui.openPhoto}
      >
        <Image
          src="/profile.png"
          alt={`${name} profile photo`}
          width={240}
          height={240}
          priority
          className="profile-photo"
        />
      </button>

      {isOpen ? (
        <div className="photo-modal" role="dialog" aria-modal="true" aria-label="Profile photo">
          <button className="photo-modal-backdrop" type="button" onClick={() => setIsOpen(false)} aria-label={t.ui.close} />
          <div className="photo-modal-panel">
            <button className="photo-modal-close" type="button" onClick={() => setIsOpen(false)} aria-label={t.ui.close}>
              {t.ui.close}
            </button>
            <div className="photo-modal-crop">
              <Image
                src="/profile.png"
                alt={`${name} profile photo enlarged`}
                width={840}
                height={1120}
                className="photo-modal-image"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
