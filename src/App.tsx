import SvgSpinners8DotsRotate from "~icons/svg-spinners/8-dots-rotate";
import "./App.css";
import Icon from "./components/Icon";
import RenderDeepChild from "./components/RenderDeepChild";
import SvgIcon from "./components/SvgIcon";
import ToggleChildDisplay from "./components/ToggleChildDisplay";

function App() {
    return (
        <main>
            <SvgSpinners8DotsRotate />
            <ToggleChildDisplay text="Direct Render">
                <Icon />
            </ToggleChildDisplay>
            <ToggleChildDisplay text="Direct Render SVG">
                <SvgIcon />
            </ToggleChildDisplay>

            <ToggleChildDisplay text="25 Deep Render">
                <RenderDeepChild depth={25}>
                    <Icon />
                </RenderDeepChild>
            </ToggleChildDisplay>

            <ToggleChildDisplay text="25 Deep Render pure SVG">
                <RenderDeepChild depth={25}>
                    <SvgIcon />
                </RenderDeepChild>
            </ToggleChildDisplay>

            <ToggleChildDisplay text="100 Deep Render">
                <RenderDeepChild depth={100}>
                    <Icon />
                </RenderDeepChild>
            </ToggleChildDisplay>

            <ToggleChildDisplay text="100 Deep Render pure SVG">
                <RenderDeepChild depth={100}>
                    <SvgIcon />
                </RenderDeepChild>
            </ToggleChildDisplay>
        </main>
    );
}

export default App;
