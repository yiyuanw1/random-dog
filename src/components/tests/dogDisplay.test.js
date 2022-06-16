import { render, screen } from '@testing-library/react';
import DogDisplay from '../dogDisplay';

describe('display one dog', () => {
    it('shows an image', () => {
        render(<DogDisplay url="random.dog/example-picture.jpg" alt="" type="jpg" key="1" />);
        const displayImg = screen.getByTestId("image-display").children[0];
        expect(displayImg).toHaveAttribute("src","random.dog/example-picture.jpg");
    })
    it('shows a video', () => {
        render(<DogDisplay url="random.dog/example-video.mp4" alt="" type="mp4" key="1" />);
        const displayVideo = screen.getByTestId("video-display").children[0];
        expect(displayVideo).toHaveAttribute("autoPlay");
        expect(displayVideo).toHaveAttribute("loop");
    });
})