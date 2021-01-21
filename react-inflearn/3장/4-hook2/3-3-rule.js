let hooks = null

// 일반적으로 사용하는 useEffect나 useState 
export function useHook() {
    // ... 
    hooks.push(hookData);
}

function process_a_component_rendering(component) {
    hooks = [];
    component();
    let hooksForThisComponent = hooks;
    hooks = null;
    // ....
}

