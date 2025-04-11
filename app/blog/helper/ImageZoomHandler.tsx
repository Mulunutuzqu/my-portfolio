"use client";

import { useEffect, useRef } from "react";

function ImageZoomHandler() {
  const currentZoomedImageId = useRef<string | null>(null);
  const lastScrollTime = useRef<number>(0);
  const scrollThreshold = 50; // ms between scroll events

  useEffect(() => {
    function zoomOut(imageId: string) {
      const container = document.getElementById(`container-${imageId}`);
      const overlay = document.getElementById(`overlay-${imageId}`);

      if (container && overlay) {
        container.style.transform = "scale(1)";
        container.style.cursor = "zoom-in";
        container.style.position = "relative";
        container.style.zIndex = "1";
        overlay.style.display = "none";
      }

      currentZoomedImageId.current = null;
    }

    function handleContainerClick(event: MouseEvent) {
      const container = (event.target as HTMLElement).closest(
        '[data-image-zoom="container"]',
      ) as HTMLElement;
      if (!container) return;

      const imageId = container.dataset.imageId;
      if (!imageId) return;

      const overlay = document.getElementById(`overlay-${imageId}`);
      const isZoomed = container.style.transform === "scale(1.8)";

      if (
        currentZoomedImageId.current &&
        currentZoomedImageId.current !== imageId
      ) {
        zoomOut(currentZoomedImageId.current);
      }

      if (isZoomed) {
        zoomOut(imageId);
      } else {
        container.style.transform = "scale(1.8)";
        container.style.cursor = "zoom-out";
        container.style.position = "relative";
        container.style.zIndex = "1000";
        if (overlay) overlay.style.display = "block";

        currentZoomedImageId.current = imageId;
      }
    }

    function handleOverlayClick(event: MouseEvent) {
      const overlay = (event.target as HTMLElement).closest(
        '[data-image-zoom="overlay"]',
      ) as HTMLElement;
      if (!overlay) return;

      const imageId = overlay.dataset.imageId;
      if (!imageId) return;

      zoomOut(imageId);
    }

    function handleScroll() {
      if (!currentZoomedImageId.current) return;

      const now = Date.now();
      if (now - lastScrollTime.current > scrollThreshold) {
        lastScrollTime.current = now;
        zoomOut(currentZoomedImageId.current);
      }
    }

    function handleClickOutside(event: MouseEvent) {
      if (!currentZoomedImageId.current) return;

      const target = event.target as HTMLElement;
      const isClickInsideImage = target.closest(
        `[data-image-id="${currentZoomedImageId.current}"]`,
      );

      if (!isClickInsideImage) {
        zoomOut(currentZoomedImageId.current);
      }
    }

    // Add event listeners
    document.addEventListener("click", handleContainerClick);
    document.addEventListener("click", handleOverlayClick);
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      document.removeEventListener("click", handleContainerClick);
      document.removeEventListener("click", handleOverlayClick);
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}

export { ImageZoomHandler };
