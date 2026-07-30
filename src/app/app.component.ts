import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videoSrc: string | null = null;
  videoFileName = '';
  isPlaying = false;
  isReady = false;
  hasStarted = false;
  volume = 0.5;

  @ViewChild('videoPlayer', { static: false })
  videoPlayer?: ElementRef<HTMLVideoElement>;

  onUploadClick(fileInput: HTMLInputElement): void {
    fileInput.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    this.cleanupVideo();
    this.videoSrc = URL.createObjectURL(file);
    this.videoFileName = file.name;
    this.isReady = false;
    this.hasStarted = false;
    this.isPlaying = false;

    setTimeout(() => {
      if (this.videoPlayer) {
        this.videoPlayer.nativeElement.volume = this.volume;
      }
    });

    input.value = '';
  }

  onVideoReady(): void {
    this.isReady = true;
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.volume = this.volume;
    }
  }

  play(): void {
    if (!this.videoPlayer || !this.videoSrc) {
      return;
    }

    this.videoPlayer.nativeElement.play();
    this.isPlaying = true;
    this.hasStarted = true;
  }

  pause(): void {
    if (!this.videoPlayer || !this.videoSrc) {
      return;
    }

    this.videoPlayer.nativeElement.pause();
    this.isPlaying = false;
  }

  stop(): void {
    if (!this.videoSrc) {
      return;
    }

    const confirmed = window.confirm('Stop will discard the uploaded movie. Continue?');
    if (!confirmed) {
      return;
    }

    this.cleanupVideo();
  }

  volumeUp(): void {
    if (!this.videoPlayer) {
      return;
    }
    const video = this.videoPlayer.nativeElement;
    video.volume = Math.min(1, video.volume + 0.1);
    this.volume = video.volume;
  }

  volumeDown(): void {
    if (!this.videoPlayer) {
      return;
    }
    const video = this.videoPlayer.nativeElement;
    video.volume = Math.max(0, video.volume - 0.1);
    this.volume = video.volume;
  }

  onVideoEnded(): void {
    this.isPlaying = false;
  }

  get canPlay(): boolean {
    return this.isReady && !this.isPlaying;
  }

  get canPause(): boolean {
    return this.isPlaying;
  }

  get canStop(): boolean {
    return this.hasStarted || this.isPlaying;
  }

  cleanupVideo(): void {
    if (this.videoSrc) {
      URL.revokeObjectURL(this.videoSrc);
    }
    this.videoSrc = null;
    this.videoFileName = '';
    this.isPlaying = false;
    this.isReady = false;
    this.hasStarted = false;
    this.volume = 0.5;
  }
}
