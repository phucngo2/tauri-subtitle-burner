export const formatSubtitleFilePath = (subtitleFilePath: string) => {
  // Example subtitle path: E\\:\\\\test.srt
  return subtitleFilePath.replace(/\\/g, "\\\\").replace(/:/g, "\\:");
};

export const generateVideoOutputPath = (videoInputPath: string) => {
  let videoExtension = videoInputPath.split(".").pop();
  return `${videoInputPath}_muxed.${videoExtension}`;
};

export const getFolderPath = (filePath: string) => {
  let folderPathArr = filePath.split("\\");
  folderPathArr.pop();
  return folderPathArr.join("\\");
};

/**
 * Format bytes as human-readable text.
 *
 * @param bytes Number of bytes.
 * @param si True to use metric (SI) units, aka powers of 1000. False to use
 *           binary (IEC), aka powers of 1024.
 * @param dp Number of decimal places to display.
 *
 * @return Formatted string.
 *
 * https://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string
 */
export function humanFileSize(bytes: number, si = false, dp = 1) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }

  const units = si
    ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return bytes.toFixed(dp) + " " + units[u];
}
