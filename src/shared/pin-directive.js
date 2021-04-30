export default function (element, binding) {
  // if (binding.arg !== 'position') return;

  // Object.keys(binding.modifiers).forEach((key) => {
  //   element.style[key] = '5px';
  // });
  // element.style.position = 'absolute';

  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
  // applyStyle(element, binding);
}
// update: (element, binding) => {
// Object.keys(binding.value).forEach((position) => {
//   element.style[position] = binding.value[position];
// });
// applyStyle(element, binding);
// },
// };
