from PIL import Image, ImageDraw
import sys

def make_circle(img_path, out_path):
    # Open the input image
    img = Image.open(img_path).convert("RGBA")
    
    # Create a mask
    mask = Image.new('L', img.size, 0)
    draw = ImageDraw.Draw(mask)
    
    # Draw a circle on the mask
    width, height = img.size
    # use anti-aliasing by resizing mask
    draw.ellipse((0, 0, width, height), fill=255)
    
    # Apply the mask to the image
    result = img.copy()
    result.putalpha(mask)
    
    # Save as PNG
    result.save(out_path, format="PNG")

if __name__ == "__main__":
    make_circle("app/icon.jpg", "app/icon.png")
    make_circle("app/apple-icon.jpg", "app/apple-icon.png")
    print("Done")
