export const checkRegionValidity = (newRegion, comparedRegion) => {
  if (
    newRegion.latitude <
      comparedRegion.latitude - comparedRegion.latitudeDelta / 2 ||
    newRegion.latitude >
      comparedRegion.latitude + comparedRegion.latitudeDelta / 2 ||
    newRegion.longitude <
      comparedRegion.longitude - comparedRegion.longitudeDelta / 2 ||
    newRegion.longitude >
      comparedRegion.longitude + comparedRegion.longitudeDelta / 2
  ) {
    return false;
  }

  return true;
};

export function range(start = 1, end, step = 1) {
  const result = [];

  if (typeof end !== "number") {
    end = start;
    start = 1;
  }

  for (let i = start; i <= end; i += step) {
    result.push(i);
  }

  return result;
}
