'use client';
import React, { useMemo, useState } from 'react';
import Modal from './Modal';
import useRentModal from '@/app/hooks/useRentModal';
import Heading from '../Heading';
import { categories } from '../Navbar/Categories';
import CategoryInput from '../inputs/CategoryInput';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import CountrySelect from '../inputs/CountrySelect';
import dynamic from 'next/dynamic';
import Counter from '../inputs/Counter';
import ImageUpload from '../inputs/ImageUpload';
import Input from '../inputs/Input';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const rentModal = useRentModal();
  const [step, setStep] = useState(STEPS.CATEGORY);

  const [isLoading, setIsLoading] = useState(false);
  const onBack = () => {
    setStep((prev) => prev - 1);
  };
  const onNext = () => {
    setStep((prev) => prev + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.PRICE) {
      return onNext();
    }
    setIsLoading(true);

    axios
      .post('/api/listings', data)
      .then(() => {
        toast.success('Listing created!');
        router.refresh();
        reset();
        setStep(STEPS.CATEGORY);
        rentModal.onClose();
      })
      .catch((err) => {
        toast.error('Something went wrong!');
      })
      .finally(() => {
        setIsLoading(false);
      });
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
    formState: { errors },
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
  const location = watch('location');
  const guestCount = watch('guestCount');
  const roomCount = watch('roomCount');
  const bathroomCount = watch('bathroomCount');
  const imageSrc = watch('imageSrc');

  const Map = useMemo(() => dynamic(() => import('../Map'), { ssr: false }), []);

  const setCustomValue = (name: string, value: any) => {
    setValue(name, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  // Step Category
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
  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading title='Where is your place located?' subtitle='Help guests find you' />
        <CountrySelect onChange={(value) => setCustomValue('location', value)} value={location} />
        <Map center={location?.latlng} />
      </div>
    );
  }
  if (step === STEPS.INFO) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='Share some basics about your place'
          subtitle='What amenities do you have?'
        />
        <Counter
          title='Guests'
          subtitle='How many guests do you allow?'
          value={guestCount}
          onChange={(value) => setCustomValue('guestCount', value)}
        />
        <Counter
          title='Rooms'
          subtitle='How many rooms do you have?'
          value={roomCount}
          onChange={(value) => setCustomValue('roomCount', value)}
        />
        <Counter
          title='Bathrooms'
          subtitle='How many bathrooms do you have?'
          value={bathroomCount}
          onChange={(value) => setCustomValue('bathroomCount', value)}
        />
      </div>
    );
  }
  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='Add some photos of your place'
          subtitle='Photos help guests imagine what it will be like to stay at your place.'
        />
        <ImageUpload value={imageSrc} onChange={(value) => setCustomValue('imageSrc', value)} />
      </div>
    );
  }
  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading title='How would you describe your place?' subtitle='Short and sweet works best' />
        <Input id='title' label='Title' disabled={isLoading} register={register} errors={errors} />
        <hr />
        <Input
          id='description'
          label='Description'
          disabled={isLoading}
          register={register}
          errors={errors}
        />
      </div>
    );
  }
  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading title='Now, set your price' subtitle='How much do you charge per night?' />
        <Input
          id='price'
          label='Price'
          formatPrice
          type='number'
          register={register}
          disabled={isLoading}
          errors={errors}
          required
        />
      </div>
    );
  }
  return (
    <Modal
      title='Airbnb your home!'
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
    />
  );
}

export default RentModal;
