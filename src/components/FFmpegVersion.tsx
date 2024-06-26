import { useInvokeFFmpegDownloadEvent } from "@/events/use-invoke-ffmpeg-download.event";
import {
  FFMPEG_STATE,
  ffmpegVersion,
  setFFmpegState,
} from "@/signals/ffmpeg-info.signal";
import { TagIcon } from "lucide-solid";
import { Component } from "solid-js";

export const FFmpegVersion: Component<{}> = () => {
  const invokeDownloadFFmpeg = useInvokeFFmpegDownloadEvent();

  const handleInstall = () => {
    setFFmpegState(FFMPEG_STATE.INSTALLING);
    invokeDownloadFFmpeg();
  };
  return (
    <label class="w-full form-control">
      {/* Top Label */}
      <div class="label">
        <span class="label-text">FFmpeg Version</span>
      </div>
      <div class="join">
        {/* Input Component with Icon */}
        <div class="join-item w-full input input-bordered cursor-pointer flex items-center gap-3">
          <TagIcon />
          <input
            type="text"
            class="w-full grow cursor-pointer"
            readonly
            placeholder="FFmpeg not found!"
            value={ffmpegVersion() || "FFmpeg not found!"}
            name="ffmpeg-version"
          />
        </div>
        <button
          class="join-item btn btn-secondary"
          disabled={!!ffmpegVersion()}
          onClick={handleInstall}
        >
          Install
        </button>
      </div>
    </label>
  );
};
