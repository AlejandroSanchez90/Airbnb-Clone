'use client';
import React, { useMemo, useState } from 'react';
import Modal from './Modal';
import useRentModal from '@/app/hooks/useRentModal';
import Heading from '../Heading';
import { categories } from '../Navbar/Categories';
import CategoryInput from '../inputs/CategoryInput';
import { FieldValues, useForm } from 'react-hook-form';
type Props = {};

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}
function RentModal({}: Props) {
  const rentModal = useRentModal();
  const [step, setstep] = useState(STEPS.CATEGORY);

  const onBack = () => {
    setstep((prev) => prev - 1);
  };
  const onNext = () => {
    setstep((prev) => prev + 1);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return 'Create';
    }
    return 'Next';
  }, [step]);

  const secondaryLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }
    return 'Back';
  }, [step]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: errors,
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: '',
    },
  });

  const category = watch('category');
  const setCustomValue = (name: string, value: any) => {
    setValue(name, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
  let bodyContent = (
    <div>
      <div className='flex flex-col gap-8'>
        <Heading title='Which of these best describes your place' subtitle='Pick a category' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto'>
          {categories.map((item) => (
            <div key={item.label} className='col-span-1'>
              <CategoryInput
                onClick={(category) => {
                  setCustomValue('category', category);
                }}
                selected={category === item.label}
                label={item.label}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      title='Airbnb your home!'
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      body={bodyContent}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
    />
  );
}

export default RentModal;
