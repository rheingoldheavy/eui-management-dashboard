"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Deveui } from '@/types/deveui';

const TableDeveuiAllocation = () => {
  const [deveuis, setDeveuis] = useState<Deveui[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeveuis = async () => {
      try {
        const response = await axios.get('/api/blocks'); // Replace with your API endpoint
        setDeveuis(response.data);
      } catch (error) {
        console.error('Error fetching deveuis', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeveuis();
  }, []);

  if (loading) return <div>Loading...</div>;

  const statusLabels = ['Unassigned', 'Assigned', 'Reclaim'];

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Deveui Allocation
        </h4>
      </div>

      <div className="table-container font-mono">
        <div className="table-header">
          <div className="table-cell">Deveui</div>
          <div className="table-cell">Appkey</div>
          <div className="table-cell">Deployment</div>
          <div className="table-cell">Property</div>
          <div className="table-cell">Building</div>
          <div className="table-cell">Unit</div>
          <div className="table-cell">Status</div>
          <div className="table-cell">Notes</div>
        </div>

        {deveuis.map((deveui) => (
          <div
            className="table-row"
            key={deveui._id}
          >
            <div className="table-cell">{deveui.deveui}</div>
            <div className="table-cell">{deveui.appkey}</div>
            <div className="table-cell">{deveui.deployment}</div>
            <div className="table-cell">{deveui.property}</div>
            <div className="table-cell">{deveui.building}</div>
            <div className="table-cell">{deveui.unit}</div>
            <div className="table-cell">{statusLabels[deveui.status]}</div>
            <div className="table-cell">{deveui.notes}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableDeveuiAllocation;
