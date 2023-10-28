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
