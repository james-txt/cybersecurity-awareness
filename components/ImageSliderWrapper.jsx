'use client';
import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import { mfaImages, softwareImages, backupImages, cultureImages, protectingImages, monitoringImages } from './data/imageData';

const imageSets = {
  mfa: mfaImages,
  software: softwareImages,
  backup: backupImages,
  culture: cultureImages,
  protecting: protectingImages,
  monitoring: monitoringImages,
};

export default function ImageSliderWrapper({ selectedSet }) {
  const images = imageSets[selectedSet];

  return (
    <div className="my-6 mx-auto text-center rounded-xl relative w-full">
      <ImageSlider images={images} />
    </div>
  );
}
