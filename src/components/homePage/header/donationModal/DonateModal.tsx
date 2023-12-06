"use client";
import React, { useState } from 'react';
import Image from 'next/image';

import InfoStep from './InfoStep';
import CustomizationStep from './CustomizationStep';
import DonorInfoStep from './DonorInfoStep';
import PaymentStep from './PaymentStep';
import CreditCardStep from './CreditCardStep';
import ConfirmationStep from './ConfirmationStep';

const DonateModal = () => {
    
    const [donationStep, setDonationStep] = useState(0);

    return (
        <div className="w-screen h-[475px] md:w-[470px] md:h-[575px] lg:mr-[10px] lg:absolute lg:bottom-[0] lg:right-[0px] lg:z-[2] lg:pt-[287px] xl:mr-[100px]">
            <div className="flex flex-col items-center p-[20px] bg-white w-screen h-[475px] md:w-[470px] md:h-[575px] rounded-[40px] shadow-[rgba(50,50,93,0.5)_0px_18px_16px_-9px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                <Image
                    src="./modal-logo.svg"
                    width={300}
                    height={20}
                    alt="Bottomless Logo"
                />
                {
                    donationStep === 0 ?
                    <InfoStep setDonationStep={setDonationStep}/>
                    : donationStep === 1 ?
                    <CustomizationStep setDonationStep={setDonationStep}/>
                    : donationStep === 2 ?
                    <DonorInfoStep setDonationStep={setDonationStep}/>
                    : donationStep === 3 ?
                    <PaymentStep setDonationStep={setDonationStep}/>
                    : donationStep === 4 ?
                    <CreditCardStep setDonationStep={setDonationStep}/>
                    : donationStep === 5 ?
                    <ConfirmationStep setDonationStep={setDonationStep}/>
                    : <InfoStep setDonationStep={setDonationStep}/>
                }

            </div>
        </div>
    )
}

export default DonateModal;