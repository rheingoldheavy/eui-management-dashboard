"use client"; // Add this line at the top of the file

import React from 'react';
import TableBlockAllocation from '@/components/BlockAllocation/TableBlockAllocation'; // Adjust the path as needed
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const BlockAllocationPage = () => {
  return (
    <DefaultLayout>
      <div className="p-6">
        <TableBlockAllocation />
      </div>
    </DefaultLayout>
  );
};

export default BlockAllocationPage;
