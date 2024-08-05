"use client"; // Add this line at the top of the file

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

const AddAssignment = () => {
  const [deveui, setDeveui] = useState('');
  const [appkey, setAppkey] = useState('');
  const [deployment, setDeployment] = useState('');
  const [property, setProperty] = useState('');
  const [building, setBuilding] = useState('');
  const [unit, setUnit] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<number>(0);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("deveui\t\t\t = " + deveui);
    console.log("devappkeyeui\t = " + appkey);
    console.log("deployment\t\t = " + deployment);
    console.log("property\t\t = " + property);
    console.log("building\t\t = " + building);
    console.log("unit\t\t\t = " + unit);
    console.log("notes\t\t\t = " + notes);
    console.log("status\t\t\t = " + status);
    try {
      const response = await axios.post('/api/blocks', {
        deveui,
        appkey,
        deployment,
        property,
        building,
        unit,
        notes,
        status,
      });
      console.log('Record added successfully:', response.data);
    } catch (error) {
      console.log ('Error Adding Record:', error);
      console.error('Error adding record:', error);
    }
  };

  return (
      <DefaultLayout>
        <Breadcrumb pageName="Add Assignment" />

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-full xl:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">

                <div className="mb-4.5 w-full xl:w-4/4">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    {" "}
                    Status:{" "}
                  </label>

                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select value={status} onChange={(e) => setStatus(Number(e.target.value))}
                      className="relative z-20 text-sm w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                      <option value="0" className="text-body dark:text-bodydark">
                        Unassigned
                      </option>
                      <option value="1" className="text-body dark:text-bodydark">
                        Assigned
                      </option>
                      <option value="2" className="text-body dark:text-bodydark">
                        Reclaim
                      </option>
                    </select>

                    <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/3">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">DEVEUI</label>
                    <input type="text" value={deveui} onChange={(e) => setDeveui(e.target.value)}
                      placeholder="8C1F643380000000"
                      className="w-full font-mono rounded border-[1.5px] text-sm border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full xl:w-2/3">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">APPKEY</label>
                    <input type="text" value={appkey} onChange={(e) => setAppkey(e.target.value)}
                      placeholder="0123456789ABCDEF0123456789ABCDEF"
                      className="w-full font-mono  rounded border-[1.5px] text-sm border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>


                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">Deployment</label>
                    <input type="text" value={deployment} onChange={(e) => setDeployment(e.target.value)}
                      placeholder="Name of client"
                      className="w-full text-sm rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">Property</label>
                    <input type="text" value={property} onChange={(e) => setProperty(e.target.value)}
                      placeholder="Name of apartment complex"
                      className="w-full text-sm rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">Building</label>
                    <input type="text" value={building} onChange={(e) => setBuilding(e.target.value)}
                      placeholder="1234"
                      className="w-full text-sm rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">Unit</label>
                    <input type="text" value={unit} onChange={(e) => setUnit(e.target.value)}
                      placeholder="1234"
                      className="w-full text-sm rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">Note</label>
                  <textarea rows={6} value={notes} onChange={(e) => setNotes(e.target.value)}
                    placeholder="Enter any deployment notes"
                    className="w-full text-sm rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                <button type="submit" className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Add Assignment
                </button>
              </div>
            </form>
          </div>
      </DefaultLayout>
  );
};

export default AddAssignment;
