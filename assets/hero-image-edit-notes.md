# 표지 이미지 편집

도구: built-in image_gen (투명 배경 편집). 원본 assets/hero.jpg는 보존.

## 깃발 누끼 프롬프트
Use case: background-extraction. Edit target: provided hero photograph. Produce a genuine transparent PNG cutout of ONLY the entire white waving flag AND its flagpole, preserving the exact shape, folds, lighting, colors, and photographic details. Keep the original wide canvas composition and object position: flagpole at about 61% of width, white flag to right, pole continues to bottom. Remove ALL sky/background to transparent alpha. No text, no added objects, no shadow background. Save image locally and return file path.

## 하늘 배경 프롬프트
Use case: precise-object-edit. Edit target: supplied wide hero photograph. Remove ONLY the white flag and entire pole from the right half and seamlessly inpaint matching sky. Preserve the original wide aspect ratio, dark teal upper sky, subtle turquoise lower sky, thin distant clouds near bottom right, photographic texture and existing left negative space exactly. This is a background plate for recompositing the same flag as a separate foreground cutout. No flag, no pole, no text, no new objects. Save locally and return path.
