import { Header } from "@/components";
import { HOME_PATH } from "@/config/routes.config";
import { ISuccessState } from "@/types";
import { getFolderPath } from "@/utils";
import { useLocation, useNavigate } from "@solidjs/router";
import { open } from "@tauri-apps/api/shell";
import {
  CircleCheckBigIcon,
  FileIcon,
  FolderOpenIcon,
  HomeIcon,
} from "lucide-solid";
import { Component } from "solid-js";

const Success: Component<{}> = () => {
  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate(HOME_PATH);
  };

  const { state } = useLocation<ISuccessState>();
  const outputFilePath = state?.outputFilePath;

  const openFileLocation = () => {
    if (outputFilePath) {
      open(getFolderPath(outputFilePath));
    }
  };

  const openFile = () => {
    if (outputFilePath) {
      open(outputFilePath);
    }
  };

  return (
    <div class="flex flex-col items-center gap-8">
      <Header title="🔥 Result 🔥" />
      <div class="indicator w-full">
        <div class="text-success flex flex-col items-center gap-4 card bg-neutral p-6 pb-12 w-full">
          <CircleCheckBigIcon size={48} strokeWidth={2} />
          <Header title="Success!" />
        </div>
        <div class="indicator-item indicator-bottom indicator-center w-full flex justify-center">
          <div class="join">
            <button class="join-item btn" onClick={handleBackToHome}>
              <HomeIcon />
              <span>Back to Home</span>
            </button>
            <button class="join-item btn btn-info" onClick={openFileLocation}>
              <FolderOpenIcon />
              <span>Open File Location</span>
            </button>
            <button class="join-item btn btn-secondary" onClick={openFile}>
              <FileIcon />
              <span>Open File</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
