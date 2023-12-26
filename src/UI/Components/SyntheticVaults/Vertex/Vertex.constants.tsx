const VERTEX_TEXTS = [
  {
    title: "createComposableLSDs",
  },
  {
    title: "liquidVaultsEmpower",
  },
  {
    title: "adoptLiquidVaults",
  },
  {
    title: "protocolsBenefit",
  },
];

function getActiveFromFrameTime(frame: number) {
  if (frame > 10) return 4;
  return Math.floor(frame / 2.5);
}

export { getActiveFromFrameTime, VERTEX_TEXTS };
