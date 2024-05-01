import sample from "lodash/sample";

import IconAccessibility from "~icons/carbon/accessibility";
import FluentEmojiArtistMediumDark from "~icons/fluent-emoji/artist-medium-dark";
import FluentEmojiEyes from "~icons/fluent-emoji/eyes";
import FluentEmojiGrinningFaceWithSmilingEyes from "~icons/fluent-emoji/grinning-face-with-smiling-eyes";
import IconAccountBox from "~icons/mdi/account-box";

const icons = [
    IconAccessibility,
    FluentEmojiArtistMediumDark,
    FluentEmojiEyes,
    FluentEmojiGrinningFaceWithSmilingEyes,
    IconAccountBox,
];

function Icon() {
    const iconToRender = sample(icons);

    return <>{iconToRender({})}</>;
}

export default Icon;
