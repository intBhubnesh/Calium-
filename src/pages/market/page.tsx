// pages/Transaction.tsx
"use client";

import { Market } from '@/components/MarketComponent';


import React from "react";
import Layout  from "../layout";

export const MarketPage: React.FC = () => {
  return (
    <Layout>
        <Market/>
    </Layout>
  );
};
