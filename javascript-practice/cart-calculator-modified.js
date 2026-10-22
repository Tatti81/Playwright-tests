const items = [
  {
    name: 'Pliers',
    price: '$12.50',
    inStock: true,
  },
  {
    name: 'Hammer',
    price: '$25.00',
    inStock: false,
  },
  {
    name: 'Screwdriver',
    price: '$8.20',
    inStock: true,
  },
];

async function calculateAvailableTotal(items) {
  let total = 0;

  await new Promise((resolve) => setTimeout(resolve, 500));

  for (const item of items) {
    const numericPrice = parseFloat(item.price.replace('$', ''));
    if (item.inStock && numericPrice > 10) {
      console.log(`Item: ${item.name} | Price: ${numericPrice}`);

      total += numericPrice;
    }
  }

  console.log(`Total Cost: ${total.toFixed(2)}`);

  return total;
}

calculateAvailableTotal(items);
