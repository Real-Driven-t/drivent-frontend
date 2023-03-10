export const OptionName = Object.freeze({
  WITH_HOTEL: 'Com Hotel',
  WITHOUT_HOTEL: 'Sem Hotel',
  ONLINE: 'Online',
  PESENTIAL: 'Presencial',
});

export const OptionValues = Object.freeze({
  WITH_HOTEL: 600,
  WITHOUT_HOTEL: 250,
  ONLINE: 100,
});

export const remoteOptions = [
  {
    name: OptionName.PESENTIAL,
    price: 250,
  },
  {
    name: OptionName.ONLINE,
    price: 100,
  },
];

export const hotelOptions = [
  {
    name: OptionName.WITHOUT_HOTEL,
    price: 0,
  },
  {
    name: OptionName.WITH_HOTEL,
    price: 350,
  },
];
