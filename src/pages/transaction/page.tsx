// pages/Transaction.tsx
"use client";

import React from "react";
import  Layout  from "../layout";
import { Transaction } from "@/components/TransactionComponent";

export const TransactionPage: React.FC = () => {
  return (
    <Layout>
        <Transaction />
    </Layout>
  );
};

export default Transaction;
