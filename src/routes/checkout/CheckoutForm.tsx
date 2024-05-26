import { useParams, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { formatISO } from 'date-fns';
import { API_OPTIONS } from 'src/api/configs/options';
import { PrimaryButton } from 'src/components/buttons/Primary';
import { useState } from 'react';

const prefilledData = {};

export const CheckoutForm = () => {
  const { id, dateFrom, dateTo, guests, price, image, name } = useParams();

  return (
    <form className="bg-red-300">
      form
      <input type="text" defaultValue={id} />
    </form>
  );
};
