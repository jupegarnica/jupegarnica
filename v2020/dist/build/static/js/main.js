// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var exports = {};
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) {
            return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
        }
        var test2 = {};
        for(var i = 0; i < 10; i++){
            test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join("") !== "0123456789") {
            return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
        }
        return true;
    } catch (err) {
        return false;
    }
}
exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from){
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++){
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};
var exports$1 = exports;
var exports1 = {};
(function() {
    'use strict';
    var _assign = exports$1;
    var ReactVersion = "17.0.1";
    var REACT_ELEMENT_TYPE = 60103;
    var REACT_PORTAL_TYPE = 60106;
    exports1.Fragment = 60107;
    exports1.StrictMode = 60108;
    exports1.Profiler = 60114;
    var REACT_PROVIDER_TYPE = 60109;
    var REACT_CONTEXT_TYPE = 60110;
    var REACT_FORWARD_REF_TYPE = 60112;
    exports1.Suspense = 60113;
    var REACT_SUSPENSE_LIST_TYPE = 60120;
    var REACT_MEMO_TYPE = 60115;
    var REACT_LAZY_TYPE = 60116;
    var REACT_BLOCK_TYPE = 60121;
    var REACT_SERVER_BLOCK_TYPE = 60122;
    var REACT_FUNDAMENTAL_TYPE = 60117;
    var REACT_SCOPE_TYPE = 60119;
    var REACT_OPAQUE_ID_TYPE = 60128;
    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
    var REACT_OFFSCREEN_TYPE = 60130;
    var REACT_LEGACY_HIDDEN_TYPE = 60131;
    if (typeof Symbol === "function" && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor("react.element");
        REACT_PORTAL_TYPE = symbolFor("react.portal");
        exports1.Fragment = symbolFor("react.fragment");
        exports1.StrictMode = symbolFor("react.strict_mode");
        exports1.Profiler = symbolFor("react.profiler");
        REACT_PROVIDER_TYPE = symbolFor("react.provider");
        REACT_CONTEXT_TYPE = symbolFor("react.context");
        REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
        exports1.Suspense = symbolFor("react.suspense");
        REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
        REACT_MEMO_TYPE = symbolFor("react.memo");
        REACT_LAZY_TYPE = symbolFor("react.lazy");
        REACT_BLOCK_TYPE = symbolFor("react.block");
        REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
        REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
        REACT_SCOPE_TYPE = symbolFor("react.scope");
        REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
        REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
        REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
    }
    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") {
            return maybeIterator;
        }
        return null;
    }
    var ReactCurrentDispatcher = {
        current: null
    };
    var ReactCurrentBatchConfig = {
        transition: 0
    };
    var ReactCurrentOwner = {
        current: null
    };
    var ReactDebugCurrentFrame1 = {};
    var currentExtraStackFrame = null;
    function setExtraStackFrame(stack) {
        {
            currentExtraStackFrame = stack;
        }
    }
    {
        ReactDebugCurrentFrame1.setExtraStackFrame = function(stack) {
            {
                currentExtraStackFrame = stack;
            }
        };
        ReactDebugCurrentFrame1.getCurrentStack = null;
        ReactDebugCurrentFrame1.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame1.getCurrentStack;
            if (impl) {
                stack += impl() || "";
            }
            return stack;
        };
    }
    var IsSomeRendererActing = {
        current: false
    };
    var ReactSharedInternals = {
        ReactCurrentDispatcher: ReactCurrentDispatcher,
        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
        ReactCurrentOwner: ReactCurrentOwner,
        IsSomeRendererActing: IsSomeRendererActing,
        assign: _assign
    };
    {
        ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame1;
    }
    function warn(format) {
        {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format, args);
        }
    }
    function error1(format) {
        {
            for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
        }
    }
    function printWarning(level, format, args) {
        {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
                format += "%s";
                args = args.concat([
                    stack
                ]);
            }
            var argsWithFormat = args.map(function(item) {
                return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
    }
    var didWarnStateUpdateForUnmountedComponent = {};
    function warnNoop(publicInstance, callerName) {
        {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
            }
            error1("Can't call %s on a component that is not yet mounted. " + "This is a no-op, but it might indicate a bug in your application. " + "Instead, assign to `this.state` directly or define a `state = {};` " + "class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
        }
    }
    var ReactNoopUpdateQueue = {
        isMounted: function(publicInstance) {
            return false;
        },
        enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
        }
    };
    var emptyObject = {};
    {
        Object.freeze(emptyObject);
    }
    function Component1(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    Component1.prototype.isReactComponent = {};
    Component1.prototype.setState = function(partialState, callback) {
        if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
            {
                throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
        }
        this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component1.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    {
        var deprecatedAPIs = {
            isMounted: [
                "isMounted",
                "Instead, make sure to clean up subscriptions and pending requests in " + "componentWillUnmount to prevent memory leaks."
            ],
            replaceState: [
                "replaceState",
                "Refactor your code to use setState instead (see " + "https://github.com/facebook/react/issues/3236)."
            ]
        };
        var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component1.prototype, methodName, {
                get: function() {
                    warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                    return undefined;
                }
            });
        };
        for(var fnName in deprecatedAPIs){
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
        }
    }
    function ComponentDummy() {}
    ComponentDummy.prototype = Component1.prototype;
    function PureComponent1(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent1.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent1;
    _assign(pureComponentPrototype, Component1.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    function createRef1() {
        var refObject = {
            current: null
        };
        {
            Object.seal(refObject);
        }
        return refObject;
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || "";
        return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
    }
    function getContextName(type) {
        return type.displayName || "Context";
    }
    function getComponentName(type) {
        if (type == null) {
            return null;
        }
        {
            if (typeof type.tag === "number") {
                error1("Received an unexpected object in getComponentName(). " + "This is likely a bug in React. Please file an issue.");
            }
        }
        if (typeof type === "function") {
            return type.displayName || type.name || null;
        }
        if (typeof type === "string") {
            return type;
        }
        switch(type){
            case exports1.Fragment:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case exports1.Profiler:
                return "Profiler";
            case exports1.StrictMode:
                return "StrictMode";
            case exports1.Suspense:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if (typeof type === "object") {
            switch(type.$$typeof){
                case REACT_CONTEXT_TYPE:
                    var context = type;
                    return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                    var provider = type;
                    return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                    return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                    return getComponentName(type.type);
                case REACT_BLOCK_TYPE:
                    return getComponentName(type._render);
                case REACT_LAZY_TYPE:
                    {
                        var lazyComponent = type;
                        var payload = lazyComponent._payload;
                        var init = lazyComponent._init;
                        try {
                            return getComponentName(init(payload));
                        } catch (x) {
                            return null;
                        }
                    }
            }
        }
        return null;
    }
    var hasOwnProperty1 = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
    {
        didWarnAboutStringRefs = {};
    }
    function hasValidRef(config) {
        {
            if (hasOwnProperty1.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                    return false;
                }
            }
        }
        return config.ref !== undefined;
    }
    function hasValidKey(config) {
        {
            if (hasOwnProperty1.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                    return false;
                }
            }
        }
        return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
            {
                if (!specialPropKeyWarningShown) {
                    specialPropKeyWarningShown = true;
                    error1("%s: `key` is not a prop. Trying to access it will result " + "in `undefined` being returned. If you need to access the same " + "value within the child component, you should pass it as a different " + "prop. (https://reactjs.org/link/special-props)", displayName);
                }
            }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
        });
    }
    function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
            {
                if (!specialPropRefWarningShown) {
                    specialPropRefWarningShown = true;
                    error1("%s: `ref` is not a prop. Trying to access it will result " + "in `undefined` being returned. If you need to access the same " + "value within the child component, you should pass it as a different " + "prop. (https://reactjs.org/link/special-props)", displayName);
                }
            }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
        });
    }
    function warnIfStringRefCannotBeAutoConverted(config) {
        {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentName(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                    error1("Component \"%s\" contains the string ref \"%s\". " + "Support for string refs will be removed in a future major release. " + "This case cannot be automatically converted to an arrow function. " + "We ask you to manually fix this case by using useRef() or createRef() instead. " + "Learn more about using refs safely here: " + "https://reactjs.org/link/strict-mode-string-ref", componentName, config.ref);
                    didWarnAboutStringRefs[componentName] = true;
                }
            }
        }
    }
    var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            ref: ref,
            props: props,
            _owner: owner
        };
        {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
            });
            Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
            });
            Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
            });
            if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
            }
        }
        return element;
    };
    function createElement1(type, config, children) {
        var propName;
        var props = {};
        var key = null;
        var ref = null;
        var self = null;
        var source = null;
        if (config != null) {
            if (hasValidRef(config)) {
                ref = config.ref;
                {
                    warnIfStringRefCannotBeAutoConverted(config);
                }
            }
            if (hasValidKey(config)) {
                key = "" + config.key;
            }
            self = config.__self === undefined ? null : config.__self;
            source = config.__source === undefined ? null : config.__source;
            for(propName in config){
                if (hasOwnProperty1.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                    props[propName] = config[propName];
                }
            }
        }
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) {
            props.children = children;
        } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++){
                childArray[i] = arguments[i + 2];
            }
            {
                if (Object.freeze) {
                    Object.freeze(childArray);
                }
            }
            props.children = childArray;
        }
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for(propName in defaultProps){
                if (props[propName] === undefined) {
                    props[propName] = defaultProps[propName];
                }
            }
        }
        {
            if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                    defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                    defineRefPropWarningGetter(props, displayName);
                }
            }
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
    }
    function cloneElement1(element, config, children) {
        if (!!(element === null || element === undefined)) {
            {
                throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
        }
        var propName;
        var props = _assign({}, element.props);
        var key = element.key;
        var ref = element.ref;
        var self = element._self;
        var source = element._source;
        var owner = element._owner;
        if (config != null) {
            if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
                key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
            }
            for(propName in config){
                if (hasOwnProperty1.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                    if (config[propName] === undefined && defaultProps !== undefined) {
                        props[propName] = defaultProps[propName];
                    } else {
                        props[propName] = config[propName];
                    }
                }
            }
        }
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) {
            props.children = children;
        } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++){
                childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
        }
        return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    function isValidElement1(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var SEPARATOR = ".";
    var SUBSEPARATOR = ":";
    function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
            "=": "=0",
            ":": "=2"
        };
        var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
        });
        return "$" + escapedString;
    }
    var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;
    function escapeUserProvidedKey(text) {
        return text.replace(userProvidedKeyEscapeRegex, "$&/");
    }
    function getElementKey(element, index) {
        if (typeof element === "object" && element !== null && element.key != null) {
            return escape("" + element.key);
        }
        return index.toString(36);
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if (type === "undefined" || type === "boolean") {
            children = null;
        }
        var invokeCallback = false;
        if (children === null) {
            invokeCallback = true;
        } else {
            switch(type){
                case "string":
                case "number":
                    invokeCallback = true;
                    break;
                case "object":
                    switch(children.$$typeof){
                        case REACT_ELEMENT_TYPE:
                        case REACT_PORTAL_TYPE:
                            invokeCallback = true;
                    }
            }
        }
        if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (Array.isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) {
                    escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                }
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                    return c;
                });
            } else if (mappedChild != null) {
                if (isValidElement1(mappedChild)) {
                    mappedChild = cloneAndReplaceKey(mappedChild, escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
                }
                array.push(mappedChild);
            }
            return 1;
        }
        var child;
        var nextName;
        var subtreeCount = 0;
        var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
        if (Array.isArray(children)) {
            for(var i = 0; i < children.length; i++){
                child = children[i];
                nextName = nextNamePrefix + getElementKey(child, i);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
        } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                {
                    if (iteratorFn === iterableChildren.entries) {
                        if (!didWarnAboutMaps) {
                            warn("Using Maps as children is not supported. " + "Use an array of keyed ReactElements instead.");
                        }
                        didWarnAboutMaps = true;
                    }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while(!(step = iterator.next()).done){
                    child = step.value;
                    nextName = nextNamePrefix + getElementKey(child, ii++);
                    subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
            } else if (type === "object") {
                var childrenString = "" + children;
                {
                    {
                        throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
                    }
                }
            }
        }
        return subtreeCount;
    }
    function mapChildren(children, func, context) {
        if (children == null) {
            return children;
        }
        var result = [];
        var count = 0;
        mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    function countChildren(children) {
        var n = 0;
        mapChildren(children, function() {
            n++;
        });
        return n;
    }
    function forEachChildren(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
        }, forEachContext);
    }
    function toArray(children) {
        return mapChildren(children, function(child) {
            return child;
        }) || [];
    }
    function onlyChild(children) {
        if (!isValidElement1(children)) {
            {
                throw Error("React.Children.only expected to receive a single React element child.");
            }
        }
        return children;
    }
    function createContext1(defaultValue, calculateChangedBits) {
        if (calculateChangedBits === undefined) {
            calculateChangedBits = null;
        } else {
            {
                if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                    error1("createContext: Expected the optional second argument to be a " + "function. Instead received: %s", calculateChangedBits);
                }
            }
        }
        var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        };
        context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
        };
        var hasWarnedAboutUsingNestedContextConsumers = false;
        var hasWarnedAboutUsingConsumerProvider = false;
        var hasWarnedAboutDisplayNameOnConsumer = false;
        {
            var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context,
                _calculateChangedBits: context._calculateChangedBits
            };
            Object.defineProperties(Consumer, {
                Provider: {
                    get: function() {
                        if (!hasWarnedAboutUsingConsumerProvider) {
                            hasWarnedAboutUsingConsumerProvider = true;
                            error1("Rendering <Context.Consumer.Provider> is not supported and will be removed in " + "a future major release. Did you mean to render <Context.Provider> instead?");
                        }
                        return context.Provider;
                    },
                    set: function(_Provider) {
                        context.Provider = _Provider;
                    }
                },
                _currentValue: {
                    get: function() {
                        return context._currentValue;
                    },
                    set: function(_currentValue) {
                        context._currentValue = _currentValue;
                    }
                },
                _currentValue2: {
                    get: function() {
                        return context._currentValue2;
                    },
                    set: function(_currentValue2) {
                        context._currentValue2 = _currentValue2;
                    }
                },
                _threadCount: {
                    get: function() {
                        return context._threadCount;
                    },
                    set: function(_threadCount) {
                        context._threadCount = _threadCount;
                    }
                },
                Consumer: {
                    get: function() {
                        if (!hasWarnedAboutUsingNestedContextConsumers) {
                            hasWarnedAboutUsingNestedContextConsumers = true;
                            error1("Rendering <Context.Consumer.Consumer> is not supported and will be removed in " + "a future major release. Did you mean to render <Context.Consumer> instead?");
                        }
                        return context.Consumer;
                    }
                },
                displayName: {
                    get: function() {
                        return context.displayName;
                    },
                    set: function(displayName) {
                        if (!hasWarnedAboutDisplayNameOnConsumer) {
                            warn("Setting `displayName` on Context.Consumer has no effect. " + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
                            hasWarnedAboutDisplayNameOnConsumer = true;
                        }
                    }
                }
            });
            context.Consumer = Consumer;
        }
        {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
        }
        return context;
    }
    var Uninitialized = -1;
    var Pending = 0;
    var Resolved = 1;
    var Rejected = 2;
    function lazyInitializer(payload) {
        if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            var pending = payload;
            pending._status = Pending;
            pending._result = thenable;
            thenable.then(function(moduleObject) {
                if (payload._status === Pending) {
                    var defaultExport = moduleObject.default;
                    {
                        if (defaultExport === undefined) {
                            error1("lazy: Expected the result of a dynamic import() call. " + "Instead received: %s\n\nYour code should look like: \n  " + "const MyComponent = lazy(() => imp" + "ort('./MyComponent'))", moduleObject);
                        }
                    }
                    var resolved = payload;
                    resolved._status = Resolved;
                    resolved._result = defaultExport;
                }
            }, function(error) {
                if (payload._status === Pending) {
                    var rejected = payload;
                    rejected._status = Rejected;
                    rejected._result = error;
                }
            });
        }
        if (payload._status === Resolved) {
            return payload._result;
        } else {
            throw payload._result;
        }
    }
    function lazy1(ctor) {
        var payload = {
            _status: -1,
            _result: ctor
        };
        var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
        };
        {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
                defaultProps: {
                    configurable: true,
                    get: function() {
                        return defaultProps;
                    },
                    set: function(newDefaultProps) {
                        error1("React.lazy(...): It is not supported to assign `defaultProps` to " + "a lazy component import. Either specify them where the component " + "is defined, or create a wrapping component around it.");
                        defaultProps = newDefaultProps;
                        Object.defineProperty(lazyType, "defaultProps", {
                            enumerable: true
                        });
                    }
                },
                propTypes: {
                    configurable: true,
                    get: function() {
                        return propTypes;
                    },
                    set: function(newPropTypes) {
                        error1("React.lazy(...): It is not supported to assign `propTypes` to " + "a lazy component import. Either specify them where the component " + "is defined, or create a wrapping component around it.");
                        propTypes = newPropTypes;
                        Object.defineProperty(lazyType, "propTypes", {
                            enumerable: true
                        });
                    }
                }
            });
        }
        return lazyType;
    }
    function forwardRef1(render1) {
        {
            if (render1 != null && render1.$$typeof === REACT_MEMO_TYPE) {
                error1("forwardRef requires a render function but received a `memo` " + "component. Instead of forwardRef(memo(...)), use " + "memo(forwardRef(...)).");
            } else if (typeof render1 !== "function") {
                error1("forwardRef requires a render function but was given %s.", render1 === null ? "null" : typeof render1);
            } else {
                if (render1.length !== 0 && render1.length !== 2) {
                    error1("forwardRef render functions accept exactly two parameters: props and ref. %s", render1.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
            }
            if (render1 != null) {
                if (render1.defaultProps != null || render1.propTypes != null) {
                    error1("forwardRef render functions do not support propTypes or defaultProps. " + "Did you accidentally pass a React component?");
                }
            }
        }
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render1
        };
        {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                    return ownName;
                },
                set: function(name) {
                    ownName = name;
                    if (render1.displayName == null) {
                        render1.displayName = name;
                    }
                }
            });
        }
        return elementType;
    }
    var enableScopeAPI = false;
    function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") {
            return true;
        }
        if (type === exports1.Fragment || type === exports1.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports1.StrictMode || type === exports1.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
        }
        if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
                return true;
            }
        }
        return false;
    }
    function memo1(type, compare) {
        {
            if (!isValidElementType(type)) {
                error1("memo: The first argument must be a component. Instead " + "received: %s", type === null ? "null" : typeof type);
            }
        }
        var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: compare === undefined ? null : compare
        };
        {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                    return ownName;
                },
                set: function(name) {
                    ownName = name;
                    if (type.displayName == null) {
                        type.displayName = name;
                    }
                }
            });
        }
        return elementType;
    }
    function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;
        if (!(dispatcher !== null)) {
            {
                throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
        }
        return dispatcher;
    }
    function useContext1(Context, unstable_observedBits) {
        var dispatcher = resolveDispatcher();
        {
            if (unstable_observedBits !== undefined) {
                error1("useContext() second argument is reserved for future " + "use in React. Passing it is not supported. " + "You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? " + "Calling Hooks inside a loop is not supported. " + "Learn more at https://reactjs.org/link/rules-of-hooks" : "");
            }
            if (Context._context !== undefined) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                    error1("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be " + "removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                    error1("Calling useContext(Context.Provider) is not supported. " + "Did you mean to call useContext(Context) instead?");
                }
            }
        }
        return dispatcher.useContext(Context, unstable_observedBits);
    }
    function useState1(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
    }
    function useReducer1(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
    }
    function useRef1(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
    }
    function useEffect1(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
    }
    function useLayoutEffect1(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
    }
    function useCallback1(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
    }
    function useMemo1(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
    }
    function useImperativeHandle1(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
    }
    function useDebugValue1(value, formatterFn) {
        {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
        }
    }
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        {
            if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                    configurable: true,
                    enumerable: true,
                    value: disabledLog,
                    writable: true
                };
                Object.defineProperties(console, {
                    info: props,
                    log: props,
                    warn: props,
                    error: props,
                    group: props,
                    groupCollapsed: props,
                    groupEnd: props
                });
            }
            disabledDepth++;
        }
    }
    function reenableLogs() {
        {
            disabledDepth--;
            if (disabledDepth === 0) {
                var props = {
                    configurable: true,
                    enumerable: true,
                    writable: true
                };
                Object.defineProperties(console, {
                    log: _assign({}, props, {
                        value: prevLog
                    }),
                    info: _assign({}, props, {
                        value: prevInfo
                    }),
                    warn: _assign({}, props, {
                        value: prevWarn
                    }),
                    error: _assign({}, props, {
                        value: prevError
                    }),
                    group: _assign({}, props, {
                        value: prevGroup
                    }),
                    groupCollapsed: _assign({}, props, {
                        value: prevGroupCollapsed
                    }),
                    groupEnd: _assign({}, props, {
                        value: prevGroupEnd
                    })
                });
            }
            if (disabledDepth < 0) {
                error1("disabledDepth fell below zero. " + "This is a bug in React. Please file an issue.");
            }
        }
    }
    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
            if (prefix === undefined) {
                try {
                    throw Error();
                } catch (x) {
                    var match = x.stack.trim().match(/\n( *(at )?)/);
                    prefix = match && match[1] || "";
                }
            }
            return "\n" + prefix + name;
        }
    }
    var reentry = false;
    var componentFrameCache;
    {
        var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
    }
    function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) {
            return "";
        }
        {
            var frame = componentFrameCache.get(fn);
            if (frame !== undefined) {
                return frame;
            }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
        }
        try {
            if (construct) {
                var Fake = function() {
                    throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                    set: function() {
                        throw Error();
                    }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                    c--;
                }
                for(; s >= 1 && c >= 0; s--, c--){
                    if (sampleLines[s] !== controlLines[c]) {
                        if (s !== 1 || c !== 1) {
                            do {
                                s--;
                                c--;
                                if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                    var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                                    {
                                        if (typeof fn === "function") {
                                            componentFrameCache.set(fn, _frame);
                                        }
                                    }
                                    return _frame;
                                }
                            }while (s >= 1 && c >= 0)
                        }
                        break;
                    }
                }
            }
        } finally{
            reentry = false;
            {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        {
            if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
            }
        }
        return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
            return describeNativeComponentFrame(fn, false);
        }
    }
    function shouldConstruct(Component2) {
        var prototype = Component2.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
            return "";
        }
        if (typeof type === "function") {
            {
                return describeNativeComponentFrame(type, shouldConstruct(type));
            }
        }
        if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
        }
        switch(type){
            case exports1.Suspense:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") {
            switch(type.$$typeof){
                case REACT_FORWARD_REF_TYPE:
                    return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                    return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_BLOCK_TYPE:
                    return describeFunctionComponentFrame(type._render);
                case REACT_LAZY_TYPE:
                    {
                        var lazyComponent = type;
                        var payload = lazyComponent._payload;
                        var init = lazyComponent._init;
                        try {
                            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                        } catch (x) {}
                    }
            }
        }
        return "";
    }
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        {
            if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
        }
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
            var has = Function.call.bind(Object.prototype.hasOwnProperty);
            for(var typeSpecName in typeSpecs){
                if (has(typeSpecs, typeSpecName)) {
                    var error$1 = void 0;
                    try {
                        if (typeof typeSpecs[typeSpecName] !== "function") {
                            var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`." + "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                            err.name = "Invariant Violation";
                            throw err;
                        }
                        error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                    } catch (ex) {
                        error$1 = ex;
                    }
                    if (error$1 && !(error$1 instanceof Error)) {
                        setCurrentlyValidatingElement(element);
                        error1("%s: type specification of %s" + " `%s` is invalid; the type checker " + "function must return `null` or an `Error` but returned a %s. " + "You may have forgotten to pass an argument to the type checker " + "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " + "shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                        setCurrentlyValidatingElement(null);
                    }
                    if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                        loggedTypeFailures[error$1.message] = true;
                        setCurrentlyValidatingElement(element);
                        error1("Failed %s type: %s", location, error$1.message);
                        setCurrentlyValidatingElement(null);
                    }
                }
            }
        }
    }
    function setCurrentlyValidatingElement$1(element) {
        {
            if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                setExtraStackFrame(stack);
            } else {
                setExtraStackFrame(null);
            }
        }
    }
    var propTypesMisspellWarningShown;
    {
        propTypesMisspellWarningShown = false;
    }
    function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
            var name = getComponentName(ReactCurrentOwner.current.type);
            if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
            }
        }
        return "";
    }
    function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
        }
        return "";
    }
    function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== undefined) {
            return getSourceInfoErrorAddendum(elementProps.__source);
        }
        return "";
    }
    var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
        }
        return info;
    }
    function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) {
            return;
        }
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
        }
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
        var childOwner = "";
        if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
        }
        {
            setCurrentlyValidatingElement$1(element);
            error1("Each child in a list should have a unique \"key\" prop." + "%s%s See https://reactjs.org/link/warning-keys for more information.", currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
        }
    }
    function validateChildKeys(node, parentType) {
        if (typeof node !== "object") {
            return;
        }
        if (Array.isArray(node)) {
            for(var i = 0; i < node.length; i++){
                var child = node[i];
                if (isValidElement1(child)) {
                    validateExplicitKey(child, parentType);
                }
            }
        } else if (isValidElement1(node)) {
            if (node._store) {
                node._store.validated = true;
            }
        } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while(!(step = iterator.next()).done){
                        if (isValidElement1(step.value)) {
                            validateExplicitKey(step.value, parentType);
                        }
                    }
                }
            }
        }
    }
    function validatePropTypes(element) {
        {
            var type = element.type;
            if (type === null || type === undefined || typeof type === "string") {
                return;
            }
            var propTypes;
            if (typeof type === "function") {
                propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
            } else {
                return;
            }
            if (propTypes) {
                var name = getComponentName(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentName(type);
                error1("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error1("getDefaultProps is only used on classic React.createClass " + "definitions. Use a static property named `defaultProps` instead.");
            }
        }
    }
    function validateFragmentProps(fragment) {
        {
            var keys = Object.keys(fragment.props);
            for(var i = 0; i < keys.length; i++){
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                    setCurrentlyValidatingElement$1(fragment);
                    error1("Invalid prop `%s` supplied to `React.Fragment`. " + "React.Fragment can only have `key` and `children` props.", key);
                    setCurrentlyValidatingElement$1(null);
                    break;
                }
            }
            if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error1("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
            }
        }
    }
    function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type);
        if (!validType) {
            var info = "";
            if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file " + "it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
                info += sourceInfo;
            } else {
                info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
                typeString = "null";
            } else if (Array.isArray(type)) {
                typeString = "array";
            } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
                typeString = typeof type;
            }
            {
                error1("React.createElement: type is invalid -- expected a string (for " + "built-in components) or a class/function (for composite " + "components) but got: %s.%s", typeString, info);
            }
        }
        var element = createElement1.apply(this, arguments);
        if (element == null) {
            return element;
        }
        if (validType) {
            for(var i = 2; i < arguments.length; i++){
                validateChildKeys(arguments[i], type);
            }
        }
        if (type === exports1.Fragment) {
            validateFragmentProps(element);
        } else {
            validatePropTypes(element);
        }
        return element;
    }
    var didWarnAboutDeprecatedCreateFactory = false;
    function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        validatedFactory.type = type;
        {
            if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in " + "a future major release. Consider using JSX " + "or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                    warn("Factory.type is deprecated. Access the class directly " + "before passing it to createFactory.");
                    Object.defineProperty(this, "type", {
                        value: type
                    });
                    return type;
                }
            });
        }
        return validatedFactory;
    }
    function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement1.apply(this, arguments);
        for(var i = 2; i < arguments.length; i++){
            validateChildKeys(arguments[i], newElement.type);
        }
        validatePropTypes(newElement);
        return newElement;
    }
    {
        try {
            var frozenObject = Object.freeze({});
            new Map([
                [
                    frozenObject,
                    null
                ]
            ]);
            new Set([
                frozenObject
            ]);
        } catch (e) {}
    }
    var createElement$1 = createElementWithValidation;
    var cloneElement$1 = cloneElementWithValidation;
    var createFactory1 = createFactoryWithValidation;
    var Children1 = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild
    };
    exports1.Children = Children1;
    exports1.Component = Component1;
    exports1.PureComponent = PureComponent1;
    exports1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
    exports1.cloneElement = cloneElement$1;
    exports1.createContext = createContext1;
    exports1.createElement = createElement$1;
    exports1.createFactory = createFactory1;
    exports1.createRef = createRef1;
    exports1.forwardRef = forwardRef1;
    exports1.isValidElement = isValidElement1;
    exports1.lazy = lazy1;
    exports1.memo = memo1;
    exports1.useCallback = useCallback1;
    exports1.useContext = useContext1;
    exports1.useDebugValue = useDebugValue1;
    exports1.useEffect = useEffect1;
    exports1.useImperativeHandle = useImperativeHandle1;
    exports1.useLayoutEffect = useLayoutEffect1;
    exports1.useMemo = useMemo1;
    exports1.useReducer = useReducer1;
    exports1.useRef = useRef1;
    exports1.useState = useState1;
    exports1.version = ReactVersion;
})();
exports1.Fragment, exports1.StrictMode, exports1.Profiler, exports1.Suspense, exports1.Children, exports1.Component, exports1.PureComponent, exports1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, exports1.cloneElement, exports1.createContext, exports1.createElement, exports1.createFactory, exports1.createRef, exports1.forwardRef, exports1.isValidElement, exports1.lazy, exports1.memo, exports1.useCallback, exports1.useContext, exports1.useDebugValue, exports1.useEffect, exports1.useImperativeHandle, exports1.useLayoutEffect, exports1.useMemo, exports1.useReducer, exports1.useRef, exports1.useState, exports1.version;
const Fragment = exports1.Fragment, StrictMode = exports1.StrictMode, Profiler = exports1.Profiler, Suspense = exports1.Suspense, Children = exports1.Children, Component = exports1.Component, PureComponent = exports1.PureComponent, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = exports1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, cloneElement = exports1.cloneElement, createContext = exports1.createContext, createElement = exports1.createElement, createFactory = exports1.createFactory, createRef = exports1.createRef, forwardRef = exports1.forwardRef, isValidElement = exports1.isValidElement, lazy = exports1.lazy, memo = exports1.memo, useCallback = exports1.useCallback, useContext = exports1.useContext, useDebugValue = exports1.useDebugValue, useEffect = exports1.useEffect, useImperativeHandle = exports1.useImperativeHandle, useLayoutEffect = exports1.useLayoutEffect, useMemo = exports1.useMemo, useReducer = exports1.useReducer, useRef = exports1.useRef, useState = exports1.useState, version = exports1.version;
const mod = {
    default: exports1,
    Children,
    Component,
    Fragment,
    Profiler,
    PureComponent,
    StrictMode,
    Suspense,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    cloneElement,
    createContext,
    createElement,
    createFactory,
    createRef,
    forwardRef,
    isValidElement,
    lazy,
    memo,
    useCallback,
    useContext,
    useDebugValue,
    useEffect,
    useImperativeHandle,
    useLayoutEffect,
    useMemo,
    useReducer,
    useRef,
    useState,
    version
};
var exports2 = {};
(function() {
    'use strict';
    var enableSchedulerDebugging = false;
    var enableProfiling = false;
    var requestHostCallback;
    var requestHostTimeout;
    var cancelHostTimeout;
    var requestPaint;
    var hasPerformanceNow = typeof performance === "object" && typeof performance.now === "function";
    if (hasPerformanceNow) {
        var localPerformance = performance;
        exports2.unstable_now = function() {
            return localPerformance.now();
        };
    } else {
        var localDate = Date;
        var initialTime = localDate.now();
        exports2.unstable_now = function() {
            return localDate.now() - initialTime;
        };
    }
    if (typeof window === "undefined" || typeof MessageChannel !== "function") {
        var _callback = null;
        var _timeoutID = null;
        var _flushCallback = function() {
            if (_callback !== null) {
                try {
                    var currentTime = exports2.unstable_now();
                    var hasRemainingTime = true;
                    _callback(hasRemainingTime, currentTime);
                    _callback = null;
                } catch (e) {
                    setTimeout(_flushCallback, 0);
                    throw e;
                }
            }
        };
        requestHostCallback = function(cb) {
            if (_callback !== null) {
                setTimeout(requestHostCallback, 0, cb);
            } else {
                _callback = cb;
                setTimeout(_flushCallback, 0);
            }
        };
        requestHostTimeout = function(cb, ms) {
            _timeoutID = setTimeout(cb, ms);
        };
        cancelHostTimeout = function() {
            clearTimeout(_timeoutID);
        };
        exports2.unstable_shouldYield = function() {
            return false;
        };
        requestPaint = exports2.unstable_forceFrameRate = function() {};
    } else {
        var _setTimeout = window.setTimeout;
        var _clearTimeout = window.clearTimeout;
        if (typeof console !== "undefined") {
            var requestAnimationFrame = window.requestAnimationFrame;
            var cancelAnimationFrame = window.cancelAnimationFrame;
            if (typeof requestAnimationFrame !== "function") {
                console["error"]("This browser doesn't support requestAnimationFrame. " + "Make sure that you load a " + "polyfill in older browsers. https://reactjs.org/link/react-polyfills");
            }
            if (typeof cancelAnimationFrame !== "function") {
                console["error"]("This browser doesn't support cancelAnimationFrame. " + "Make sure that you load a " + "polyfill in older browsers. https://reactjs.org/link/react-polyfills");
            }
        }
        var isMessageLoopRunning = false;
        var scheduledHostCallback = null;
        var taskTimeoutID = -1;
        var yieldInterval = 5;
        var deadline = 0;
        {
            exports2.unstable_shouldYield = function() {
                return exports2.unstable_now() >= deadline;
            };
            requestPaint = function() {};
        }
        exports2.unstable_forceFrameRate = function(fps) {
            if (fps < 0 || fps > 125) {
                console["error"]("forceFrameRate takes a positive int between 0 and 125, " + "forcing frame rates higher than 125 fps is not supported");
                return;
            }
            if (fps > 0) {
                yieldInterval = Math.floor(1000 / fps);
            } else {
                yieldInterval = 5;
            }
        };
        var performWorkUntilDeadline = function() {
            if (scheduledHostCallback !== null) {
                var currentTime = exports2.unstable_now();
                deadline = currentTime + yieldInterval;
                var hasTimeRemaining = true;
                try {
                    var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
                    if (!hasMoreWork) {
                        isMessageLoopRunning = false;
                        scheduledHostCallback = null;
                    } else {
                        port.postMessage(null);
                    }
                } catch (error) {
                    port.postMessage(null);
                    throw error;
                }
            } else {
                isMessageLoopRunning = false;
            }
        };
        var channel = new MessageChannel();
        var port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;
        requestHostCallback = function(callback) {
            scheduledHostCallback = callback;
            if (!isMessageLoopRunning) {
                isMessageLoopRunning = true;
                port.postMessage(null);
            }
        };
        requestHostTimeout = function(callback, ms) {
            taskTimeoutID = _setTimeout(function() {
                callback(exports2.unstable_now());
            }, ms);
        };
        cancelHostTimeout = function() {
            _clearTimeout(taskTimeoutID);
            taskTimeoutID = -1;
        };
    }
    function push(heap, node) {
        var index = heap.length;
        heap.push(node);
        siftUp(heap, node, index);
    }
    function peek(heap) {
        var first = heap[0];
        return first === undefined ? null : first;
    }
    function pop(heap) {
        var first = heap[0];
        if (first !== undefined) {
            var last = heap.pop();
            if (last !== first) {
                heap[0] = last;
                siftDown(heap, last, 0);
            }
            return first;
        } else {
            return null;
        }
    }
    function siftUp(heap, node, i) {
        var index = i;
        while(true){
            var parentIndex = index - 1 >>> 1;
            var parent = heap[parentIndex];
            if (parent !== undefined && compare(parent, node) > 0) {
                heap[parentIndex] = node;
                heap[index] = parent;
                index = parentIndex;
            } else {
                return;
            }
        }
    }
    function siftDown(heap, node, i) {
        var index = i;
        var length = heap.length;
        while(index < length){
            var leftIndex = (index + 1) * 2 - 1;
            var left = heap[leftIndex];
            var rightIndex = leftIndex + 1;
            var right = heap[rightIndex];
            if (left !== undefined && compare(left, node) < 0) {
                if (right !== undefined && compare(right, left) < 0) {
                    heap[index] = right;
                    heap[rightIndex] = node;
                    index = rightIndex;
                } else {
                    heap[index] = left;
                    heap[leftIndex] = node;
                    index = leftIndex;
                }
            } else if (right !== undefined && compare(right, node) < 0) {
                heap[index] = right;
                heap[rightIndex] = node;
                index = rightIndex;
            } else {
                return;
            }
        }
    }
    function compare(a, b) {
        var diff = a.sortIndex - b.sortIndex;
        return diff !== 0 ? diff : a.id - b.id;
    }
    var ImmediatePriority = 1;
    var UserBlockingPriority = 2;
    var NormalPriority = 3;
    var LowPriority = 4;
    var IdlePriority = 5;
    function markTaskErrored(task, ms) {}
    var maxSigned31BitInt = 1073741823;
    var IMMEDIATE_PRIORITY_TIMEOUT = -1;
    var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
    var NORMAL_PRIORITY_TIMEOUT = 5000;
    var LOW_PRIORITY_TIMEOUT = 10000;
    var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt;
    var taskQueue = [];
    var timerQueue = [];
    var taskIdCounter = 1;
    var currentTask = null;
    var currentPriorityLevel = NormalPriority;
    var isPerformingWork = false;
    var isHostCallbackScheduled = false;
    var isHostTimeoutScheduled = false;
    function advanceTimers(currentTime) {
        var timer = peek(timerQueue);
        while(timer !== null){
            if (timer.callback === null) {
                pop(timerQueue);
            } else if (timer.startTime <= currentTime) {
                pop(timerQueue);
                timer.sortIndex = timer.expirationTime;
                push(taskQueue, timer);
            } else {
                return;
            }
            timer = peek(timerQueue);
        }
    }
    function handleTimeout(currentTime) {
        isHostTimeoutScheduled = false;
        advanceTimers(currentTime);
        if (!isHostCallbackScheduled) {
            if (peek(taskQueue) !== null) {
                isHostCallbackScheduled = true;
                requestHostCallback(flushWork);
            } else {
                var firstTimer = peek(timerQueue);
                if (firstTimer !== null) {
                    requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                }
            }
        }
    }
    function flushWork(hasTimeRemaining, initialTime) {
        isHostCallbackScheduled = false;
        if (isHostTimeoutScheduled) {
            isHostTimeoutScheduled = false;
            cancelHostTimeout();
        }
        isPerformingWork = true;
        var previousPriorityLevel = currentPriorityLevel;
        try {
            if (enableProfiling) {
                try {
                    return workLoop(hasTimeRemaining, initialTime);
                } catch (error) {
                    if (currentTask !== null) {
                        var currentTime = exports2.unstable_now();
                        markTaskErrored(currentTask, currentTime);
                        currentTask.isQueued = false;
                    }
                    throw error;
                }
            } else {
                return workLoop(hasTimeRemaining, initialTime);
            }
        } finally{
            currentTask = null;
            currentPriorityLevel = previousPriorityLevel;
            isPerformingWork = false;
        }
    }
    function workLoop(hasTimeRemaining, initialTime) {
        var currentTime = initialTime;
        advanceTimers(currentTime);
        currentTask = peek(taskQueue);
        while(currentTask !== null && !enableSchedulerDebugging){
            if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || exports2.unstable_shouldYield())) {
                break;
            }
            var callback = currentTask.callback;
            if (typeof callback === "function") {
                currentTask.callback = null;
                currentPriorityLevel = currentTask.priorityLevel;
                var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
                var continuationCallback = callback(didUserCallbackTimeout);
                currentTime = exports2.unstable_now();
                if (typeof continuationCallback === "function") {
                    currentTask.callback = continuationCallback;
                } else {
                    if (currentTask === peek(taskQueue)) {
                        pop(taskQueue);
                    }
                }
                advanceTimers(currentTime);
            } else {
                pop(taskQueue);
            }
            currentTask = peek(taskQueue);
        }
        if (currentTask !== null) {
            return true;
        } else {
            var firstTimer = peek(timerQueue);
            if (firstTimer !== null) {
                requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
            }
            return false;
        }
    }
    function unstable_runWithPriority1(priorityLevel, eventHandler) {
        switch(priorityLevel){
            case ImmediatePriority:
            case UserBlockingPriority:
            case NormalPriority:
            case LowPriority:
            case IdlePriority:
                break;
            default:
                priorityLevel = NormalPriority;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    }
    function unstable_next1(eventHandler) {
        var priorityLevel;
        switch(currentPriorityLevel){
            case ImmediatePriority:
            case UserBlockingPriority:
            case NormalPriority:
                priorityLevel = NormalPriority;
                break;
            default:
                priorityLevel = currentPriorityLevel;
                break;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    }
    function unstable_wrapCallback1(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function() {
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = parentPriorityLevel;
            try {
                return callback.apply(this, arguments);
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        };
    }
    function unstable_scheduleCallback1(priorityLevel, callback, options) {
        var currentTime = exports2.unstable_now();
        var startTime;
        if (typeof options === "object" && options !== null) {
            var delay = options.delay;
            if (typeof delay === "number" && delay > 0) {
                startTime = currentTime + delay;
            } else {
                startTime = currentTime;
            }
        } else {
            startTime = currentTime;
        }
        var timeout;
        switch(priorityLevel){
            case ImmediatePriority:
                timeout = IMMEDIATE_PRIORITY_TIMEOUT;
                break;
            case UserBlockingPriority:
                timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
                break;
            case IdlePriority:
                timeout = IDLE_PRIORITY_TIMEOUT;
                break;
            case LowPriority:
                timeout = LOW_PRIORITY_TIMEOUT;
                break;
            case NormalPriority:
            default:
                timeout = NORMAL_PRIORITY_TIMEOUT;
                break;
        }
        var expirationTime = startTime + timeout;
        var newTask = {
            id: taskIdCounter++,
            callback: callback,
            priorityLevel: priorityLevel,
            startTime: startTime,
            expirationTime: expirationTime,
            sortIndex: -1
        };
        if (startTime > currentTime) {
            newTask.sortIndex = startTime;
            push(timerQueue, newTask);
            if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
                if (isHostTimeoutScheduled) {
                    cancelHostTimeout();
                } else {
                    isHostTimeoutScheduled = true;
                }
                requestHostTimeout(handleTimeout, startTime - currentTime);
            }
        } else {
            newTask.sortIndex = expirationTime;
            push(taskQueue, newTask);
            if (!isHostCallbackScheduled && !isPerformingWork) {
                isHostCallbackScheduled = true;
                requestHostCallback(flushWork);
            }
        }
        return newTask;
    }
    function unstable_pauseExecution1() {}
    function unstable_continueExecution1() {
        if (!isHostCallbackScheduled && !isPerformingWork) {
            isHostCallbackScheduled = true;
            requestHostCallback(flushWork);
        }
    }
    function unstable_getFirstCallbackNode1() {
        return peek(taskQueue);
    }
    function unstable_cancelCallback1(task) {
        task.callback = null;
    }
    function unstable_getCurrentPriorityLevel1() {
        return currentPriorityLevel;
    }
    var unstable_requestPaint1 = requestPaint;
    var unstable_Profiling1 = null;
    exports2.unstable_IdlePriority = IdlePriority;
    exports2.unstable_ImmediatePriority = ImmediatePriority;
    exports2.unstable_LowPriority = LowPriority;
    exports2.unstable_NormalPriority = NormalPriority;
    exports2.unstable_Profiling = unstable_Profiling1;
    exports2.unstable_UserBlockingPriority = UserBlockingPriority;
    exports2.unstable_cancelCallback = unstable_cancelCallback1;
    exports2.unstable_continueExecution = unstable_continueExecution1;
    exports2.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel1;
    exports2.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode1;
    exports2.unstable_next = unstable_next1;
    exports2.unstable_pauseExecution = unstable_pauseExecution1;
    exports2.unstable_requestPaint = unstable_requestPaint1;
    exports2.unstable_runWithPriority = unstable_runWithPriority1;
    exports2.unstable_scheduleCallback = unstable_scheduleCallback1;
    exports2.unstable_wrapCallback = unstable_wrapCallback1;
})();
exports2.unstable_now, exports2.unstable_shouldYield, exports2.unstable_forceFrameRate, exports2.unstable_IdlePriority, exports2.unstable_ImmediatePriority, exports2.unstable_LowPriority, exports2.unstable_NormalPriority, exports2.unstable_Profiling, exports2.unstable_UserBlockingPriority, exports2.unstable_cancelCallback, exports2.unstable_continueExecution, exports2.unstable_getCurrentPriorityLevel, exports2.unstable_getFirstCallbackNode, exports2.unstable_next, exports2.unstable_pauseExecution, exports2.unstable_requestPaint, exports2.unstable_runWithPriority, exports2.unstable_scheduleCallback, exports2.unstable_wrapCallback;
var exports3 = {};
(function() {
    'use strict';
    var DEFAULT_THREAD_ID = 0;
    var interactionIDCounter = 0;
    var threadIDCounter = 0;
    exports3.__interactionsRef = null;
    exports3.__subscriberRef = null;
    {
        exports3.__interactionsRef = {
            current: new Set()
        };
        exports3.__subscriberRef = {
            current: null
        };
    }
    function unstable_clear(callback) {
        var prevInteractions = exports3.__interactionsRef.current;
        exports3.__interactionsRef.current = new Set();
        try {
            return callback();
        } finally{
            exports3.__interactionsRef.current = prevInteractions;
        }
    }
    function unstable_getCurrent() {
        {
            return exports3.__interactionsRef.current;
        }
    }
    function unstable_getThreadID() {
        return ++threadIDCounter;
    }
    function unstable_trace(name, timestamp, callback) {
        var threadID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THREAD_ID;
        var interaction = {
            __count: 1,
            id: interactionIDCounter++,
            name: name,
            timestamp: timestamp
        };
        var prevInteractions = exports3.__interactionsRef.current;
        var interactions = new Set(prevInteractions);
        interactions.add(interaction);
        exports3.__interactionsRef.current = interactions;
        var subscriber = exports3.__subscriberRef.current;
        var returnValue;
        try {
            if (subscriber !== null) {
                subscriber.onInteractionTraced(interaction);
            }
        } finally{
            try {
                if (subscriber !== null) {
                    subscriber.onWorkStarted(interactions, threadID);
                }
            } finally{
                try {
                    returnValue = callback();
                } finally{
                    exports3.__interactionsRef.current = prevInteractions;
                    try {
                        if (subscriber !== null) {
                            subscriber.onWorkStopped(interactions, threadID);
                        }
                    } finally{
                        interaction.__count--;
                        if (subscriber !== null && interaction.__count === 0) {
                            subscriber.onInteractionScheduledWorkCompleted(interaction);
                        }
                    }
                }
            }
        }
        return returnValue;
    }
    function unstable_wrap(callback) {
        var threadID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THREAD_ID;
        var wrappedInteractions = exports3.__interactionsRef.current;
        var subscriber = exports3.__subscriberRef.current;
        if (subscriber !== null) {
            subscriber.onWorkScheduled(wrappedInteractions, threadID);
        }
        wrappedInteractions.forEach(function(interaction) {
            interaction.__count++;
        });
        var hasRun = false;
        function wrapped() {
            var prevInteractions = exports3.__interactionsRef.current;
            exports3.__interactionsRef.current = wrappedInteractions;
            subscriber = exports3.__subscriberRef.current;
            try {
                var returnValue;
                try {
                    if (subscriber !== null) {
                        subscriber.onWorkStarted(wrappedInteractions, threadID);
                    }
                } finally{
                    try {
                        returnValue = callback.apply(undefined, arguments);
                    } finally{
                        exports3.__interactionsRef.current = prevInteractions;
                        if (subscriber !== null) {
                            subscriber.onWorkStopped(wrappedInteractions, threadID);
                        }
                    }
                }
                return returnValue;
            } finally{
                if (!hasRun) {
                    hasRun = true;
                    wrappedInteractions.forEach(function(interaction) {
                        interaction.__count--;
                        if (subscriber !== null && interaction.__count === 0) {
                            subscriber.onInteractionScheduledWorkCompleted(interaction);
                        }
                    });
                }
            }
        }
        wrapped.cancel = function cancel() {
            subscriber = exports3.__subscriberRef.current;
            try {
                if (subscriber !== null) {
                    subscriber.onWorkCanceled(wrappedInteractions, threadID);
                }
            } finally{
                wrappedInteractions.forEach(function(interaction) {
                    interaction.__count--;
                    if (subscriber && interaction.__count === 0) {
                        subscriber.onInteractionScheduledWorkCompleted(interaction);
                    }
                });
            }
        };
        return wrapped;
    }
    var subscribers = null;
    {
        subscribers = new Set();
    }
    function unstable_subscribe(subscriber) {
        {
            subscribers.add(subscriber);
            if (subscribers.size === 1) {
                exports3.__subscriberRef.current = {
                    onInteractionScheduledWorkCompleted: onInteractionScheduledWorkCompleted,
                    onInteractionTraced: onInteractionTraced,
                    onWorkCanceled: onWorkCanceled,
                    onWorkScheduled: onWorkScheduled,
                    onWorkStarted: onWorkStarted,
                    onWorkStopped: onWorkStopped
                };
            }
        }
    }
    function unstable_unsubscribe(subscriber) {
        {
            subscribers.delete(subscriber);
            if (subscribers.size === 0) {
                exports3.__subscriberRef.current = null;
            }
        }
    }
    function onInteractionTraced(interaction) {
        var didCatchError = false;
        var caughtError = null;
        subscribers.forEach(function(subscriber) {
            try {
                subscriber.onInteractionTraced(interaction);
            } catch (error) {
                if (!didCatchError) {
                    didCatchError = true;
                    caughtError = error;
                }
            }
        });
        if (didCatchError) {
            throw caughtError;
        }
    }
    function onInteractionScheduledWorkCompleted(interaction) {
        var didCatchError = false;
        var caughtError = null;
        subscribers.forEach(function(subscriber) {
            try {
                subscriber.onInteractionScheduledWorkCompleted(interaction);
            } catch (error) {
                if (!didCatchError) {
                    didCatchError = true;
                    caughtError = error;
                }
            }
        });
        if (didCatchError) {
            throw caughtError;
        }
    }
    function onWorkScheduled(interactions, threadID) {
        var didCatchError = false;
        var caughtError = null;
        subscribers.forEach(function(subscriber) {
            try {
                subscriber.onWorkScheduled(interactions, threadID);
            } catch (error) {
                if (!didCatchError) {
                    didCatchError = true;
                    caughtError = error;
                }
            }
        });
        if (didCatchError) {
            throw caughtError;
        }
    }
    function onWorkStarted(interactions, threadID) {
        var didCatchError = false;
        var caughtError = null;
        subscribers.forEach(function(subscriber) {
            try {
                subscriber.onWorkStarted(interactions, threadID);
            } catch (error) {
                if (!didCatchError) {
                    didCatchError = true;
                    caughtError = error;
                }
            }
        });
        if (didCatchError) {
            throw caughtError;
        }
    }
    function onWorkStopped(interactions, threadID) {
        var didCatchError = false;
        var caughtError = null;
        subscribers.forEach(function(subscriber) {
            try {
                subscriber.onWorkStopped(interactions, threadID);
            } catch (error) {
                if (!didCatchError) {
                    didCatchError = true;
                    caughtError = error;
                }
            }
        });
        if (didCatchError) {
            throw caughtError;
        }
    }
    function onWorkCanceled(interactions, threadID) {
        var didCatchError = false;
        var caughtError = null;
        subscribers.forEach(function(subscriber) {
            try {
                subscriber.onWorkCanceled(interactions, threadID);
            } catch (error) {
                if (!didCatchError) {
                    didCatchError = true;
                    caughtError = error;
                }
            }
        });
        if (didCatchError) {
            throw caughtError;
        }
    }
    exports3.unstable_clear = unstable_clear;
    exports3.unstable_getCurrent = unstable_getCurrent;
    exports3.unstable_getThreadID = unstable_getThreadID;
    exports3.unstable_subscribe = unstable_subscribe;
    exports3.unstable_trace = unstable_trace;
    exports3.unstable_unsubscribe = unstable_unsubscribe;
    exports3.unstable_wrap = unstable_wrap;
})();
exports3.__interactionsRef, exports3.__subscriberRef, exports3.unstable_clear, exports3.unstable_getCurrent, exports3.unstable_getThreadID, exports3.unstable_subscribe, exports3.unstable_trace, exports3.unstable_unsubscribe, exports3.unstable_wrap;
var exports4 = {};
(function() {
    'use strict';
    var React = exports1;
    var _assign = exports$1;
    var Scheduler = exports2;
    var tracing = exports3;
    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function warn(format) {
        {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format, args);
        }
    }
    function error1(format) {
        {
            for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
        }
    }
    function printWarning(level, format, args) {
        {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
                format += "%s";
                args = args.concat([
                    stack
                ]);
            }
            var argsWithFormat = args.map(function(item) {
                return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
    }
    if (!React) {
        {
            throw Error("ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.");
        }
    }
    var FunctionComponent = 0;
    var ClassComponent = 1;
    var IndeterminateComponent = 2;
    var HostRoot = 3;
    var HostPortal = 4;
    var HostComponent = 5;
    var HostText = 6;
    var Fragment1 = 7;
    var Mode = 8;
    var ContextConsumer = 9;
    var ContextProvider = 10;
    var ForwardRef = 11;
    var Profiler1 = 12;
    var SuspenseComponent = 13;
    var MemoComponent = 14;
    var SimpleMemoComponent = 15;
    var LazyComponent = 16;
    var IncompleteClassComponent = 17;
    var DehydratedFragment = 18;
    var SuspenseListComponent = 19;
    var FundamentalComponent = 20;
    var ScopeComponent = 21;
    var Block = 22;
    var OffscreenComponent = 23;
    var LegacyHiddenComponent = 24;
    var enableProfilerTimer = true;
    var enableFundamentalAPI = false;
    var enableNewReconciler = false;
    var warnAboutStringRefs = false;
    var allNativeEvents = new Set();
    var registrationNameDependencies1 = {};
    var possibleRegistrationNames1 = {};
    function registerTwoPhaseEvent(registrationName, dependencies) {
        registerDirectEvent(registrationName, dependencies);
        registerDirectEvent(registrationName + "Capture", dependencies);
    }
    function registerDirectEvent(registrationName, dependencies) {
        {
            if (registrationNameDependencies1[registrationName]) {
                error1("EventRegistry: More than one plugin attempted to publish the same " + "registration name, `%s`.", registrationName);
            }
        }
        registrationNameDependencies1[registrationName] = dependencies;
        {
            var lowerCasedName = registrationName.toLowerCase();
            possibleRegistrationNames1[lowerCasedName] = registrationName;
            if (registrationName === "onDoubleClick") {
                possibleRegistrationNames1.ondblclick = registrationName;
            }
        }
        for(var i = 0; i < dependencies.length; i++){
            allNativeEvents.add(dependencies[i]);
        }
    }
    var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
    var RESERVED = 0;
    var STRING = 1;
    var BOOLEANISH_STRING = 2;
    var BOOLEAN = 3;
    var OVERLOADED_BOOLEAN = 4;
    var NUMERIC = 5;
    var POSITIVE_NUMERIC = 6;
    var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var ROOT_ATTRIBUTE_NAME = "data-reactroot";
    var VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$");
    var hasOwnProperty2 = Object.prototype.hasOwnProperty;
    var illegalAttributeNameCache = {};
    var validatedAttributeNameCache = {};
    function isAttributeNameSafe(attributeName) {
        if (hasOwnProperty2.call(validatedAttributeNameCache, attributeName)) {
            return true;
        }
        if (hasOwnProperty2.call(illegalAttributeNameCache, attributeName)) {
            return false;
        }
        if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
            validatedAttributeNameCache[attributeName] = true;
            return true;
        }
        illegalAttributeNameCache[attributeName] = true;
        {
            error1("Invalid attribute name: `%s`", attributeName);
        }
        return false;
    }
    function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
        if (propertyInfo !== null) {
            return propertyInfo.type === RESERVED;
        }
        if (isCustomComponentTag) {
            return false;
        }
        if (name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N")) {
            return true;
        }
        return false;
    }
    function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
        if (propertyInfo !== null && propertyInfo.type === RESERVED) {
            return false;
        }
        switch(typeof value){
            case "function":
            case "symbol":
                return true;
            case "boolean":
                {
                    if (isCustomComponentTag) {
                        return false;
                    }
                    if (propertyInfo !== null) {
                        return !propertyInfo.acceptsBooleans;
                    } else {
                        var prefix = name.toLowerCase().slice(0, 5);
                        return prefix !== "data-" && prefix !== "aria-";
                    }
                }
            default:
                return false;
        }
    }
    function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
        if (value === null || typeof value === "undefined") {
            return true;
        }
        if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
            return true;
        }
        if (isCustomComponentTag) {
            return false;
        }
        if (propertyInfo !== null) {
            switch(propertyInfo.type){
                case BOOLEAN:
                    return !value;
                case OVERLOADED_BOOLEAN:
                    return value === false;
                case NUMERIC:
                    return isNaN(value);
                case POSITIVE_NUMERIC:
                    return isNaN(value) || value < 1;
            }
        }
        return false;
    }
    function getPropertyInfo(name) {
        return properties.hasOwnProperty(name) ? properties[name] : null;
    }
    function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
        this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
        this.attributeName = attributeName;
        this.attributeNamespace = attributeNamespace;
        this.mustUseProperty = mustUseProperty;
        this.propertyName = name;
        this.type = type;
        this.sanitizeURL = sanitizeURL;
        this.removeEmptyString = removeEmptyString;
    }
    var properties = {};
    var reservedProps = [
        "children",
        "dangerouslySetInnerHTML",
        "defaultValue",
        "defaultChecked",
        "innerHTML",
        "suppressContentEditableWarning",
        "suppressHydrationWarning",
        "style"
    ];
    reservedProps.forEach(function(name) {
        properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null, false, false);
    });
    [
        [
            "acceptCharset",
            "accept-charset"
        ],
        [
            "className",
            "class"
        ],
        [
            "htmlFor",
            "for"
        ],
        [
            "httpEquiv",
            "http-equiv"
        ]
    ].forEach(function(_ref) {
        var name = _ref[0], attributeName = _ref[1];
        properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name.toLowerCase(), null, false, false);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null, false, false);
    });
    [
        "allowFullScreen",
        "async",
        "autoFocus",
        "autoPlay",
        "controls",
        "default",
        "defer",
        "disabled",
        "disablePictureInPicture",
        "disableRemotePlayback",
        "formNoValidate",
        "hidden",
        "loop",
        "noModule",
        "noValidate",
        "open",
        "playsInline",
        "readOnly",
        "required",
        "reversed",
        "scoped",
        "seamless",
        "itemScope"
    ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, name.toLowerCase(), null, false, false);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name, null, false, false);
    });
    [
        "capture",
        "download"
    ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, name, null, false, false);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name, null, false, false);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(name, NUMERIC, false, name.toLowerCase(), null, false, false);
    });
    var CAMELIZE = /[\-\:]([a-z])/g;
    var capitalize = function(token) {
        return token[1].toUpperCase();
    };
    [
        "accent-height",
        "alignment-baseline",
        "arabic-form",
        "baseline-shift",
        "cap-height",
        "clip-path",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "dominant-baseline",
        "enable-background",
        "fill-opacity",
        "fill-rule",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "glyph-name",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "horiz-adv-x",
        "horiz-origin-x",
        "image-rendering",
        "letter-spacing",
        "lighting-color",
        "marker-end",
        "marker-mid",
        "marker-start",
        "overline-position",
        "overline-thickness",
        "paint-order",
        "panose-1",
        "pointer-events",
        "rendering-intent",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "strikethrough-position",
        "strikethrough-thickness",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "underline-position",
        "underline-thickness",
        "unicode-bidi",
        "unicode-range",
        "units-per-em",
        "v-alphabetic",
        "v-hanging",
        "v-ideographic",
        "v-mathematical",
        "vector-effect",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "word-spacing",
        "writing-mode",
        "xmlns:xlink",
        "x-height"
    ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
    });
    [
        "xlink:actuate",
        "xlink:arcrole",
        "xlink:role",
        "xlink:show",
        "xlink:title",
        "xlink:type"
    ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/1999/xlink", false, false);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(attributeName) {
        properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, false, false);
    });
    var xlinkHref = "xlinkHref";
    properties[xlinkHref] = new PropertyInfoRecord("xlinkHref", STRING, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(attributeName) {
        properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, true, true);
    });
    var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
    var didWarn = false;
    function sanitizeURL1(url) {
        {
            if (!didWarn && isJavaScriptProtocol.test(url)) {
                didWarn = true;
                error1("A future version of React will block javascript: URLs as a security precaution. " + "Use event handlers instead if you can. If you need to generate unsafe HTML try " + "using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url));
            }
        }
    }
    function getValueForProperty(node, name, expected, propertyInfo) {
        {
            if (propertyInfo.mustUseProperty) {
                var propertyName = propertyInfo.propertyName;
                return node[propertyName];
            } else {
                if (propertyInfo.sanitizeURL) {
                    sanitizeURL1("" + expected);
                }
                var attributeName = propertyInfo.attributeName;
                var stringValue = null;
                if (propertyInfo.type === OVERLOADED_BOOLEAN) {
                    if (node.hasAttribute(attributeName)) {
                        var value = node.getAttribute(attributeName);
                        if (value === "") {
                            return true;
                        }
                        if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
                            return value;
                        }
                        if (value === "" + expected) {
                            return expected;
                        }
                        return value;
                    }
                } else if (node.hasAttribute(attributeName)) {
                    if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
                        return node.getAttribute(attributeName);
                    }
                    if (propertyInfo.type === BOOLEAN) {
                        return expected;
                    }
                    stringValue = node.getAttribute(attributeName);
                }
                if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
                    return stringValue === null ? expected : stringValue;
                } else if (stringValue === "" + expected) {
                    return expected;
                } else {
                    return stringValue;
                }
            }
        }
    }
    function getValueForAttribute(node, name, expected) {
        {
            if (!isAttributeNameSafe(name)) {
                return;
            }
            if (isOpaqueHydratingObject(expected)) {
                return expected;
            }
            if (!node.hasAttribute(name)) {
                return expected === undefined ? undefined : null;
            }
            var value = node.getAttribute(name);
            if (value === "" + expected) {
                return expected;
            }
            return value;
        }
    }
    function setValueForProperty(node, name, value, isCustomComponentTag) {
        var propertyInfo = getPropertyInfo(name);
        if (shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag)) {
            return;
        }
        if (shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag)) {
            value = null;
        }
        if (isCustomComponentTag || propertyInfo === null) {
            if (isAttributeNameSafe(name)) {
                var _attributeName = name;
                if (value === null) {
                    node.removeAttribute(_attributeName);
                } else {
                    node.setAttribute(_attributeName, "" + value);
                }
            }
            return;
        }
        var mustUseProperty = propertyInfo.mustUseProperty;
        if (mustUseProperty) {
            var propertyName = propertyInfo.propertyName;
            if (value === null) {
                var type = propertyInfo.type;
                node[propertyName] = type === BOOLEAN ? false : "";
            } else {
                node[propertyName] = value;
            }
            return;
        }
        var attributeName = propertyInfo.attributeName, attributeNamespace = propertyInfo.attributeNamespace;
        if (value === null) {
            node.removeAttribute(attributeName);
        } else {
            var _type = propertyInfo.type;
            var attributeValue;
            if (_type === BOOLEAN || _type === OVERLOADED_BOOLEAN && value === true) {
                attributeValue = "";
            } else {
                {
                    attributeValue = "" + value;
                }
                if (propertyInfo.sanitizeURL) {
                    sanitizeURL1(attributeValue.toString());
                }
            }
            if (attributeNamespace) {
                node.setAttributeNS(attributeNamespace, attributeName, attributeValue);
            } else {
                node.setAttribute(attributeName, attributeValue);
            }
        }
    }
    var REACT_ELEMENT_TYPE = 60103;
    var REACT_PORTAL_TYPE = 60106;
    var REACT_FRAGMENT_TYPE = 60107;
    var REACT_STRICT_MODE_TYPE = 60108;
    var REACT_PROFILER_TYPE = 60114;
    var REACT_PROVIDER_TYPE = 60109;
    var REACT_CONTEXT_TYPE = 60110;
    var REACT_FORWARD_REF_TYPE = 60112;
    var REACT_SUSPENSE_TYPE = 60113;
    var REACT_SUSPENSE_LIST_TYPE = 60120;
    var REACT_MEMO_TYPE = 60115;
    var REACT_LAZY_TYPE = 60116;
    var REACT_BLOCK_TYPE = 60121;
    var REACT_SERVER_BLOCK_TYPE = 60122;
    var REACT_FUNDAMENTAL_TYPE = 60117;
    var REACT_SCOPE_TYPE = 60119;
    var REACT_OPAQUE_ID_TYPE = 60128;
    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
    var REACT_OFFSCREEN_TYPE = 60130;
    var REACT_LEGACY_HIDDEN_TYPE = 60131;
    if (typeof Symbol === "function" && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor("react.element");
        REACT_PORTAL_TYPE = symbolFor("react.portal");
        REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
        REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
        REACT_PROFILER_TYPE = symbolFor("react.profiler");
        REACT_PROVIDER_TYPE = symbolFor("react.provider");
        REACT_CONTEXT_TYPE = symbolFor("react.context");
        REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
        REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
        REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
        REACT_MEMO_TYPE = symbolFor("react.memo");
        REACT_LAZY_TYPE = symbolFor("react.lazy");
        REACT_BLOCK_TYPE = symbolFor("react.block");
        REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
        REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
        REACT_SCOPE_TYPE = symbolFor("react.scope");
        REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
        REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
        REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
    }
    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") {
            return maybeIterator;
        }
        return null;
    }
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        {
            if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                    configurable: true,
                    enumerable: true,
                    value: disabledLog,
                    writable: true
                };
                Object.defineProperties(console, {
                    info: props,
                    log: props,
                    warn: props,
                    error: props,
                    group: props,
                    groupCollapsed: props,
                    groupEnd: props
                });
            }
            disabledDepth++;
        }
    }
    function reenableLogs() {
        {
            disabledDepth--;
            if (disabledDepth === 0) {
                var props = {
                    configurable: true,
                    enumerable: true,
                    writable: true
                };
                Object.defineProperties(console, {
                    log: _assign({}, props, {
                        value: prevLog
                    }),
                    info: _assign({}, props, {
                        value: prevInfo
                    }),
                    warn: _assign({}, props, {
                        value: prevWarn
                    }),
                    error: _assign({}, props, {
                        value: prevError
                    }),
                    group: _assign({}, props, {
                        value: prevGroup
                    }),
                    groupCollapsed: _assign({}, props, {
                        value: prevGroupCollapsed
                    }),
                    groupEnd: _assign({}, props, {
                        value: prevGroupEnd
                    })
                });
            }
            if (disabledDepth < 0) {
                error1("disabledDepth fell below zero. " + "This is a bug in React. Please file an issue.");
            }
        }
    }
    var ReactCurrentDispatcher1 = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix1;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
            if (prefix1 === undefined) {
                try {
                    throw Error();
                } catch (x) {
                    var match = x.stack.trim().match(/\n( *(at )?)/);
                    prefix1 = match && match[1] || "";
                }
            }
            return "\n" + prefix1 + name;
        }
    }
    var reentry = false;
    var componentFrameCache;
    {
        var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
    }
    function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) {
            return "";
        }
        {
            var frame = componentFrameCache.get(fn);
            if (frame !== undefined) {
                return frame;
            }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        {
            previousDispatcher = ReactCurrentDispatcher1.current;
            ReactCurrentDispatcher1.current = null;
            disableLogs();
        }
        try {
            if (construct) {
                var Fake = function() {
                    throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                    set: function() {
                        throw Error();
                    }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                    c--;
                }
                for(; s >= 1 && c >= 0; s--, c--){
                    if (sampleLines[s] !== controlLines[c]) {
                        if (s !== 1 || c !== 1) {
                            do {
                                s--;
                                c--;
                                if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                    var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                                    {
                                        if (typeof fn === "function") {
                                            componentFrameCache.set(fn, _frame);
                                        }
                                    }
                                    return _frame;
                                }
                            }while (s >= 1 && c >= 0)
                        }
                        break;
                    }
                }
            }
        } finally{
            reentry = false;
            {
                ReactCurrentDispatcher1.current = previousDispatcher;
                reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        {
            if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
            }
        }
        return syntheticFrame;
    }
    function describeClassComponentFrame(ctor, source, ownerFn) {
        {
            return describeNativeComponentFrame(ctor, true);
        }
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
            return describeNativeComponentFrame(fn, false);
        }
    }
    function shouldConstruct(Component1) {
        var prototype = Component1.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
            return "";
        }
        if (typeof type === "function") {
            {
                return describeNativeComponentFrame(type, shouldConstruct(type));
            }
        }
        if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
        }
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") {
            switch(type.$$typeof){
                case REACT_FORWARD_REF_TYPE:
                    return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                    return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_BLOCK_TYPE:
                    return describeFunctionComponentFrame(type._render);
                case REACT_LAZY_TYPE:
                    {
                        var lazyComponent = type;
                        var payload = lazyComponent._payload;
                        var init = lazyComponent._init;
                        try {
                            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                        } catch (x) {}
                    }
            }
        }
        return "";
    }
    function describeFiber(fiber) {
        fiber._debugOwner ? fiber._debugOwner.type : null;
        fiber._debugSource;
        switch(fiber.tag){
            case HostComponent:
                return describeBuiltInComponentFrame(fiber.type);
            case LazyComponent:
                return describeBuiltInComponentFrame("Lazy");
            case SuspenseComponent:
                return describeBuiltInComponentFrame("Suspense");
            case SuspenseListComponent:
                return describeBuiltInComponentFrame("SuspenseList");
            case FunctionComponent:
            case IndeterminateComponent:
            case SimpleMemoComponent:
                return describeFunctionComponentFrame(fiber.type);
            case ForwardRef:
                return describeFunctionComponentFrame(fiber.type.render);
            case Block:
                return describeFunctionComponentFrame(fiber.type._render);
            case ClassComponent:
                return describeClassComponentFrame(fiber.type);
            default:
                return "";
        }
    }
    function getStackByFiberInDevAndProd(workInProgress) {
        try {
            var info = "";
            var node = workInProgress;
            do {
                info += describeFiber(node);
                node = node.return;
            }while (node)
            return info;
        } catch (x) {
            return "\nError generating stack: " + x.message + "\n" + x.stack;
        }
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || "";
        return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
    }
    function getContextName(type) {
        return type.displayName || "Context";
    }
    function getComponentName(type) {
        if (type == null) {
            return null;
        }
        {
            if (typeof type.tag === "number") {
                error1("Received an unexpected object in getComponentName(). " + "This is likely a bug in React. Please file an issue.");
            }
        }
        if (typeof type === "function") {
            return type.displayName || type.name || null;
        }
        if (typeof type === "string") {
            return type;
        }
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if (typeof type === "object") {
            switch(type.$$typeof){
                case REACT_CONTEXT_TYPE:
                    var context = type;
                    return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                    var provider = type;
                    return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                    return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                    return getComponentName(type.type);
                case REACT_BLOCK_TYPE:
                    return getComponentName(type._render);
                case REACT_LAZY_TYPE:
                    {
                        var lazyComponent = type;
                        var payload = lazyComponent._payload;
                        var init = lazyComponent._init;
                        try {
                            return getComponentName(init(payload));
                        } catch (x) {
                            return null;
                        }
                    }
            }
        }
        return null;
    }
    var ReactDebugCurrentFrame1 = ReactSharedInternals.ReactDebugCurrentFrame;
    var current1 = null;
    var isRendering = false;
    function getCurrentFiberOwnerNameInDevOrNull() {
        {
            if (current1 === null) {
                return null;
            }
            var owner = current1._debugOwner;
            if (owner !== null && typeof owner !== "undefined") {
                return getComponentName(owner.type);
            }
        }
        return null;
    }
    function getCurrentFiberStackInDev() {
        {
            if (current1 === null) {
                return "";
            }
            return getStackByFiberInDevAndProd(current1);
        }
    }
    function resetCurrentFiber() {
        {
            ReactDebugCurrentFrame1.getCurrentStack = null;
            current1 = null;
            isRendering = false;
        }
    }
    function setCurrentFiber(fiber) {
        {
            ReactDebugCurrentFrame1.getCurrentStack = getCurrentFiberStackInDev;
            current1 = fiber;
            isRendering = false;
        }
    }
    function setIsRendering(rendering) {
        {
            isRendering = rendering;
        }
    }
    function getIsRendering() {
        {
            return isRendering;
        }
    }
    function toString(value) {
        return "" + value;
    }
    function getToStringValue(value) {
        switch(typeof value){
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
                return value;
            default:
                return "";
        }
    }
    var hasReadOnlyValue = {
        button: true,
        checkbox: true,
        image: true,
        hidden: true,
        radio: true,
        reset: true,
        submit: true
    };
    function checkControlledValueProps(tagName, props) {
        {
            if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
                error1("You provided a `value` prop to a form field without an " + "`onChange` handler. This will render a read-only field. If " + "the field should be mutable use `defaultValue`. Otherwise, " + "set either `onChange` or `readOnly`.");
            }
            if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
                error1("You provided a `checked` prop to a form field without an " + "`onChange` handler. This will render a read-only field. If " + "the field should be mutable use `defaultChecked`. Otherwise, " + "set either `onChange` or `readOnly`.");
            }
        }
    }
    function isCheckable(elem) {
        var type = elem.type;
        var nodeName = elem.nodeName;
        return nodeName && nodeName.toLowerCase() === "input" && (type === "checkbox" || type === "radio");
    }
    function getTracker(node) {
        return node._valueTracker;
    }
    function detachTracker(node) {
        node._valueTracker = null;
    }
    function getValueFromNode(node) {
        var value = "";
        if (!node) {
            return value;
        }
        if (isCheckable(node)) {
            value = node.checked ? "true" : "false";
        } else {
            value = node.value;
        }
        return value;
    }
    function trackValueOnNode(node) {
        var valueField = isCheckable(node) ? "checked" : "value";
        var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);
        var currentValue = "" + node[valueField];
        if (node.hasOwnProperty(valueField) || typeof descriptor === "undefined" || typeof descriptor.get !== "function" || typeof descriptor.set !== "function") {
            return;
        }
        var get = descriptor.get, set = descriptor.set;
        Object.defineProperty(node, valueField, {
            configurable: true,
            get: function() {
                return get.call(this);
            },
            set: function(value) {
                currentValue = "" + value;
                set.call(this, value);
            }
        });
        Object.defineProperty(node, valueField, {
            enumerable: descriptor.enumerable
        });
        var tracker = {
            getValue: function() {
                return currentValue;
            },
            setValue: function(value) {
                currentValue = "" + value;
            },
            stopTracking: function() {
                detachTracker(node);
                delete node[valueField];
            }
        };
        return tracker;
    }
    function track(node) {
        if (getTracker(node)) {
            return;
        }
        node._valueTracker = trackValueOnNode(node);
    }
    function updateValueIfChanged(node) {
        if (!node) {
            return false;
        }
        var tracker = getTracker(node);
        if (!tracker) {
            return true;
        }
        var lastValue = tracker.getValue();
        var nextValue = getValueFromNode(node);
        if (nextValue !== lastValue) {
            tracker.setValue(nextValue);
            return true;
        }
        return false;
    }
    function getActiveElement(doc) {
        doc = doc || (typeof document !== "undefined" ? document : undefined);
        if (typeof doc === "undefined") {
            return null;
        }
        try {
            return doc.activeElement || doc.body;
        } catch (e) {
            return doc.body;
        }
    }
    var didWarnValueDefaultValue = false;
    var didWarnCheckedDefaultChecked = false;
    var didWarnControlledToUncontrolled = false;
    var didWarnUncontrolledToControlled = false;
    function isControlled(props) {
        var usesChecked = props.type === "checkbox" || props.type === "radio";
        return usesChecked ? props.checked != null : props.value != null;
    }
    function getHostProps(element, props) {
        var node = element;
        var checked = props.checked;
        var hostProps = _assign({}, props, {
            defaultChecked: undefined,
            defaultValue: undefined,
            value: undefined,
            checked: checked != null ? checked : node._wrapperState.initialChecked
        });
        return hostProps;
    }
    function initWrapperState(element, props) {
        {
            checkControlledValueProps("input", props);
            if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnCheckedDefaultChecked) {
                error1("%s contains an input of type %s with both checked and defaultChecked props. " + "Input elements must be either controlled or uncontrolled " + "(specify either the checked prop, or the defaultChecked prop, but not " + "both). Decide between using a controlled or uncontrolled input " + "element and remove one of these props. More info: " + "https://reactjs.org/link/controlled-components", getCurrentFiberOwnerNameInDevOrNull() || "A component", props.type);
                didWarnCheckedDefaultChecked = true;
            }
            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
                error1("%s contains an input of type %s with both value and defaultValue props. " + "Input elements must be either controlled or uncontrolled " + "(specify either the value prop, or the defaultValue prop, but not " + "both). Decide between using a controlled or uncontrolled input " + "element and remove one of these props. More info: " + "https://reactjs.org/link/controlled-components", getCurrentFiberOwnerNameInDevOrNull() || "A component", props.type);
                didWarnValueDefaultValue = true;
            }
        }
        var node = element;
        var defaultValue = props.defaultValue == null ? "" : props.defaultValue;
        node._wrapperState = {
            initialChecked: props.checked != null ? props.checked : props.defaultChecked,
            initialValue: getToStringValue(props.value != null ? props.value : defaultValue),
            controlled: isControlled(props)
        };
    }
    function updateChecked(element, props) {
        var node = element;
        var checked = props.checked;
        if (checked != null) {
            setValueForProperty(node, "checked", checked, false);
        }
    }
    function updateWrapper(element, props) {
        var node = element;
        {
            var controlled = isControlled(props);
            if (!node._wrapperState.controlled && controlled && !didWarnUncontrolledToControlled) {
                error1("A component is changing an uncontrolled input to be controlled. " + "This is likely caused by the value changing from undefined to " + "a defined value, which should not happen. " + "Decide between using a controlled or uncontrolled input " + "element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components");
                didWarnUncontrolledToControlled = true;
            }
            if (node._wrapperState.controlled && !controlled && !didWarnControlledToUncontrolled) {
                error1("A component is changing a controlled input to be uncontrolled. " + "This is likely caused by the value changing from a defined to " + "undefined, which should not happen. " + "Decide between using a controlled or uncontrolled input " + "element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components");
                didWarnControlledToUncontrolled = true;
            }
        }
        updateChecked(element, props);
        var value = getToStringValue(props.value);
        var type = props.type;
        if (value != null) {
            if (type === "number") {
                if (value === 0 && node.value === "" || node.value != value) {
                    node.value = toString(value);
                }
            } else if (node.value !== toString(value)) {
                node.value = toString(value);
            }
        } else if (type === "submit" || type === "reset") {
            node.removeAttribute("value");
            return;
        }
        {
            if (props.hasOwnProperty("value")) {
                setDefaultValue(node, props.type, value);
            } else if (props.hasOwnProperty("defaultValue")) {
                setDefaultValue(node, props.type, getToStringValue(props.defaultValue));
            }
        }
        {
            if (props.checked == null && props.defaultChecked != null) {
                node.defaultChecked = !!props.defaultChecked;
            }
        }
    }
    function postMountWrapper(element, props, isHydrating) {
        var node = element;
        if (props.hasOwnProperty("value") || props.hasOwnProperty("defaultValue")) {
            var type = props.type;
            var isButton = type === "submit" || type === "reset";
            if (isButton && (props.value === undefined || props.value === null)) {
                return;
            }
            var initialValue = toString(node._wrapperState.initialValue);
            if (!isHydrating) {
                {
                    if (initialValue !== node.value) {
                        node.value = initialValue;
                    }
                }
            }
            {
                node.defaultValue = initialValue;
            }
        }
        var name = node.name;
        if (name !== "") {
            node.name = "";
        }
        {
            node.defaultChecked = !node.defaultChecked;
            node.defaultChecked = !!node._wrapperState.initialChecked;
        }
        if (name !== "") {
            node.name = name;
        }
    }
    function restoreControlledState(element, props) {
        var node = element;
        updateWrapper(node, props);
        updateNamedCousins(node, props);
    }
    function updateNamedCousins(rootNode, props) {
        var name = props.name;
        if (props.type === "radio" && name != null) {
            var queryRoot = rootNode;
            while(queryRoot.parentNode){
                queryRoot = queryRoot.parentNode;
            }
            var group = queryRoot.querySelectorAll("input[name=" + JSON.stringify("" + name) + "][type=\"radio\"]");
            for(var i = 0; i < group.length; i++){
                var otherNode = group[i];
                if (otherNode === rootNode || otherNode.form !== rootNode.form) {
                    continue;
                }
                var otherProps = getFiberCurrentPropsFromNode(otherNode);
                if (!otherProps) {
                    {
                        throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
                    }
                }
                updateValueIfChanged(otherNode);
                updateWrapper(otherNode, otherProps);
            }
        }
    }
    function setDefaultValue(node, type, value) {
        if (type !== "number" || getActiveElement(node.ownerDocument) !== node) {
            if (value == null) {
                node.defaultValue = toString(node._wrapperState.initialValue);
            } else if (node.defaultValue !== toString(value)) {
                node.defaultValue = toString(value);
            }
        }
    }
    var didWarnSelectedSetOnOption = false;
    var didWarnInvalidChild = false;
    function flattenChildren(children) {
        var content = "";
        React.Children.forEach(children, function(child) {
            if (child == null) {
                return;
            }
            content += child;
        });
        return content;
    }
    function validateProps(element, props) {
        {
            if (typeof props.children === "object" && props.children !== null) {
                React.Children.forEach(props.children, function(child) {
                    if (child == null) {
                        return;
                    }
                    if (typeof child === "string" || typeof child === "number") {
                        return;
                    }
                    if (typeof child.type !== "string") {
                        return;
                    }
                    if (!didWarnInvalidChild) {
                        didWarnInvalidChild = true;
                        error1("Only strings and numbers are supported as <option> children.");
                    }
                });
            }
            if (props.selected != null && !didWarnSelectedSetOnOption) {
                error1("Use the `defaultValue` or `value` props on <select> instead of " + "setting `selected` on <option>.");
                didWarnSelectedSetOnOption = true;
            }
        }
    }
    function postMountWrapper$1(element, props) {
        if (props.value != null) {
            element.setAttribute("value", toString(getToStringValue(props.value)));
        }
    }
    function getHostProps$1(element, props) {
        var hostProps = _assign({
            children: undefined
        }, props);
        var content = flattenChildren(props.children);
        if (content) {
            hostProps.children = content;
        }
        return hostProps;
    }
    var didWarnValueDefaultValue$1;
    {
        didWarnValueDefaultValue$1 = false;
    }
    function getDeclarationErrorAddendum() {
        var ownerName = getCurrentFiberOwnerNameInDevOrNull();
        if (ownerName) {
            return "\n\nCheck the render method of `" + ownerName + "`.";
        }
        return "";
    }
    var valuePropNames = [
        "value",
        "defaultValue"
    ];
    function checkSelectPropTypes(props) {
        {
            checkControlledValueProps("select", props);
            for(var i = 0; i < valuePropNames.length; i++){
                var propName = valuePropNames[i];
                if (props[propName] == null) {
                    continue;
                }
                var isArray = Array.isArray(props[propName]);
                if (props.multiple && !isArray) {
                    error1("The `%s` prop supplied to <select> must be an array if " + "`multiple` is true.%s", propName, getDeclarationErrorAddendum());
                } else if (!props.multiple && isArray) {
                    error1("The `%s` prop supplied to <select> must be a scalar " + "value if `multiple` is false.%s", propName, getDeclarationErrorAddendum());
                }
            }
        }
    }
    function updateOptions(node, multiple, propValue, setDefaultSelected) {
        var options = node.options;
        if (multiple) {
            var selectedValues = propValue;
            var selectedValue = {};
            for(var i = 0; i < selectedValues.length; i++){
                selectedValue["$" + selectedValues[i]] = true;
            }
            for(var _i = 0; _i < options.length; _i++){
                var selected = selectedValue.hasOwnProperty("$" + options[_i].value);
                if (options[_i].selected !== selected) {
                    options[_i].selected = selected;
                }
                if (selected && setDefaultSelected) {
                    options[_i].defaultSelected = true;
                }
            }
        } else {
            var _selectedValue = toString(getToStringValue(propValue));
            var defaultSelected = null;
            for(var _i2 = 0; _i2 < options.length; _i2++){
                if (options[_i2].value === _selectedValue) {
                    options[_i2].selected = true;
                    if (setDefaultSelected) {
                        options[_i2].defaultSelected = true;
                    }
                    return;
                }
                if (defaultSelected === null && !options[_i2].disabled) {
                    defaultSelected = options[_i2];
                }
            }
            if (defaultSelected !== null) {
                defaultSelected.selected = true;
            }
        }
    }
    function getHostProps$2(element, props) {
        return _assign({}, props, {
            value: undefined
        });
    }
    function initWrapperState$1(element, props) {
        var node = element;
        {
            checkSelectPropTypes(props);
        }
        node._wrapperState = {
            wasMultiple: !!props.multiple
        };
        {
            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue$1) {
                error1("Select elements must be either controlled or uncontrolled " + "(specify either the value prop, or the defaultValue prop, but not " + "both). Decide between using a controlled or uncontrolled select " + "element and remove one of these props. More info: " + "https://reactjs.org/link/controlled-components");
                didWarnValueDefaultValue$1 = true;
            }
        }
    }
    function postMountWrapper$2(element, props) {
        var node = element;
        node.multiple = !!props.multiple;
        var value = props.value;
        if (value != null) {
            updateOptions(node, !!props.multiple, value, false);
        } else if (props.defaultValue != null) {
            updateOptions(node, !!props.multiple, props.defaultValue, true);
        }
    }
    function postUpdateWrapper(element, props) {
        var node = element;
        var wasMultiple = node._wrapperState.wasMultiple;
        node._wrapperState.wasMultiple = !!props.multiple;
        var value = props.value;
        if (value != null) {
            updateOptions(node, !!props.multiple, value, false);
        } else if (wasMultiple !== !!props.multiple) {
            if (props.defaultValue != null) {
                updateOptions(node, !!props.multiple, props.defaultValue, true);
            } else {
                updateOptions(node, !!props.multiple, props.multiple ? [] : "", false);
            }
        }
    }
    function restoreControlledState$1(element, props) {
        var node = element;
        var value = props.value;
        if (value != null) {
            updateOptions(node, !!props.multiple, value, false);
        }
    }
    var didWarnValDefaultVal = false;
    function getHostProps$3(element, props) {
        var node = element;
        if (!(props.dangerouslySetInnerHTML == null)) {
            {
                throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            }
        }
        var hostProps = _assign({}, props, {
            value: undefined,
            defaultValue: undefined,
            children: toString(node._wrapperState.initialValue)
        });
        return hostProps;
    }
    function initWrapperState$2(element, props) {
        var node = element;
        {
            checkControlledValueProps("textarea", props);
            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValDefaultVal) {
                error1("%s contains a textarea with both value and defaultValue props. " + "Textarea elements must be either controlled or uncontrolled " + "(specify either the value prop, or the defaultValue prop, but not " + "both). Decide between using a controlled or uncontrolled textarea " + "and remove one of these props. More info: " + "https://reactjs.org/link/controlled-components", getCurrentFiberOwnerNameInDevOrNull() || "A component");
                didWarnValDefaultVal = true;
            }
        }
        var initialValue = props.value;
        if (initialValue == null) {
            var children = props.children, defaultValue = props.defaultValue;
            if (children != null) {
                {
                    error1("Use the `defaultValue` or `value` props instead of setting " + "children on <textarea>.");
                }
                {
                    if (!(defaultValue == null)) {
                        {
                            throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
                        }
                    }
                    if (Array.isArray(children)) {
                        if (!(children.length <= 1)) {
                            {
                                throw Error("<textarea> can only have at most one child.");
                            }
                        }
                        children = children[0];
                    }
                    defaultValue = children;
                }
            }
            if (defaultValue == null) {
                defaultValue = "";
            }
            initialValue = defaultValue;
        }
        node._wrapperState = {
            initialValue: getToStringValue(initialValue)
        };
    }
    function updateWrapper$1(element, props) {
        var node = element;
        var value = getToStringValue(props.value);
        var defaultValue = getToStringValue(props.defaultValue);
        if (value != null) {
            var newValue = toString(value);
            if (newValue !== node.value) {
                node.value = newValue;
            }
            if (props.defaultValue == null && node.defaultValue !== newValue) {
                node.defaultValue = newValue;
            }
        }
        if (defaultValue != null) {
            node.defaultValue = toString(defaultValue);
        }
    }
    function postMountWrapper$3(element, props) {
        var node = element;
        var textContent = node.textContent;
        if (textContent === node._wrapperState.initialValue) {
            if (textContent !== "" && textContent !== null) {
                node.value = textContent;
            }
        }
    }
    function restoreControlledState$2(element, props) {
        updateWrapper$1(element, props);
    }
    var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
    var MATH_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
    var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
    var Namespaces = {
        html: HTML_NAMESPACE,
        mathml: MATH_NAMESPACE,
        svg: SVG_NAMESPACE
    };
    function getIntrinsicNamespace(type) {
        switch(type){
            case "svg":
                return SVG_NAMESPACE;
            case "math":
                return MATH_NAMESPACE;
            default:
                return HTML_NAMESPACE;
        }
    }
    function getChildNamespace(parentNamespace, type) {
        if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
            return getIntrinsicNamespace(type);
        }
        if (parentNamespace === SVG_NAMESPACE && type === "foreignObject") {
            return HTML_NAMESPACE;
        }
        return parentNamespace;
    }
    var createMicrosoftUnsafeLocalFunction = function(func) {
        if (typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction) {
            return function(arg0, arg1, arg2, arg3) {
                MSApp.execUnsafeLocalFunction(function() {
                    return func(arg0, arg1, arg2, arg3);
                });
            };
        } else {
            return func;
        }
    };
    var reusableSVGContainer;
    var setInnerHTML = createMicrosoftUnsafeLocalFunction(function(node, html) {
        if (node.namespaceURI === Namespaces.svg) {
            if (!("innerHTML" in node)) {
                reusableSVGContainer = reusableSVGContainer || document.createElement("div");
                reusableSVGContainer.innerHTML = "<svg>" + html.valueOf().toString() + "</svg>";
                var svgNode = reusableSVGContainer.firstChild;
                while(node.firstChild){
                    node.removeChild(node.firstChild);
                }
                while(svgNode.firstChild){
                    node.appendChild(svgNode.firstChild);
                }
                return;
            }
        }
        node.innerHTML = html;
    });
    var ELEMENT_NODE = 1;
    var TEXT_NODE = 3;
    var COMMENT_NODE = 8;
    var DOCUMENT_NODE = 9;
    var DOCUMENT_FRAGMENT_NODE = 11;
    var setTextContent = function(node, text) {
        if (text) {
            var firstChild = node.firstChild;
            if (firstChild && firstChild === node.lastChild && firstChild.nodeType === TEXT_NODE) {
                firstChild.nodeValue = text;
                return;
            }
        }
        node.textContent = text;
    };
    var shorthandToLonghand = {
        animation: [
            "animationDelay",
            "animationDirection",
            "animationDuration",
            "animationFillMode",
            "animationIterationCount",
            "animationName",
            "animationPlayState",
            "animationTimingFunction"
        ],
        background: [
            "backgroundAttachment",
            "backgroundClip",
            "backgroundColor",
            "backgroundImage",
            "backgroundOrigin",
            "backgroundPositionX",
            "backgroundPositionY",
            "backgroundRepeat",
            "backgroundSize"
        ],
        backgroundPosition: [
            "backgroundPositionX",
            "backgroundPositionY"
        ],
        border: [
            "borderBottomColor",
            "borderBottomStyle",
            "borderBottomWidth",
            "borderImageOutset",
            "borderImageRepeat",
            "borderImageSlice",
            "borderImageSource",
            "borderImageWidth",
            "borderLeftColor",
            "borderLeftStyle",
            "borderLeftWidth",
            "borderRightColor",
            "borderRightStyle",
            "borderRightWidth",
            "borderTopColor",
            "borderTopStyle",
            "borderTopWidth"
        ],
        borderBlockEnd: [
            "borderBlockEndColor",
            "borderBlockEndStyle",
            "borderBlockEndWidth"
        ],
        borderBlockStart: [
            "borderBlockStartColor",
            "borderBlockStartStyle",
            "borderBlockStartWidth"
        ],
        borderBottom: [
            "borderBottomColor",
            "borderBottomStyle",
            "borderBottomWidth"
        ],
        borderColor: [
            "borderBottomColor",
            "borderLeftColor",
            "borderRightColor",
            "borderTopColor"
        ],
        borderImage: [
            "borderImageOutset",
            "borderImageRepeat",
            "borderImageSlice",
            "borderImageSource",
            "borderImageWidth"
        ],
        borderInlineEnd: [
            "borderInlineEndColor",
            "borderInlineEndStyle",
            "borderInlineEndWidth"
        ],
        borderInlineStart: [
            "borderInlineStartColor",
            "borderInlineStartStyle",
            "borderInlineStartWidth"
        ],
        borderLeft: [
            "borderLeftColor",
            "borderLeftStyle",
            "borderLeftWidth"
        ],
        borderRadius: [
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
            "borderTopLeftRadius",
            "borderTopRightRadius"
        ],
        borderRight: [
            "borderRightColor",
            "borderRightStyle",
            "borderRightWidth"
        ],
        borderStyle: [
            "borderBottomStyle",
            "borderLeftStyle",
            "borderRightStyle",
            "borderTopStyle"
        ],
        borderTop: [
            "borderTopColor",
            "borderTopStyle",
            "borderTopWidth"
        ],
        borderWidth: [
            "borderBottomWidth",
            "borderLeftWidth",
            "borderRightWidth",
            "borderTopWidth"
        ],
        columnRule: [
            "columnRuleColor",
            "columnRuleStyle",
            "columnRuleWidth"
        ],
        columns: [
            "columnCount",
            "columnWidth"
        ],
        flex: [
            "flexBasis",
            "flexGrow",
            "flexShrink"
        ],
        flexFlow: [
            "flexDirection",
            "flexWrap"
        ],
        font: [
            "fontFamily",
            "fontFeatureSettings",
            "fontKerning",
            "fontLanguageOverride",
            "fontSize",
            "fontSizeAdjust",
            "fontStretch",
            "fontStyle",
            "fontVariant",
            "fontVariantAlternates",
            "fontVariantCaps",
            "fontVariantEastAsian",
            "fontVariantLigatures",
            "fontVariantNumeric",
            "fontVariantPosition",
            "fontWeight",
            "lineHeight"
        ],
        fontVariant: [
            "fontVariantAlternates",
            "fontVariantCaps",
            "fontVariantEastAsian",
            "fontVariantLigatures",
            "fontVariantNumeric",
            "fontVariantPosition"
        ],
        gap: [
            "columnGap",
            "rowGap"
        ],
        grid: [
            "gridAutoColumns",
            "gridAutoFlow",
            "gridAutoRows",
            "gridTemplateAreas",
            "gridTemplateColumns",
            "gridTemplateRows"
        ],
        gridArea: [
            "gridColumnEnd",
            "gridColumnStart",
            "gridRowEnd",
            "gridRowStart"
        ],
        gridColumn: [
            "gridColumnEnd",
            "gridColumnStart"
        ],
        gridColumnGap: [
            "columnGap"
        ],
        gridGap: [
            "columnGap",
            "rowGap"
        ],
        gridRow: [
            "gridRowEnd",
            "gridRowStart"
        ],
        gridRowGap: [
            "rowGap"
        ],
        gridTemplate: [
            "gridTemplateAreas",
            "gridTemplateColumns",
            "gridTemplateRows"
        ],
        listStyle: [
            "listStyleImage",
            "listStylePosition",
            "listStyleType"
        ],
        margin: [
            "marginBottom",
            "marginLeft",
            "marginRight",
            "marginTop"
        ],
        marker: [
            "markerEnd",
            "markerMid",
            "markerStart"
        ],
        mask: [
            "maskClip",
            "maskComposite",
            "maskImage",
            "maskMode",
            "maskOrigin",
            "maskPositionX",
            "maskPositionY",
            "maskRepeat",
            "maskSize"
        ],
        maskPosition: [
            "maskPositionX",
            "maskPositionY"
        ],
        outline: [
            "outlineColor",
            "outlineStyle",
            "outlineWidth"
        ],
        overflow: [
            "overflowX",
            "overflowY"
        ],
        padding: [
            "paddingBottom",
            "paddingLeft",
            "paddingRight",
            "paddingTop"
        ],
        placeContent: [
            "alignContent",
            "justifyContent"
        ],
        placeItems: [
            "alignItems",
            "justifyItems"
        ],
        placeSelf: [
            "alignSelf",
            "justifySelf"
        ],
        textDecoration: [
            "textDecorationColor",
            "textDecorationLine",
            "textDecorationStyle"
        ],
        textEmphasis: [
            "textEmphasisColor",
            "textEmphasisStyle"
        ],
        transition: [
            "transitionDelay",
            "transitionDuration",
            "transitionProperty",
            "transitionTimingFunction"
        ],
        wordWrap: [
            "overflowWrap"
        ]
    };
    var isUnitlessNumber = {
        animationIterationCount: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
    };
    function prefixKey(prefix, key) {
        return prefix + key.charAt(0).toUpperCase() + key.substring(1);
    }
    var prefixes1 = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(isUnitlessNumber).forEach(function(prop) {
        prefixes1.forEach(function(prefix) {
            isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
        });
    });
    function dangerousStyleValue(name, value, isCustomProperty) {
        var isEmpty = value == null || typeof value === "boolean" || value === "";
        if (isEmpty) {
            return "";
        }
        if (!isCustomProperty && typeof value === "number" && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
            return value + "px";
        }
        return ("" + value).trim();
    }
    var uppercasePattern = /([A-Z])/g;
    var msPattern = /^ms-/;
    function hyphenateStyleName(name) {
        return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-");
    }
    var warnValidStyle = function() {};
    {
        var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
        var msPattern$1 = /^-ms-/;
        var hyphenPattern = /-(.)/g;
        var badStyleValueWithSemicolonPattern = /;\s*$/;
        var warnedStyleNames = {};
        var warnedStyleValues = {};
        var warnedForNaNValue = false;
        var warnedForInfinityValue = false;
        var camelize = function(string) {
            return string.replace(hyphenPattern, function(_, character) {
                return character.toUpperCase();
            });
        };
        var warnHyphenatedStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
                return;
            }
            warnedStyleNames[name] = true;
            error1("Unsupported style property %s. Did you mean %s?", name, camelize(name.replace(msPattern$1, "ms-")));
        };
        var warnBadVendoredStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
                return;
            }
            warnedStyleNames[name] = true;
            error1("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1));
        };
        var warnStyleValueWithSemicolon = function(name, value) {
            if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
                return;
            }
            warnedStyleValues[value] = true;
            error1("Style property values shouldn't contain a semicolon. " + "Try \"%s: %s\" instead.", name, value.replace(badStyleValueWithSemicolonPattern, ""));
        };
        var warnStyleValueIsNaN = function(name, value) {
            if (warnedForNaNValue) {
                return;
            }
            warnedForNaNValue = true;
            error1("`NaN` is an invalid value for the `%s` css style property.", name);
        };
        var warnStyleValueIsInfinity = function(name, value) {
            if (warnedForInfinityValue) {
                return;
            }
            warnedForInfinityValue = true;
            error1("`Infinity` is an invalid value for the `%s` css style property.", name);
        };
        warnValidStyle = function(name, value) {
            if (name.indexOf("-") > -1) {
                warnHyphenatedStyleName(name);
            } else if (badVendoredStyleNamePattern.test(name)) {
                warnBadVendoredStyleName(name);
            } else if (badStyleValueWithSemicolonPattern.test(value)) {
                warnStyleValueWithSemicolon(name, value);
            }
            if (typeof value === "number") {
                if (isNaN(value)) {
                    warnStyleValueIsNaN(name, value);
                } else if (!isFinite(value)) {
                    warnStyleValueIsInfinity(name, value);
                }
            }
        };
    }
    var warnValidStyle$1 = warnValidStyle;
    function createDangerousStringForStyles(styles) {
        {
            var serialized = "";
            var delimiter = "";
            for(var styleName in styles){
                if (!styles.hasOwnProperty(styleName)) {
                    continue;
                }
                var styleValue = styles[styleName];
                if (styleValue != null) {
                    var isCustomProperty = styleName.indexOf("--") === 0;
                    serialized += delimiter + (isCustomProperty ? styleName : hyphenateStyleName(styleName)) + ":";
                    serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
                    delimiter = ";";
                }
            }
            return serialized || null;
        }
    }
    function setValueForStyles(node, styles) {
        var style = node.style;
        for(var styleName in styles){
            if (!styles.hasOwnProperty(styleName)) {
                continue;
            }
            var isCustomProperty = styleName.indexOf("--") === 0;
            {
                if (!isCustomProperty) {
                    warnValidStyle$1(styleName, styles[styleName]);
                }
            }
            var styleValue = dangerousStyleValue(styleName, styles[styleName], isCustomProperty);
            if (styleName === "float") {
                styleName = "cssFloat";
            }
            if (isCustomProperty) {
                style.setProperty(styleName, styleValue);
            } else {
                style[styleName] = styleValue;
            }
        }
    }
    function isValueEmpty(value) {
        return value == null || typeof value === "boolean" || value === "";
    }
    function expandShorthandMap(styles) {
        var expanded = {};
        for(var key in styles){
            var longhands = shorthandToLonghand[key] || [
                key
            ];
            for(var i = 0; i < longhands.length; i++){
                expanded[longhands[i]] = key;
            }
        }
        return expanded;
    }
    function validateShorthandPropertyCollisionInDev(styleUpdates, nextStyles) {
        {
            if (!nextStyles) {
                return;
            }
            var expandedUpdates = expandShorthandMap(styleUpdates);
            var expandedStyles = expandShorthandMap(nextStyles);
            var warnedAbout = {};
            for(var key in expandedUpdates){
                var originalKey = expandedUpdates[key];
                var correctOriginalKey = expandedStyles[key];
                if (correctOriginalKey && originalKey !== correctOriginalKey) {
                    var warningKey = originalKey + "," + correctOriginalKey;
                    if (warnedAbout[warningKey]) {
                        continue;
                    }
                    warnedAbout[warningKey] = true;
                    error1("%s a style property during rerender (%s) when a " + "conflicting property is set (%s) can lead to styling bugs. To " + "avoid this, don't mix shorthand and non-shorthand properties " + "for the same value; instead, replace the shorthand with " + "separate values.", isValueEmpty(styleUpdates[originalKey]) ? "Removing" : "Updating", originalKey, correctOriginalKey);
                }
            }
        }
    }
    var omittedCloseTags = {
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
    };
    var voidElementTags = _assign({
        menuitem: true
    }, omittedCloseTags);
    var HTML = "__html";
    function assertValidProps(tag, props) {
        if (!props) {
            return;
        }
        if (voidElementTags[tag]) {
            if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
                {
                    throw Error(tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                }
            }
        }
        if (props.dangerouslySetInnerHTML != null) {
            if (!(props.children == null)) {
                {
                    throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
                }
            }
            if (!(typeof props.dangerouslySetInnerHTML === "object" && HTML in props.dangerouslySetInnerHTML)) {
                {
                    throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
                }
            }
        }
        {
            if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
                error1("A component is `contentEditable` and contains `children` managed by " + "React. It is now your responsibility to guarantee that none of " + "those nodes are unexpectedly modified or duplicated. This is " + "probably not intentional.");
            }
        }
        if (!(props.style == null || typeof props.style === "object")) {
            {
                throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
            }
        }
    }
    function isCustomComponent(tagName, props) {
        if (tagName.indexOf("-") === -1) {
            return typeof props.is === "string";
        }
        switch(tagName){
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return false;
            default:
                return true;
        }
    }
    var possibleStandardNames = {
        accept: "accept",
        acceptcharset: "acceptCharset",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        action: "action",
        allowfullscreen: "allowFullScreen",
        alt: "alt",
        as: "as",
        async: "async",
        autocapitalize: "autoCapitalize",
        autocomplete: "autoComplete",
        autocorrect: "autoCorrect",
        autofocus: "autoFocus",
        autoplay: "autoPlay",
        autosave: "autoSave",
        capture: "capture",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        challenge: "challenge",
        charset: "charSet",
        checked: "checked",
        children: "children",
        cite: "cite",
        class: "className",
        classid: "classID",
        classname: "className",
        cols: "cols",
        colspan: "colSpan",
        content: "content",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controls: "controls",
        controlslist: "controlsList",
        coords: "coords",
        crossorigin: "crossOrigin",
        dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
        data: "data",
        datetime: "dateTime",
        default: "default",
        defaultchecked: "defaultChecked",
        defaultvalue: "defaultValue",
        defer: "defer",
        dir: "dir",
        disabled: "disabled",
        disablepictureinpicture: "disablePictureInPicture",
        disableremoteplayback: "disableRemotePlayback",
        download: "download",
        draggable: "draggable",
        enctype: "encType",
        enterkeyhint: "enterKeyHint",
        for: "htmlFor",
        form: "form",
        formmethod: "formMethod",
        formaction: "formAction",
        formenctype: "formEncType",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameborder: "frameBorder",
        headers: "headers",
        height: "height",
        hidden: "hidden",
        high: "high",
        href: "href",
        hreflang: "hrefLang",
        htmlfor: "htmlFor",
        httpequiv: "httpEquiv",
        "http-equiv": "httpEquiv",
        icon: "icon",
        id: "id",
        innerhtml: "innerHTML",
        inputmode: "inputMode",
        integrity: "integrity",
        is: "is",
        itemid: "itemID",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        keyparams: "keyParams",
        keytype: "keyType",
        kind: "kind",
        label: "label",
        lang: "lang",
        list: "list",
        loop: "loop",
        low: "low",
        manifest: "manifest",
        marginwidth: "marginWidth",
        marginheight: "marginHeight",
        max: "max",
        maxlength: "maxLength",
        media: "media",
        mediagroup: "mediaGroup",
        method: "method",
        min: "min",
        minlength: "minLength",
        multiple: "multiple",
        muted: "muted",
        name: "name",
        nomodule: "noModule",
        nonce: "nonce",
        novalidate: "noValidate",
        open: "open",
        optimum: "optimum",
        pattern: "pattern",
        placeholder: "placeholder",
        playsinline: "playsInline",
        poster: "poster",
        preload: "preload",
        profile: "profile",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        referrerpolicy: "referrerPolicy",
        rel: "rel",
        required: "required",
        reversed: "reversed",
        role: "role",
        rows: "rows",
        rowspan: "rowSpan",
        sandbox: "sandbox",
        scope: "scope",
        scoped: "scoped",
        scrolling: "scrolling",
        seamless: "seamless",
        selected: "selected",
        shape: "shape",
        size: "size",
        sizes: "sizes",
        span: "span",
        spellcheck: "spellCheck",
        src: "src",
        srcdoc: "srcDoc",
        srclang: "srcLang",
        srcset: "srcSet",
        start: "start",
        step: "step",
        style: "style",
        summary: "summary",
        tabindex: "tabIndex",
        target: "target",
        title: "title",
        type: "type",
        usemap: "useMap",
        value: "value",
        width: "width",
        wmode: "wmode",
        wrap: "wrap",
        about: "about",
        accentheight: "accentHeight",
        "accent-height": "accentHeight",
        accumulate: "accumulate",
        additive: "additive",
        alignmentbaseline: "alignmentBaseline",
        "alignment-baseline": "alignmentBaseline",
        allowreorder: "allowReorder",
        alphabetic: "alphabetic",
        amplitude: "amplitude",
        arabicform: "arabicForm",
        "arabic-form": "arabicForm",
        ascent: "ascent",
        attributename: "attributeName",
        attributetype: "attributeType",
        autoreverse: "autoReverse",
        azimuth: "azimuth",
        basefrequency: "baseFrequency",
        baselineshift: "baselineShift",
        "baseline-shift": "baselineShift",
        baseprofile: "baseProfile",
        bbox: "bbox",
        begin: "begin",
        bias: "bias",
        by: "by",
        calcmode: "calcMode",
        capheight: "capHeight",
        "cap-height": "capHeight",
        clip: "clip",
        clippath: "clipPath",
        "clip-path": "clipPath",
        clippathunits: "clipPathUnits",
        cliprule: "clipRule",
        "clip-rule": "clipRule",
        color: "color",
        colorinterpolation: "colorInterpolation",
        "color-interpolation": "colorInterpolation",
        colorinterpolationfilters: "colorInterpolationFilters",
        "color-interpolation-filters": "colorInterpolationFilters",
        colorprofile: "colorProfile",
        "color-profile": "colorProfile",
        colorrendering: "colorRendering",
        "color-rendering": "colorRendering",
        contentscripttype: "contentScriptType",
        contentstyletype: "contentStyleType",
        cursor: "cursor",
        cx: "cx",
        cy: "cy",
        d: "d",
        datatype: "datatype",
        decelerate: "decelerate",
        descent: "descent",
        diffuseconstant: "diffuseConstant",
        direction: "direction",
        display: "display",
        divisor: "divisor",
        dominantbaseline: "dominantBaseline",
        "dominant-baseline": "dominantBaseline",
        dur: "dur",
        dx: "dx",
        dy: "dy",
        edgemode: "edgeMode",
        elevation: "elevation",
        enablebackground: "enableBackground",
        "enable-background": "enableBackground",
        end: "end",
        exponent: "exponent",
        externalresourcesrequired: "externalResourcesRequired",
        fill: "fill",
        fillopacity: "fillOpacity",
        "fill-opacity": "fillOpacity",
        fillrule: "fillRule",
        "fill-rule": "fillRule",
        filter: "filter",
        filterres: "filterRes",
        filterunits: "filterUnits",
        floodopacity: "floodOpacity",
        "flood-opacity": "floodOpacity",
        floodcolor: "floodColor",
        "flood-color": "floodColor",
        focusable: "focusable",
        fontfamily: "fontFamily",
        "font-family": "fontFamily",
        fontsize: "fontSize",
        "font-size": "fontSize",
        fontsizeadjust: "fontSizeAdjust",
        "font-size-adjust": "fontSizeAdjust",
        fontstretch: "fontStretch",
        "font-stretch": "fontStretch",
        fontstyle: "fontStyle",
        "font-style": "fontStyle",
        fontvariant: "fontVariant",
        "font-variant": "fontVariant",
        fontweight: "fontWeight",
        "font-weight": "fontWeight",
        format: "format",
        from: "from",
        fx: "fx",
        fy: "fy",
        g1: "g1",
        g2: "g2",
        glyphname: "glyphName",
        "glyph-name": "glyphName",
        glyphorientationhorizontal: "glyphOrientationHorizontal",
        "glyph-orientation-horizontal": "glyphOrientationHorizontal",
        glyphorientationvertical: "glyphOrientationVertical",
        "glyph-orientation-vertical": "glyphOrientationVertical",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        hanging: "hanging",
        horizadvx: "horizAdvX",
        "horiz-adv-x": "horizAdvX",
        horizoriginx: "horizOriginX",
        "horiz-origin-x": "horizOriginX",
        ideographic: "ideographic",
        imagerendering: "imageRendering",
        "image-rendering": "imageRendering",
        in2: "in2",
        in: "in",
        inlist: "inlist",
        intercept: "intercept",
        k1: "k1",
        k2: "k2",
        k3: "k3",
        k4: "k4",
        k: "k",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        kerning: "kerning",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        letterspacing: "letterSpacing",
        "letter-spacing": "letterSpacing",
        lightingcolor: "lightingColor",
        "lighting-color": "lightingColor",
        limitingconeangle: "limitingConeAngle",
        local: "local",
        markerend: "markerEnd",
        "marker-end": "markerEnd",
        markerheight: "markerHeight",
        markermid: "markerMid",
        "marker-mid": "markerMid",
        markerstart: "markerStart",
        "marker-start": "markerStart",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        mask: "mask",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        mathematical: "mathematical",
        mode: "mode",
        numoctaves: "numOctaves",
        offset: "offset",
        opacity: "opacity",
        operator: "operator",
        order: "order",
        orient: "orient",
        orientation: "orientation",
        origin: "origin",
        overflow: "overflow",
        overlineposition: "overlinePosition",
        "overline-position": "overlinePosition",
        overlinethickness: "overlineThickness",
        "overline-thickness": "overlineThickness",
        paintorder: "paintOrder",
        "paint-order": "paintOrder",
        panose1: "panose1",
        "panose-1": "panose1",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointerevents: "pointerEvents",
        "pointer-events": "pointerEvents",
        points: "points",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        prefix: "prefix",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        property: "property",
        r: "r",
        radius: "radius",
        refx: "refX",
        refy: "refY",
        renderingintent: "renderingIntent",
        "rendering-intent": "renderingIntent",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        resource: "resource",
        restart: "restart",
        result: "result",
        results: "results",
        rotate: "rotate",
        rx: "rx",
        ry: "ry",
        scale: "scale",
        security: "security",
        seed: "seed",
        shaperendering: "shapeRendering",
        "shape-rendering": "shapeRendering",
        slope: "slope",
        spacing: "spacing",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        speed: "speed",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stemh: "stemh",
        stemv: "stemv",
        stitchtiles: "stitchTiles",
        stopcolor: "stopColor",
        "stop-color": "stopColor",
        stopopacity: "stopOpacity",
        "stop-opacity": "stopOpacity",
        strikethroughposition: "strikethroughPosition",
        "strikethrough-position": "strikethroughPosition",
        strikethroughthickness: "strikethroughThickness",
        "strikethrough-thickness": "strikethroughThickness",
        string: "string",
        stroke: "stroke",
        strokedasharray: "strokeDasharray",
        "stroke-dasharray": "strokeDasharray",
        strokedashoffset: "strokeDashoffset",
        "stroke-dashoffset": "strokeDashoffset",
        strokelinecap: "strokeLinecap",
        "stroke-linecap": "strokeLinecap",
        strokelinejoin: "strokeLinejoin",
        "stroke-linejoin": "strokeLinejoin",
        strokemiterlimit: "strokeMiterlimit",
        "stroke-miterlimit": "strokeMiterlimit",
        strokewidth: "strokeWidth",
        "stroke-width": "strokeWidth",
        strokeopacity: "strokeOpacity",
        "stroke-opacity": "strokeOpacity",
        suppresscontenteditablewarning: "suppressContentEditableWarning",
        suppresshydrationwarning: "suppressHydrationWarning",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textanchor: "textAnchor",
        "text-anchor": "textAnchor",
        textdecoration: "textDecoration",
        "text-decoration": "textDecoration",
        textlength: "textLength",
        textrendering: "textRendering",
        "text-rendering": "textRendering",
        to: "to",
        transform: "transform",
        typeof: "typeof",
        u1: "u1",
        u2: "u2",
        underlineposition: "underlinePosition",
        "underline-position": "underlinePosition",
        underlinethickness: "underlineThickness",
        "underline-thickness": "underlineThickness",
        unicode: "unicode",
        unicodebidi: "unicodeBidi",
        "unicode-bidi": "unicodeBidi",
        unicoderange: "unicodeRange",
        "unicode-range": "unicodeRange",
        unitsperem: "unitsPerEm",
        "units-per-em": "unitsPerEm",
        unselectable: "unselectable",
        valphabetic: "vAlphabetic",
        "v-alphabetic": "vAlphabetic",
        values: "values",
        vectoreffect: "vectorEffect",
        "vector-effect": "vectorEffect",
        version: "version",
        vertadvy: "vertAdvY",
        "vert-adv-y": "vertAdvY",
        vertoriginx: "vertOriginX",
        "vert-origin-x": "vertOriginX",
        vertoriginy: "vertOriginY",
        "vert-origin-y": "vertOriginY",
        vhanging: "vHanging",
        "v-hanging": "vHanging",
        videographic: "vIdeographic",
        "v-ideographic": "vIdeographic",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        visibility: "visibility",
        vmathematical: "vMathematical",
        "v-mathematical": "vMathematical",
        vocab: "vocab",
        widths: "widths",
        wordspacing: "wordSpacing",
        "word-spacing": "wordSpacing",
        writingmode: "writingMode",
        "writing-mode": "writingMode",
        x1: "x1",
        x2: "x2",
        x: "x",
        xchannelselector: "xChannelSelector",
        xheight: "xHeight",
        "x-height": "xHeight",
        xlinkactuate: "xlinkActuate",
        "xlink:actuate": "xlinkActuate",
        xlinkarcrole: "xlinkArcrole",
        "xlink:arcrole": "xlinkArcrole",
        xlinkhref: "xlinkHref",
        "xlink:href": "xlinkHref",
        xlinkrole: "xlinkRole",
        "xlink:role": "xlinkRole",
        xlinkshow: "xlinkShow",
        "xlink:show": "xlinkShow",
        xlinktitle: "xlinkTitle",
        "xlink:title": "xlinkTitle",
        xlinktype: "xlinkType",
        "xlink:type": "xlinkType",
        xmlbase: "xmlBase",
        "xml:base": "xmlBase",
        xmllang: "xmlLang",
        "xml:lang": "xmlLang",
        xmlns: "xmlns",
        "xml:space": "xmlSpace",
        xmlnsxlink: "xmlnsXlink",
        "xmlns:xlink": "xmlnsXlink",
        xmlspace: "xmlSpace",
        y1: "y1",
        y2: "y2",
        y: "y",
        ychannelselector: "yChannelSelector",
        z: "z",
        zoomandpan: "zoomAndPan"
    };
    var ariaProperties = {
        "aria-current": 0,
        "aria-details": 0,
        "aria-disabled": 0,
        "aria-hidden": 0,
        "aria-invalid": 0,
        "aria-keyshortcuts": 0,
        "aria-label": 0,
        "aria-roledescription": 0,
        "aria-autocomplete": 0,
        "aria-checked": 0,
        "aria-expanded": 0,
        "aria-haspopup": 0,
        "aria-level": 0,
        "aria-modal": 0,
        "aria-multiline": 0,
        "aria-multiselectable": 0,
        "aria-orientation": 0,
        "aria-placeholder": 0,
        "aria-pressed": 0,
        "aria-readonly": 0,
        "aria-required": 0,
        "aria-selected": 0,
        "aria-sort": 0,
        "aria-valuemax": 0,
        "aria-valuemin": 0,
        "aria-valuenow": 0,
        "aria-valuetext": 0,
        "aria-atomic": 0,
        "aria-busy": 0,
        "aria-live": 0,
        "aria-relevant": 0,
        "aria-dropeffect": 0,
        "aria-grabbed": 0,
        "aria-activedescendant": 0,
        "aria-colcount": 0,
        "aria-colindex": 0,
        "aria-colspan": 0,
        "aria-controls": 0,
        "aria-describedby": 0,
        "aria-errormessage": 0,
        "aria-flowto": 0,
        "aria-labelledby": 0,
        "aria-owns": 0,
        "aria-posinset": 0,
        "aria-rowcount": 0,
        "aria-rowindex": 0,
        "aria-rowspan": 0,
        "aria-setsize": 0
    };
    var warnedProperties = {};
    var rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
    var rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
    var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
    function validateProperty(tagName, name) {
        {
            if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name]) {
                return true;
            }
            if (rARIACamel.test(name)) {
                var ariaName = "aria-" + name.slice(4).toLowerCase();
                var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
                if (correctName == null) {
                    error1("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name);
                    warnedProperties[name] = true;
                    return true;
                }
                if (name !== correctName) {
                    error1("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName);
                    warnedProperties[name] = true;
                    return true;
                }
            }
            if (rARIA.test(name)) {
                var lowerCasedName = name.toLowerCase();
                var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
                if (standardName == null) {
                    warnedProperties[name] = true;
                    return false;
                }
                if (name !== standardName) {
                    error1("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName);
                    warnedProperties[name] = true;
                    return true;
                }
            }
        }
        return true;
    }
    function warnInvalidARIAProps(type, props) {
        {
            var invalidProps = [];
            for(var key in props){
                var isValid = validateProperty(type, key);
                if (!isValid) {
                    invalidProps.push(key);
                }
            }
            var unknownPropString = invalidProps.map(function(prop) {
                return "`" + prop + "`";
            }).join(", ");
            if (invalidProps.length === 1) {
                error1("Invalid aria prop %s on <%s> tag. " + "For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            } else if (invalidProps.length > 1) {
                error1("Invalid aria props %s on <%s> tag. " + "For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            }
        }
    }
    function validateProperties(type, props) {
        if (isCustomComponent(type, props)) {
            return;
        }
        warnInvalidARIAProps(type, props);
    }
    var didWarnValueNull = false;
    function validateProperties$1(type, props) {
        {
            if (type !== "input" && type !== "textarea" && type !== "select") {
                return;
            }
            if (props != null && props.value === null && !didWarnValueNull) {
                didWarnValueNull = true;
                if (type === "select" && props.multiple) {
                    error1("`value` prop on `%s` should not be null. " + "Consider using an empty array when `multiple` is set to `true` " + "to clear the component or `undefined` for uncontrolled components.", type);
                } else {
                    error1("`value` prop on `%s` should not be null. " + "Consider using an empty string to clear the component or `undefined` " + "for uncontrolled components.", type);
                }
            }
        }
    }
    var validateProperty$1 = function() {};
    {
        var warnedProperties$1 = {};
        var _hasOwnProperty = Object.prototype.hasOwnProperty;
        var EVENT_NAME_REGEX = /^on./;
        var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
        var rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
        var rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        validateProperty$1 = function(tagName, name, value, eventRegistry) {
            if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
                return true;
            }
            var lowerCasedName = name.toLowerCase();
            if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout") {
                error1("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. " + "All React events are normalized to bubble, so onFocusIn and onFocusOut " + "are not needed/supported by React.");
                warnedProperties$1[name] = true;
                return true;
            }
            if (eventRegistry != null) {
                var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
                if (registrationNameDependencies.hasOwnProperty(name)) {
                    return true;
                }
                var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
                if (registrationName != null) {
                    error1("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName);
                    warnedProperties$1[name] = true;
                    return true;
                }
                if (EVENT_NAME_REGEX.test(name)) {
                    error1("Unknown event handler property `%s`. It will be ignored.", name);
                    warnedProperties$1[name] = true;
                    return true;
                }
            } else if (EVENT_NAME_REGEX.test(name)) {
                if (INVALID_EVENT_NAME_REGEX.test(name)) {
                    error1("Invalid event handler property `%s`. " + "React events use the camelCase naming convention, for example `onClick`.", name);
                }
                warnedProperties$1[name] = true;
                return true;
            }
            if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
                return true;
            }
            if (lowerCasedName === "innerhtml") {
                error1("Directly setting property `innerHTML` is not permitted. " + "For more information, lookup documentation on `dangerouslySetInnerHTML`.");
                warnedProperties$1[name] = true;
                return true;
            }
            if (lowerCasedName === "aria") {
                error1("The `aria` attribute is reserved for future use in React. " + "Pass individual `aria-` attributes instead.");
                warnedProperties$1[name] = true;
                return true;
            }
            if (lowerCasedName === "is" && value !== null && value !== undefined && typeof value !== "string") {
                error1("Received a `%s` for a string attribute `is`. If this is expected, cast " + "the value to a string.", typeof value);
                warnedProperties$1[name] = true;
                return true;
            }
            if (typeof value === "number" && isNaN(value)) {
                error1("Received NaN for the `%s` attribute. If this is expected, cast " + "the value to a string.", name);
                warnedProperties$1[name] = true;
                return true;
            }
            var propertyInfo = getPropertyInfo(name);
            var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
            if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
                var standardName = possibleStandardNames[lowerCasedName];
                if (standardName !== name) {
                    error1("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName);
                    warnedProperties$1[name] = true;
                    return true;
                }
            } else if (!isReserved && name !== lowerCasedName) {
                error1("React does not recognize the `%s` prop on a DOM element. If you " + "intentionally want it to appear in the DOM as a custom " + "attribute, spell it as lowercase `%s` instead. " + "If you accidentally passed it from a parent component, remove " + "it from the DOM element.", name, lowerCasedName);
                warnedProperties$1[name] = true;
                return true;
            }
            if (typeof value === "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
                if (value) {
                    error1("Received `%s` for a non-boolean attribute `%s`.\n\n" + "If you want to write it to the DOM, pass a string instead: " + "%s=\"%s\" or %s={value.toString()}.", value, name, name, value, name);
                } else {
                    error1("Received `%s` for a non-boolean attribute `%s`.\n\n" + "If you want to write it to the DOM, pass a string instead: " + "%s=\"%s\" or %s={value.toString()}.\n\n" + "If you used to conditionally omit it with %s={condition && value}, " + "pass %s={condition ? value : undefined} instead.", value, name, name, value, name, name, name);
                }
                warnedProperties$1[name] = true;
                return true;
            }
            if (isReserved) {
                return true;
            }
            if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
                warnedProperties$1[name] = true;
                return false;
            }
            if ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
                error1("Received the string `%s` for the boolean attribute `%s`. " + "%s " + "Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : "Although this works, it will not work as expected if you pass the string \"false\".", name, value);
                warnedProperties$1[name] = true;
                return true;
            }
            return true;
        };
    }
    var warnUnknownProperties = function(type, props, eventRegistry) {
        {
            var unknownProps = [];
            for(var key in props){
                var isValid = validateProperty$1(type, key, props[key], eventRegistry);
                if (!isValid) {
                    unknownProps.push(key);
                }
            }
            var unknownPropString = unknownProps.map(function(prop) {
                return "`" + prop + "`";
            }).join(", ");
            if (unknownProps.length === 1) {
                error1("Invalid value for prop %s on <%s> tag. Either remove it from the element, " + "or pass a string or number value to keep it in the DOM. " + "For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            } else if (unknownProps.length > 1) {
                error1("Invalid values for props %s on <%s> tag. Either remove them from the element, " + "or pass a string or number value to keep them in the DOM. " + "For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            }
        }
    };
    function validateProperties$2(type, props, eventRegistry) {
        if (isCustomComponent(type, props)) {
            return;
        }
        warnUnknownProperties(type, props, eventRegistry);
    }
    var IS_EVENT_HANDLE_NON_MANAGED_NODE = 1;
    var IS_NON_DELEGATED = 1 << 1;
    var IS_CAPTURE_PHASE = 1 << 2;
    var IS_REPLAYED = 1 << 4;
    var SHOULD_NOT_PROCESS_POLYFILL_EVENT_PLUGINS = IS_EVENT_HANDLE_NON_MANAGED_NODE | IS_NON_DELEGATED | IS_CAPTURE_PHASE;
    function getEventTarget(nativeEvent) {
        var target = nativeEvent.target || nativeEvent.srcElement || window;
        if (target.correspondingUseElement) {
            target = target.correspondingUseElement;
        }
        return target.nodeType === TEXT_NODE ? target.parentNode : target;
    }
    var restoreImpl = null;
    var restoreTarget = null;
    var restoreQueue = null;
    function restoreStateOfTarget(target) {
        var internalInstance = getInstanceFromNode(target);
        if (!internalInstance) {
            return;
        }
        if (!(typeof restoreImpl === "function")) {
            {
                throw Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
            }
        }
        var stateNode = internalInstance.stateNode;
        if (stateNode) {
            var _props = getFiberCurrentPropsFromNode(stateNode);
            restoreImpl(internalInstance.stateNode, internalInstance.type, _props);
        }
    }
    function setRestoreImplementation(impl) {
        restoreImpl = impl;
    }
    function enqueueStateRestore(target) {
        if (restoreTarget) {
            if (restoreQueue) {
                restoreQueue.push(target);
            } else {
                restoreQueue = [
                    target
                ];
            }
        } else {
            restoreTarget = target;
        }
    }
    function needsStateRestore() {
        return restoreTarget !== null || restoreQueue !== null;
    }
    function restoreStateIfNeeded() {
        if (!restoreTarget) {
            return;
        }
        var target = restoreTarget;
        var queuedTargets = restoreQueue;
        restoreTarget = null;
        restoreQueue = null;
        restoreStateOfTarget(target);
        if (queuedTargets) {
            for(var i = 0; i < queuedTargets.length; i++){
                restoreStateOfTarget(queuedTargets[i]);
            }
        }
    }
    var batchedUpdatesImpl = function(fn, bookkeeping) {
        return fn(bookkeeping);
    };
    var discreteUpdatesImpl = function(fn, a, b, c, d) {
        return fn(a, b, c, d);
    };
    var flushDiscreteUpdatesImpl = function() {};
    var batchedEventUpdatesImpl = batchedUpdatesImpl;
    var isInsideEventHandler = false;
    var isBatchingEventUpdates = false;
    function finishEventHandler() {
        var controlledComponentsHavePendingUpdates = needsStateRestore();
        if (controlledComponentsHavePendingUpdates) {
            flushDiscreteUpdatesImpl();
            restoreStateIfNeeded();
        }
    }
    function batchedUpdates(fn, bookkeeping) {
        if (isInsideEventHandler) {
            return fn(bookkeeping);
        }
        isInsideEventHandler = true;
        try {
            return batchedUpdatesImpl(fn, bookkeeping);
        } finally{
            isInsideEventHandler = false;
            finishEventHandler();
        }
    }
    function batchedEventUpdates(fn, a, b) {
        if (isBatchingEventUpdates) {
            return fn(a, b);
        }
        isBatchingEventUpdates = true;
        try {
            return batchedEventUpdatesImpl(fn, a, b);
        } finally{
            isBatchingEventUpdates = false;
            finishEventHandler();
        }
    }
    function discreteUpdates(fn, a, b, c, d) {
        var prevIsInsideEventHandler = isInsideEventHandler;
        isInsideEventHandler = true;
        try {
            return discreteUpdatesImpl(fn, a, b, c, d);
        } finally{
            isInsideEventHandler = prevIsInsideEventHandler;
            if (!isInsideEventHandler) {
                finishEventHandler();
            }
        }
    }
    function flushDiscreteUpdatesIfNeeded(timeStamp) {
        {
            if (!isInsideEventHandler) {
                flushDiscreteUpdatesImpl();
            }
        }
    }
    function setBatchingImplementation(_batchedUpdatesImpl, _discreteUpdatesImpl, _flushDiscreteUpdatesImpl, _batchedEventUpdatesImpl) {
        batchedUpdatesImpl = _batchedUpdatesImpl;
        discreteUpdatesImpl = _discreteUpdatesImpl;
        flushDiscreteUpdatesImpl = _flushDiscreteUpdatesImpl;
        batchedEventUpdatesImpl = _batchedEventUpdatesImpl;
    }
    function isInteractive(tag) {
        return tag === "button" || tag === "input" || tag === "select" || tag === "textarea";
    }
    function shouldPreventMouseEvent(name, type, props) {
        switch(name){
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                return !!(props.disabled && isInteractive(type));
            default:
                return false;
        }
    }
    function getListener(inst, registrationName) {
        var stateNode = inst.stateNode;
        if (stateNode === null) {
            return null;
        }
        var props = getFiberCurrentPropsFromNode(stateNode);
        if (props === null) {
            return null;
        }
        var listener = props[registrationName];
        if (shouldPreventMouseEvent(registrationName, inst.type, props)) {
            return null;
        }
        if (!(!listener || typeof listener === "function")) {
            {
                throw Error("Expected `" + registrationName + "` listener to be a function, instead got a value of `" + typeof listener + "` type.");
            }
        }
        return listener;
    }
    var passiveBrowserEventsSupported = false;
    if (canUseDOM) {
        try {
            var options1 = {};
            Object.defineProperty(options1, "passive", {
                get: function() {
                    passiveBrowserEventsSupported = true;
                }
            });
            window.addEventListener("test", options1, options1);
            window.removeEventListener("test", options1, options1);
        } catch (e) {
            passiveBrowserEventsSupported = false;
        }
    }
    function invokeGuardedCallbackProd(name, func, context, a, b, c, d, e, f) {
        var funcArgs = Array.prototype.slice.call(arguments, 3);
        try {
            func.apply(context, funcArgs);
        } catch (error) {
            this.onError(error);
        }
    }
    var invokeGuardedCallbackImpl = invokeGuardedCallbackProd;
    {
        if (typeof window !== "undefined" && typeof window.dispatchEvent === "function" && typeof document !== "undefined" && typeof document.createEvent === "function") {
            var fakeNode = document.createElement("react");
            invokeGuardedCallbackImpl = function invokeGuardedCallbackDev(name, func, context, a, b, c, d, e, f) {
                if (!(typeof document !== "undefined")) {
                    {
                        throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
                    }
                }
                var evt = document.createEvent("Event");
                var didCall = false;
                var didError = true;
                var windowEvent = window.event;
                var windowEventDescriptor = Object.getOwnPropertyDescriptor(window, "event");
                function restoreAfterDispatch() {
                    fakeNode.removeEventListener(evtType, callCallback, false);
                    if (typeof window.event !== "undefined" && window.hasOwnProperty("event")) {
                        window.event = windowEvent;
                    }
                }
                var funcArgs = Array.prototype.slice.call(arguments, 3);
                function callCallback() {
                    didCall = true;
                    restoreAfterDispatch();
                    func.apply(context, funcArgs);
                    didError = false;
                }
                var error;
                var didSetError = false;
                var isCrossOriginError = false;
                function handleWindowError(event) {
                    error = event.error;
                    didSetError = true;
                    if (error === null && event.colno === 0 && event.lineno === 0) {
                        isCrossOriginError = true;
                    }
                    if (event.defaultPrevented) {
                        if (error != null && typeof error === "object") {
                            try {
                                error._suppressLogging = true;
                            } catch (inner) {}
                        }
                    }
                }
                var evtType = "react-" + (name ? name : "invokeguardedcallback");
                window.addEventListener("error", handleWindowError);
                fakeNode.addEventListener(evtType, callCallback, false);
                evt.initEvent(evtType, false, false);
                fakeNode.dispatchEvent(evt);
                if (windowEventDescriptor) {
                    Object.defineProperty(window, "event", windowEventDescriptor);
                }
                if (didCall && didError) {
                    if (!didSetError) {
                        error = new Error("An error was thrown inside one of your components, but React " + "doesn't know what it was. This is likely due to browser " + "flakiness. React does its best to preserve the \"Pause on " + "exceptions\" behavior of the DevTools, which requires some " + "DEV-mode only tricks. It's possible that these don't work in " + "your browser. Try triggering the error in production mode, " + "or switching to a modern browser. If you suspect that this is " + "actually an issue with React, please file an issue.");
                    } else if (isCrossOriginError) {
                        error = new Error("A cross-origin error was thrown. React doesn't have access to " + "the actual error object in development. " + "See https://reactjs.org/link/crossorigin-error for more information.");
                    }
                    this.onError(error);
                }
                window.removeEventListener("error", handleWindowError);
                if (!didCall) {
                    restoreAfterDispatch();
                    return invokeGuardedCallbackProd.apply(this, arguments);
                }
            };
        }
    }
    var invokeGuardedCallbackImpl$1 = invokeGuardedCallbackImpl;
    var hasError = false;
    var caughtError = null;
    var hasRethrowError = false;
    var rethrowError = null;
    var reporter = {
        onError: function(error) {
            hasError = true;
            caughtError = error;
        }
    };
    function invokeGuardedCallback(name, func, context, a, b, c, d, e, f) {
        hasError = false;
        caughtError = null;
        invokeGuardedCallbackImpl$1.apply(reporter, arguments);
    }
    function invokeGuardedCallbackAndCatchFirstError(name, func, context, a, b, c, d, e, f) {
        invokeGuardedCallback.apply(this, arguments);
        if (hasError) {
            var error = clearCaughtError();
            if (!hasRethrowError) {
                hasRethrowError = true;
                rethrowError = error;
            }
        }
    }
    function rethrowCaughtError() {
        if (hasRethrowError) {
            var error = rethrowError;
            hasRethrowError = false;
            rethrowError = null;
            throw error;
        }
    }
    function hasCaughtError() {
        return hasError;
    }
    function clearCaughtError() {
        if (hasError) {
            var error = caughtError;
            hasError = false;
            caughtError = null;
            return error;
        } else {
            {
                {
                    throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
                }
            }
        }
    }
    function get1(key) {
        return key._reactInternals;
    }
    function has1(key) {
        return key._reactInternals !== undefined;
    }
    function set1(key, value) {
        key._reactInternals = value;
    }
    var NoFlags = 0;
    var PerformedWork = 1;
    var Placement = 2;
    var Update = 4;
    var PlacementAndUpdate = 6;
    var Deletion = 8;
    var ContentReset = 16;
    var Callback = 32;
    var DidCapture = 64;
    var Ref = 128;
    var Snapshot = 256;
    var Passive = 512;
    var PassiveUnmountPendingDev = 8192;
    var Hydrating = 1024;
    var HydratingAndUpdate = 1028;
    var LifecycleEffectMask = 932;
    var HostEffectMask = 2047;
    var Incomplete = 2048;
    var ShouldCapture = 4096;
    var ForceUpdateForLegacySuspense = 16384;
    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
    function getNearestMountedFiber(fiber) {
        var node = fiber;
        var nearestMounted = fiber;
        if (!fiber.alternate) {
            var nextNode = node;
            do {
                node = nextNode;
                if ((node.flags & (Placement | Hydrating)) !== NoFlags) {
                    nearestMounted = node.return;
                }
                nextNode = node.return;
            }while (nextNode)
        } else {
            while(node.return){
                node = node.return;
            }
        }
        if (node.tag === HostRoot) {
            return nearestMounted;
        }
        return null;
    }
    function getSuspenseInstanceFromFiber(fiber) {
        if (fiber.tag === SuspenseComponent) {
            var suspenseState = fiber.memoizedState;
            if (suspenseState === null) {
                var current = fiber.alternate;
                if (current !== null) {
                    suspenseState = current.memoizedState;
                }
            }
            if (suspenseState !== null) {
                return suspenseState.dehydrated;
            }
        }
        return null;
    }
    function getContainerFromFiber(fiber) {
        return fiber.tag === HostRoot ? fiber.stateNode.containerInfo : null;
    }
    function isFiberMounted(fiber) {
        return getNearestMountedFiber(fiber) === fiber;
    }
    function isMounted(component) {
        {
            var owner = ReactCurrentOwner.current;
            if (owner !== null && owner.tag === ClassComponent) {
                var ownerFiber = owner;
                var instance = ownerFiber.stateNode;
                if (!instance._warnedAboutRefsInRender) {
                    error1("%s is accessing isMounted inside its render() function. " + "render() should be a pure function of props and state. It should " + "never access something that requires stale data from the previous " + "render, such as refs. Move this logic to componentDidMount and " + "componentDidUpdate instead.", getComponentName(ownerFiber.type) || "A component");
                }
                instance._warnedAboutRefsInRender = true;
            }
        }
        var fiber = get1(component);
        if (!fiber) {
            return false;
        }
        return getNearestMountedFiber(fiber) === fiber;
    }
    function assertIsMounted(fiber) {
        if (!(getNearestMountedFiber(fiber) === fiber)) {
            {
                throw Error("Unable to find node on an unmounted component.");
            }
        }
    }
    function findCurrentFiberUsingSlowPath(fiber) {
        var alternate = fiber.alternate;
        if (!alternate) {
            var nearestMounted = getNearestMountedFiber(fiber);
            if (!(nearestMounted !== null)) {
                {
                    throw Error("Unable to find node on an unmounted component.");
                }
            }
            if (nearestMounted !== fiber) {
                return null;
            }
            return fiber;
        }
        var a = fiber;
        var b = alternate;
        while(true){
            var parentA = a.return;
            if (parentA === null) {
                break;
            }
            var parentB = parentA.alternate;
            if (parentB === null) {
                var nextParent = parentA.return;
                if (nextParent !== null) {
                    a = b = nextParent;
                    continue;
                }
                break;
            }
            if (parentA.child === parentB.child) {
                var child = parentA.child;
                while(child){
                    if (child === a) {
                        assertIsMounted(parentA);
                        return fiber;
                    }
                    if (child === b) {
                        assertIsMounted(parentA);
                        return alternate;
                    }
                    child = child.sibling;
                }
                {
                    {
                        throw Error("Unable to find node on an unmounted component.");
                    }
                }
            }
            if (a.return !== b.return) {
                a = parentA;
                b = parentB;
            } else {
                var didFindChild = false;
                var _child = parentA.child;
                while(_child){
                    if (_child === a) {
                        didFindChild = true;
                        a = parentA;
                        b = parentB;
                        break;
                    }
                    if (_child === b) {
                        didFindChild = true;
                        b = parentA;
                        a = parentB;
                        break;
                    }
                    _child = _child.sibling;
                }
                if (!didFindChild) {
                    _child = parentB.child;
                    while(_child){
                        if (_child === a) {
                            didFindChild = true;
                            a = parentB;
                            b = parentA;
                            break;
                        }
                        if (_child === b) {
                            didFindChild = true;
                            b = parentB;
                            a = parentA;
                            break;
                        }
                        _child = _child.sibling;
                    }
                    if (!didFindChild) {
                        {
                            throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
                        }
                    }
                }
            }
            if (!(a.alternate === b)) {
                {
                    throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
                }
            }
        }
        if (!(a.tag === HostRoot)) {
            {
                throw Error("Unable to find node on an unmounted component.");
            }
        }
        if (a.stateNode.current === a) {
            return fiber;
        }
        return alternate;
    }
    function findCurrentHostFiber(parent) {
        var currentParent = findCurrentFiberUsingSlowPath(parent);
        if (!currentParent) {
            return null;
        }
        var node = currentParent;
        while(true){
            if (node.tag === HostComponent || node.tag === HostText) {
                return node;
            } else if (node.child) {
                node.child.return = node;
                node = node.child;
                continue;
            }
            if (node === currentParent) {
                return null;
            }
            while(!node.sibling){
                if (!node.return || node.return === currentParent) {
                    return null;
                }
                node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
        }
        return null;
    }
    function findCurrentHostFiberWithNoPortals(parent) {
        var currentParent = findCurrentFiberUsingSlowPath(parent);
        if (!currentParent) {
            return null;
        }
        var node = currentParent;
        while(true){
            if (node.tag === HostComponent || node.tag === HostText || enableFundamentalAPI) {
                return node;
            } else if (node.child && node.tag !== HostPortal) {
                node.child.return = node;
                node = node.child;
                continue;
            }
            if (node === currentParent) {
                return null;
            }
            while(!node.sibling){
                if (!node.return || node.return === currentParent) {
                    return null;
                }
                node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
        }
        return null;
    }
    function doesFiberContain(parentFiber, childFiber) {
        var node = childFiber;
        var parentFiberAlternate = parentFiber.alternate;
        while(node !== null){
            if (node === parentFiber || node === parentFiberAlternate) {
                return true;
            }
            node = node.return;
        }
        return false;
    }
    var attemptUserBlockingHydration;
    function setAttemptUserBlockingHydration(fn) {
        attemptUserBlockingHydration = fn;
    }
    var attemptContinuousHydration;
    function setAttemptContinuousHydration(fn) {
        attemptContinuousHydration = fn;
    }
    var attemptHydrationAtCurrentPriority;
    function setAttemptHydrationAtCurrentPriority(fn) {
        attemptHydrationAtCurrentPriority = fn;
    }
    var attemptHydrationAtPriority;
    function setAttemptHydrationAtPriority(fn) {
        attemptHydrationAtPriority = fn;
    }
    var hasScheduledReplayAttempt = false;
    var queuedDiscreteEvents = [];
    var queuedFocus = null;
    var queuedDrag = null;
    var queuedMouse = null;
    var queuedPointers = new Map();
    var queuedPointerCaptures = new Map();
    var queuedExplicitHydrationTargets = [];
    function hasQueuedDiscreteEvents() {
        return queuedDiscreteEvents.length > 0;
    }
    var discreteReplayableEvents = [
        "mousedown",
        "mouseup",
        "touchcancel",
        "touchend",
        "touchstart",
        "auxclick",
        "dblclick",
        "pointercancel",
        "pointerdown",
        "pointerup",
        "dragend",
        "dragstart",
        "drop",
        "compositionend",
        "compositionstart",
        "keydown",
        "keypress",
        "keyup",
        "input",
        "textInput",
        "copy",
        "cut",
        "paste",
        "click",
        "change",
        "contextmenu",
        "reset",
        "submit"
    ];
    function isReplayableDiscreteEvent(eventType) {
        return discreteReplayableEvents.indexOf(eventType) > -1;
    }
    function createQueuedReplayableEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
        return {
            blockedOn: blockedOn,
            domEventName: domEventName,
            eventSystemFlags: eventSystemFlags | IS_REPLAYED,
            nativeEvent: nativeEvent,
            targetContainers: [
                targetContainer
            ]
        };
    }
    function queueDiscreteEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
        var queuedEvent = createQueuedReplayableEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent);
        queuedDiscreteEvents.push(queuedEvent);
    }
    function clearIfContinuousEvent(domEventName, nativeEvent) {
        switch(domEventName){
            case "focusin":
            case "focusout":
                queuedFocus = null;
                break;
            case "dragenter":
            case "dragleave":
                queuedDrag = null;
                break;
            case "mouseover":
            case "mouseout":
                queuedMouse = null;
                break;
            case "pointerover":
            case "pointerout":
                {
                    var pointerId = nativeEvent.pointerId;
                    queuedPointers.delete(pointerId);
                    break;
                }
            case "gotpointercapture":
            case "lostpointercapture":
                {
                    var _pointerId = nativeEvent.pointerId;
                    queuedPointerCaptures.delete(_pointerId);
                    break;
                }
        }
    }
    function accumulateOrCreateContinuousQueuedReplayableEvent(existingQueuedEvent, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
        if (existingQueuedEvent === null || existingQueuedEvent.nativeEvent !== nativeEvent) {
            var queuedEvent = createQueuedReplayableEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent);
            if (blockedOn !== null) {
                var _fiber2 = getInstanceFromNode(blockedOn);
                if (_fiber2 !== null) {
                    attemptContinuousHydration(_fiber2);
                }
            }
            return queuedEvent;
        }
        existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
        var targetContainers = existingQueuedEvent.targetContainers;
        if (targetContainer !== null && targetContainers.indexOf(targetContainer) === -1) {
            targetContainers.push(targetContainer);
        }
        return existingQueuedEvent;
    }
    function queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
        switch(domEventName){
            case "focusin":
                {
                    var focusEvent = nativeEvent;
                    queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(queuedFocus, blockedOn, domEventName, eventSystemFlags, targetContainer, focusEvent);
                    return true;
                }
            case "dragenter":
                {
                    var dragEvent = nativeEvent;
                    queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(queuedDrag, blockedOn, domEventName, eventSystemFlags, targetContainer, dragEvent);
                    return true;
                }
            case "mouseover":
                {
                    var mouseEvent = nativeEvent;
                    queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(queuedMouse, blockedOn, domEventName, eventSystemFlags, targetContainer, mouseEvent);
                    return true;
                }
            case "pointerover":
                {
                    var pointerEvent = nativeEvent;
                    var pointerId = pointerEvent.pointerId;
                    queuedPointers.set(pointerId, accumulateOrCreateContinuousQueuedReplayableEvent(queuedPointers.get(pointerId) || null, blockedOn, domEventName, eventSystemFlags, targetContainer, pointerEvent));
                    return true;
                }
            case "gotpointercapture":
                {
                    var _pointerEvent = nativeEvent;
                    var _pointerId2 = _pointerEvent.pointerId;
                    queuedPointerCaptures.set(_pointerId2, accumulateOrCreateContinuousQueuedReplayableEvent(queuedPointerCaptures.get(_pointerId2) || null, blockedOn, domEventName, eventSystemFlags, targetContainer, _pointerEvent));
                    return true;
                }
        }
        return false;
    }
    function attemptExplicitHydrationTarget(queuedTarget) {
        var targetInst = getClosestInstanceFromNode(queuedTarget.target);
        if (targetInst !== null) {
            var nearestMounted = getNearestMountedFiber(targetInst);
            if (nearestMounted !== null) {
                var tag = nearestMounted.tag;
                if (tag === SuspenseComponent) {
                    var instance = getSuspenseInstanceFromFiber(nearestMounted);
                    if (instance !== null) {
                        queuedTarget.blockedOn = instance;
                        attemptHydrationAtPriority(queuedTarget.lanePriority, function() {
                            Scheduler.unstable_runWithPriority(queuedTarget.priority, function() {
                                attemptHydrationAtCurrentPriority(nearestMounted);
                            });
                        });
                        return;
                    }
                } else if (tag === HostRoot) {
                    var root = nearestMounted.stateNode;
                    if (root.hydrate) {
                        queuedTarget.blockedOn = getContainerFromFiber(nearestMounted);
                        return;
                    }
                }
            }
        }
        queuedTarget.blockedOn = null;
    }
    function attemptReplayContinuousQueuedEvent(queuedEvent) {
        if (queuedEvent.blockedOn !== null) {
            return false;
        }
        var targetContainers = queuedEvent.targetContainers;
        while(targetContainers.length > 0){
            var targetContainer = targetContainers[0];
            var nextBlockedOn = attemptToDispatchEvent(queuedEvent.domEventName, queuedEvent.eventSystemFlags, targetContainer, queuedEvent.nativeEvent);
            if (nextBlockedOn !== null) {
                var _fiber3 = getInstanceFromNode(nextBlockedOn);
                if (_fiber3 !== null) {
                    attemptContinuousHydration(_fiber3);
                }
                queuedEvent.blockedOn = nextBlockedOn;
                return false;
            }
            targetContainers.shift();
        }
        return true;
    }
    function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
        if (attemptReplayContinuousQueuedEvent(queuedEvent)) {
            map.delete(key);
        }
    }
    function replayUnblockedEvents() {
        hasScheduledReplayAttempt = false;
        while(queuedDiscreteEvents.length > 0){
            var nextDiscreteEvent = queuedDiscreteEvents[0];
            if (nextDiscreteEvent.blockedOn !== null) {
                var _fiber4 = getInstanceFromNode(nextDiscreteEvent.blockedOn);
                if (_fiber4 !== null) {
                    attemptUserBlockingHydration(_fiber4);
                }
                break;
            }
            var targetContainers = nextDiscreteEvent.targetContainers;
            while(targetContainers.length > 0){
                var targetContainer = targetContainers[0];
                var nextBlockedOn = attemptToDispatchEvent(nextDiscreteEvent.domEventName, nextDiscreteEvent.eventSystemFlags, targetContainer, nextDiscreteEvent.nativeEvent);
                if (nextBlockedOn !== null) {
                    nextDiscreteEvent.blockedOn = nextBlockedOn;
                    break;
                }
                targetContainers.shift();
            }
            if (nextDiscreteEvent.blockedOn === null) {
                queuedDiscreteEvents.shift();
            }
        }
        if (queuedFocus !== null && attemptReplayContinuousQueuedEvent(queuedFocus)) {
            queuedFocus = null;
        }
        if (queuedDrag !== null && attemptReplayContinuousQueuedEvent(queuedDrag)) {
            queuedDrag = null;
        }
        if (queuedMouse !== null && attemptReplayContinuousQueuedEvent(queuedMouse)) {
            queuedMouse = null;
        }
        queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
        queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
    }
    function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
        if (queuedEvent.blockedOn === unblocked) {
            queuedEvent.blockedOn = null;
            if (!hasScheduledReplayAttempt) {
                hasScheduledReplayAttempt = true;
                Scheduler.unstable_scheduleCallback(Scheduler.unstable_NormalPriority, replayUnblockedEvents);
            }
        }
    }
    function retryIfBlockedOn(unblocked) {
        if (queuedDiscreteEvents.length > 0) {
            scheduleCallbackIfUnblocked(queuedDiscreteEvents[0], unblocked);
            for(var i = 1; i < queuedDiscreteEvents.length; i++){
                var queuedEvent = queuedDiscreteEvents[i];
                if (queuedEvent.blockedOn === unblocked) {
                    queuedEvent.blockedOn = null;
                }
            }
        }
        if (queuedFocus !== null) {
            scheduleCallbackIfUnblocked(queuedFocus, unblocked);
        }
        if (queuedDrag !== null) {
            scheduleCallbackIfUnblocked(queuedDrag, unblocked);
        }
        if (queuedMouse !== null) {
            scheduleCallbackIfUnblocked(queuedMouse, unblocked);
        }
        var unblock = function(queuedEvent) {
            return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
        };
        queuedPointers.forEach(unblock);
        queuedPointerCaptures.forEach(unblock);
        for(var _i = 0; _i < queuedExplicitHydrationTargets.length; _i++){
            var queuedTarget = queuedExplicitHydrationTargets[_i];
            if (queuedTarget.blockedOn === unblocked) {
                queuedTarget.blockedOn = null;
            }
        }
        while(queuedExplicitHydrationTargets.length > 0){
            var nextExplicitTarget = queuedExplicitHydrationTargets[0];
            if (nextExplicitTarget.blockedOn !== null) {
                break;
            } else {
                attemptExplicitHydrationTarget(nextExplicitTarget);
                if (nextExplicitTarget.blockedOn === null) {
                    queuedExplicitHydrationTargets.shift();
                }
            }
        }
    }
    var DiscreteEvent = 0;
    var UserBlockingEvent = 1;
    var ContinuousEvent = 2;
    function makePrefixMap(styleProp, eventName) {
        var prefixes = {};
        prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
        prefixes["Webkit" + styleProp] = "webkit" + eventName;
        prefixes["Moz" + styleProp] = "moz" + eventName;
        return prefixes;
    }
    var vendorPrefixes = {
        animationend: makePrefixMap("Animation", "AnimationEnd"),
        animationiteration: makePrefixMap("Animation", "AnimationIteration"),
        animationstart: makePrefixMap("Animation", "AnimationStart"),
        transitionend: makePrefixMap("Transition", "TransitionEnd")
    };
    var prefixedEventNames = {};
    var style1 = {};
    if (canUseDOM) {
        style1 = document.createElement("div").style;
        if (!("AnimationEvent" in window)) {
            delete vendorPrefixes.animationend.animation;
            delete vendorPrefixes.animationiteration.animation;
            delete vendorPrefixes.animationstart.animation;
        }
        if (!("TransitionEvent" in window)) {
            delete vendorPrefixes.transitionend.transition;
        }
    }
    function getVendorPrefixedEventName(eventName) {
        if (prefixedEventNames[eventName]) {
            return prefixedEventNames[eventName];
        } else if (!vendorPrefixes[eventName]) {
            return eventName;
        }
        var prefixMap = vendorPrefixes[eventName];
        for(var styleProp in prefixMap){
            if (prefixMap.hasOwnProperty(styleProp) && styleProp in style1) {
                return prefixedEventNames[eventName] = prefixMap[styleProp];
            }
        }
        return eventName;
    }
    var ANIMATION_END = getVendorPrefixedEventName("animationend");
    var ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration");
    var ANIMATION_START = getVendorPrefixedEventName("animationstart");
    var TRANSITION_END = getVendorPrefixedEventName("transitionend");
    var topLevelEventsToReactNames = new Map();
    var eventPriorities = new Map();
    var discreteEventPairsForSimpleEventPlugin = [
        "cancel",
        "cancel",
        "click",
        "click",
        "close",
        "close",
        "contextmenu",
        "contextMenu",
        "copy",
        "copy",
        "cut",
        "cut",
        "auxclick",
        "auxClick",
        "dblclick",
        "doubleClick",
        "dragend",
        "dragEnd",
        "dragstart",
        "dragStart",
        "drop",
        "drop",
        "focusin",
        "focus",
        "focusout",
        "blur",
        "input",
        "input",
        "invalid",
        "invalid",
        "keydown",
        "keyDown",
        "keypress",
        "keyPress",
        "keyup",
        "keyUp",
        "mousedown",
        "mouseDown",
        "mouseup",
        "mouseUp",
        "paste",
        "paste",
        "pause",
        "pause",
        "play",
        "play",
        "pointercancel",
        "pointerCancel",
        "pointerdown",
        "pointerDown",
        "pointerup",
        "pointerUp",
        "ratechange",
        "rateChange",
        "reset",
        "reset",
        "seeked",
        "seeked",
        "submit",
        "submit",
        "touchcancel",
        "touchCancel",
        "touchend",
        "touchEnd",
        "touchstart",
        "touchStart",
        "volumechange",
        "volumeChange"
    ];
    var otherDiscreteEvents = [
        "change",
        "selectionchange",
        "textInput",
        "compositionstart",
        "compositionend",
        "compositionupdate"
    ];
    var userBlockingPairsForSimpleEventPlugin = [
        "drag",
        "drag",
        "dragenter",
        "dragEnter",
        "dragexit",
        "dragExit",
        "dragleave",
        "dragLeave",
        "dragover",
        "dragOver",
        "mousemove",
        "mouseMove",
        "mouseout",
        "mouseOut",
        "mouseover",
        "mouseOver",
        "pointermove",
        "pointerMove",
        "pointerout",
        "pointerOut",
        "pointerover",
        "pointerOver",
        "scroll",
        "scroll",
        "toggle",
        "toggle",
        "touchmove",
        "touchMove",
        "wheel",
        "wheel"
    ];
    var continuousPairsForSimpleEventPlugin = [
        "abort",
        "abort",
        ANIMATION_END,
        "animationEnd",
        ANIMATION_ITERATION,
        "animationIteration",
        ANIMATION_START,
        "animationStart",
        "canplay",
        "canPlay",
        "canplaythrough",
        "canPlayThrough",
        "durationchange",
        "durationChange",
        "emptied",
        "emptied",
        "encrypted",
        "encrypted",
        "ended",
        "ended",
        "error",
        "error",
        "gotpointercapture",
        "gotPointerCapture",
        "load",
        "load",
        "loadeddata",
        "loadedData",
        "loadedmetadata",
        "loadedMetadata",
        "loadstart",
        "loadStart",
        "lostpointercapture",
        "lostPointerCapture",
        "playing",
        "playing",
        "progress",
        "progress",
        "seeking",
        "seeking",
        "stalled",
        "stalled",
        "suspend",
        "suspend",
        "timeupdate",
        "timeUpdate",
        TRANSITION_END,
        "transitionEnd",
        "waiting",
        "waiting"
    ];
    function registerSimplePluginEventsAndSetTheirPriorities(eventTypes, priority) {
        for(var i = 0; i < eventTypes.length; i += 2){
            var topEvent = eventTypes[i];
            var event = eventTypes[i + 1];
            var capitalizedEvent = event[0].toUpperCase() + event.slice(1);
            var reactName = "on" + capitalizedEvent;
            eventPriorities.set(topEvent, priority);
            topLevelEventsToReactNames.set(topEvent, reactName);
            registerTwoPhaseEvent(reactName, [
                topEvent
            ]);
        }
    }
    function setEventPriorities(eventTypes, priority) {
        for(var i = 0; i < eventTypes.length; i++){
            eventPriorities.set(eventTypes[i], priority);
        }
    }
    function getEventPriorityForPluginSystem(domEventName) {
        var priority = eventPriorities.get(domEventName);
        return priority === undefined ? ContinuousEvent : priority;
    }
    function registerSimpleEvents() {
        registerSimplePluginEventsAndSetTheirPriorities(discreteEventPairsForSimpleEventPlugin, DiscreteEvent);
        registerSimplePluginEventsAndSetTheirPriorities(userBlockingPairsForSimpleEventPlugin, UserBlockingEvent);
        registerSimplePluginEventsAndSetTheirPriorities(continuousPairsForSimpleEventPlugin, ContinuousEvent);
        setEventPriorities(otherDiscreteEvents, DiscreteEvent);
    }
    var Scheduler_now = Scheduler.unstable_now;
    {
        if (!(tracing.__interactionsRef != null && tracing.__interactionsRef.current != null)) {
            {
                throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
            }
        }
    }
    var ImmediatePriority = 99;
    var UserBlockingPriority = 98;
    var NormalPriority = 97;
    var LowPriority = 96;
    var IdlePriority = 95;
    var NoPriority = 90;
    Scheduler_now();
    var SyncLanePriority = 15;
    var SyncBatchedLanePriority = 14;
    var InputDiscreteHydrationLanePriority = 13;
    var InputDiscreteLanePriority = 12;
    var InputContinuousHydrationLanePriority = 11;
    var InputContinuousLanePriority = 10;
    var DefaultHydrationLanePriority = 9;
    var DefaultLanePriority = 8;
    var TransitionHydrationPriority = 7;
    var TransitionPriority = 6;
    var RetryLanePriority = 5;
    var SelectiveHydrationLanePriority = 4;
    var IdleHydrationLanePriority = 3;
    var IdleLanePriority = 2;
    var OffscreenLanePriority = 1;
    var NoLanePriority = 0;
    var TotalLanes = 31;
    var NoLanes = 0;
    var NoLane = 0;
    var SyncLane = 1;
    var SyncBatchedLane = 2;
    var InputDiscreteHydrationLane = 4;
    var InputDiscreteLanes = 24;
    var InputContinuousHydrationLane = 32;
    var InputContinuousLanes = 192;
    var DefaultHydrationLane = 256;
    var DefaultLanes = 3584;
    var TransitionHydrationLane = 4096;
    var TransitionLanes = 4186112;
    var RetryLanes = 62914560;
    var SomeRetryLane = 33554432;
    var SelectiveHydrationLane = 67108864;
    var NonIdleLanes = 134217727;
    var IdleHydrationLane = 134217728;
    var IdleLanes = 805306368;
    var OffscreenLane = 1073741824;
    var NoTimestamp = -1;
    function setCurrentUpdateLanePriority(newLanePriority) {}
    var return_highestLanePriority = DefaultLanePriority;
    function getHighestPriorityLanes(lanes) {
        if ((SyncLane & lanes) !== NoLanes) {
            return_highestLanePriority = SyncLanePriority;
            return SyncLane;
        }
        if ((SyncBatchedLane & lanes) !== NoLanes) {
            return_highestLanePriority = SyncBatchedLanePriority;
            return SyncBatchedLane;
        }
        if ((InputDiscreteHydrationLane & lanes) !== NoLanes) {
            return_highestLanePriority = InputDiscreteHydrationLanePriority;
            return InputDiscreteHydrationLane;
        }
        var inputDiscreteLanes = InputDiscreteLanes & lanes;
        if (inputDiscreteLanes !== NoLanes) {
            return_highestLanePriority = InputDiscreteLanePriority;
            return inputDiscreteLanes;
        }
        if ((lanes & InputContinuousHydrationLane) !== NoLanes) {
            return_highestLanePriority = InputContinuousHydrationLanePriority;
            return InputContinuousHydrationLane;
        }
        var inputContinuousLanes = InputContinuousLanes & lanes;
        if (inputContinuousLanes !== NoLanes) {
            return_highestLanePriority = InputContinuousLanePriority;
            return inputContinuousLanes;
        }
        if ((lanes & DefaultHydrationLane) !== NoLanes) {
            return_highestLanePriority = DefaultHydrationLanePriority;
            return DefaultHydrationLane;
        }
        var defaultLanes = DefaultLanes & lanes;
        if (defaultLanes !== NoLanes) {
            return_highestLanePriority = DefaultLanePriority;
            return defaultLanes;
        }
        if ((lanes & TransitionHydrationLane) !== NoLanes) {
            return_highestLanePriority = TransitionHydrationPriority;
            return TransitionHydrationLane;
        }
        var transitionLanes = TransitionLanes & lanes;
        if (transitionLanes !== NoLanes) {
            return_highestLanePriority = TransitionPriority;
            return transitionLanes;
        }
        var retryLanes = RetryLanes & lanes;
        if (retryLanes !== NoLanes) {
            return_highestLanePriority = RetryLanePriority;
            return retryLanes;
        }
        if (lanes & SelectiveHydrationLane) {
            return_highestLanePriority = SelectiveHydrationLanePriority;
            return SelectiveHydrationLane;
        }
        if ((lanes & IdleHydrationLane) !== NoLanes) {
            return_highestLanePriority = IdleHydrationLanePriority;
            return IdleHydrationLane;
        }
        var idleLanes = IdleLanes & lanes;
        if (idleLanes !== NoLanes) {
            return_highestLanePriority = IdleLanePriority;
            return idleLanes;
        }
        if ((OffscreenLane & lanes) !== NoLanes) {
            return_highestLanePriority = OffscreenLanePriority;
            return OffscreenLane;
        }
        {
            error1("Should have found matching lanes. This is a bug in React.");
        }
        return_highestLanePriority = DefaultLanePriority;
        return lanes;
    }
    function schedulerPriorityToLanePriority(schedulerPriorityLevel) {
        switch(schedulerPriorityLevel){
            case ImmediatePriority:
                return SyncLanePriority;
            case UserBlockingPriority:
                return InputContinuousLanePriority;
            case NormalPriority:
            case LowPriority:
                return DefaultLanePriority;
            case IdlePriority:
                return IdleLanePriority;
            default:
                return NoLanePriority;
        }
    }
    function lanePriorityToSchedulerPriority(lanePriority) {
        switch(lanePriority){
            case SyncLanePriority:
            case SyncBatchedLanePriority:
                return ImmediatePriority;
            case InputDiscreteHydrationLanePriority:
            case InputDiscreteLanePriority:
            case InputContinuousHydrationLanePriority:
            case InputContinuousLanePriority:
                return UserBlockingPriority;
            case DefaultHydrationLanePriority:
            case DefaultLanePriority:
            case TransitionHydrationPriority:
            case TransitionPriority:
            case SelectiveHydrationLanePriority:
            case RetryLanePriority:
                return NormalPriority;
            case IdleHydrationLanePriority:
            case IdleLanePriority:
            case OffscreenLanePriority:
                return IdlePriority;
            case NoLanePriority:
                return NoPriority;
            default:
                {
                    {
                        throw Error("Invalid update priority: " + lanePriority + ". This is a bug in React.");
                    }
                }
        }
    }
    function getNextLanes(root, wipLanes) {
        var pendingLanes = root.pendingLanes;
        if (pendingLanes === NoLanes) {
            return_highestLanePriority = NoLanePriority;
            return NoLanes;
        }
        var nextLanes = NoLanes;
        var nextLanePriority = NoLanePriority;
        var expiredLanes = root.expiredLanes;
        var suspendedLanes = root.suspendedLanes;
        var pingedLanes = root.pingedLanes;
        if (expiredLanes !== NoLanes) {
            nextLanes = expiredLanes;
            nextLanePriority = return_highestLanePriority = SyncLanePriority;
        } else {
            var nonIdlePendingLanes = pendingLanes & NonIdleLanes;
            if (nonIdlePendingLanes !== NoLanes) {
                var nonIdleUnblockedLanes = nonIdlePendingLanes & ~suspendedLanes;
                if (nonIdleUnblockedLanes !== NoLanes) {
                    nextLanes = getHighestPriorityLanes(nonIdleUnblockedLanes);
                    nextLanePriority = return_highestLanePriority;
                } else {
                    var nonIdlePingedLanes = nonIdlePendingLanes & pingedLanes;
                    if (nonIdlePingedLanes !== NoLanes) {
                        nextLanes = getHighestPriorityLanes(nonIdlePingedLanes);
                        nextLanePriority = return_highestLanePriority;
                    }
                }
            } else {
                var unblockedLanes = pendingLanes & ~suspendedLanes;
                if (unblockedLanes !== NoLanes) {
                    nextLanes = getHighestPriorityLanes(unblockedLanes);
                    nextLanePriority = return_highestLanePriority;
                } else {
                    if (pingedLanes !== NoLanes) {
                        nextLanes = getHighestPriorityLanes(pingedLanes);
                        nextLanePriority = return_highestLanePriority;
                    }
                }
            }
        }
        if (nextLanes === NoLanes) {
            return NoLanes;
        }
        nextLanes = pendingLanes & getEqualOrHigherPriorityLanes(nextLanes);
        if (wipLanes !== NoLanes && wipLanes !== nextLanes && (wipLanes & suspendedLanes) === NoLanes) {
            getHighestPriorityLanes(wipLanes);
            var wipLanePriority = return_highestLanePriority;
            if (nextLanePriority <= wipLanePriority) {
                return wipLanes;
            } else {
                return_highestLanePriority = nextLanePriority;
            }
        }
        var entangledLanes = root.entangledLanes;
        if (entangledLanes !== NoLanes) {
            var entanglements = root.entanglements;
            var lanes = nextLanes & entangledLanes;
            while(lanes > 0){
                var index = pickArbitraryLaneIndex(lanes);
                var lane = 1 << index;
                nextLanes |= entanglements[index];
                lanes &= ~lane;
            }
        }
        return nextLanes;
    }
    function getMostRecentEventTime(root, lanes) {
        var eventTimes = root.eventTimes;
        var mostRecentEventTime = NoTimestamp;
        while(lanes > 0){
            var index = pickArbitraryLaneIndex(lanes);
            var lane = 1 << index;
            var eventTime = eventTimes[index];
            if (eventTime > mostRecentEventTime) {
                mostRecentEventTime = eventTime;
            }
            lanes &= ~lane;
        }
        return mostRecentEventTime;
    }
    function computeExpirationTime(lane, currentTime) {
        getHighestPriorityLanes(lane);
        var priority = return_highestLanePriority;
        if (priority >= InputContinuousLanePriority) {
            return currentTime + 250;
        } else if (priority >= TransitionPriority) {
            return currentTime + 5000;
        } else {
            return NoTimestamp;
        }
    }
    function markStarvedLanesAsExpired(root, currentTime) {
        var pendingLanes = root.pendingLanes;
        var suspendedLanes = root.suspendedLanes;
        var pingedLanes = root.pingedLanes;
        var expirationTimes = root.expirationTimes;
        var lanes = pendingLanes;
        while(lanes > 0){
            var index = pickArbitraryLaneIndex(lanes);
            var lane = 1 << index;
            var expirationTime = expirationTimes[index];
            if (expirationTime === NoTimestamp) {
                if ((lane & suspendedLanes) === NoLanes || (lane & pingedLanes) !== NoLanes) {
                    expirationTimes[index] = computeExpirationTime(lane, currentTime);
                }
            } else if (expirationTime <= currentTime) {
                root.expiredLanes |= lane;
            }
            lanes &= ~lane;
        }
    }
    function getLanesToRetrySynchronouslyOnError(root) {
        var everythingButOffscreen = root.pendingLanes & ~OffscreenLane;
        if (everythingButOffscreen !== NoLanes) {
            return everythingButOffscreen;
        }
        if (everythingButOffscreen & OffscreenLane) {
            return OffscreenLane;
        }
        return NoLanes;
    }
    function returnNextLanesPriority() {
        return return_highestLanePriority;
    }
    function includesNonIdleWork(lanes) {
        return (lanes & NonIdleLanes) !== NoLanes;
    }
    function includesOnlyRetries(lanes) {
        return (lanes & RetryLanes) === lanes;
    }
    function includesOnlyTransitions(lanes) {
        return (lanes & TransitionLanes) === lanes;
    }
    function findUpdateLane(lanePriority, wipLanes) {
        switch(lanePriority){
            case NoLanePriority:
                break;
            case SyncLanePriority:
                return SyncLane;
            case SyncBatchedLanePriority:
                return SyncBatchedLane;
            case InputDiscreteLanePriority:
                {
                    var _lane = pickArbitraryLane(InputDiscreteLanes & ~wipLanes);
                    if (_lane === NoLane) {
                        return findUpdateLane(InputContinuousLanePriority, wipLanes);
                    }
                    return _lane;
                }
            case InputContinuousLanePriority:
                {
                    var _lane2 = pickArbitraryLane(InputContinuousLanes & ~wipLanes);
                    if (_lane2 === NoLane) {
                        return findUpdateLane(DefaultLanePriority, wipLanes);
                    }
                    return _lane2;
                }
            case DefaultLanePriority:
                {
                    var _lane3 = pickArbitraryLane(DefaultLanes & ~wipLanes);
                    if (_lane3 === NoLane) {
                        _lane3 = pickArbitraryLane(TransitionLanes & ~wipLanes);
                        if (_lane3 === NoLane) {
                            _lane3 = pickArbitraryLane(DefaultLanes);
                        }
                    }
                    return _lane3;
                }
            case TransitionPriority:
            case RetryLanePriority:
                break;
            case IdleLanePriority:
                var lane = pickArbitraryLane(IdleLanes & ~wipLanes);
                if (lane === NoLane) {
                    lane = pickArbitraryLane(IdleLanes);
                }
                return lane;
        }
        {
            {
                throw Error("Invalid update priority: " + lanePriority + ". This is a bug in React.");
            }
        }
    }
    function findTransitionLane(wipLanes, pendingLanes) {
        var lane = pickArbitraryLane(TransitionLanes & ~pendingLanes);
        if (lane === NoLane) {
            lane = pickArbitraryLane(TransitionLanes & ~wipLanes);
            if (lane === NoLane) {
                lane = pickArbitraryLane(TransitionLanes);
            }
        }
        return lane;
    }
    function findRetryLane(wipLanes) {
        var lane = pickArbitraryLane(RetryLanes & ~wipLanes);
        if (lane === NoLane) {
            lane = pickArbitraryLane(RetryLanes);
        }
        return lane;
    }
    function getHighestPriorityLane(lanes) {
        return lanes & -lanes;
    }
    function getLowestPriorityLane(lanes) {
        var index = 31 - clz32(lanes);
        return index < 0 ? NoLanes : 1 << index;
    }
    function getEqualOrHigherPriorityLanes(lanes) {
        return (getLowestPriorityLane(lanes) << 1) - 1;
    }
    function pickArbitraryLane(lanes) {
        return getHighestPriorityLane(lanes);
    }
    function pickArbitraryLaneIndex(lanes) {
        return 31 - clz32(lanes);
    }
    function laneToIndex(lane) {
        return pickArbitraryLaneIndex(lane);
    }
    function includesSomeLane(a, b) {
        return (a & b) !== NoLanes;
    }
    function isSubsetOfLanes(set, subset) {
        return (set & subset) === subset;
    }
    function mergeLanes(a, b) {
        return a | b;
    }
    function removeLanes(set, subset) {
        return set & ~subset;
    }
    function laneToLanes(lane) {
        return lane;
    }
    function higherPriorityLane(a, b) {
        return a !== NoLane && a < b ? a : b;
    }
    function createLaneMap(initial) {
        var laneMap = [];
        for(var i = 0; i < TotalLanes; i++){
            laneMap.push(initial);
        }
        return laneMap;
    }
    function markRootUpdated(root, updateLane, eventTime) {
        root.pendingLanes |= updateLane;
        var higherPriorityLanes = updateLane - 1;
        root.suspendedLanes &= higherPriorityLanes;
        root.pingedLanes &= higherPriorityLanes;
        var eventTimes = root.eventTimes;
        var index = laneToIndex(updateLane);
        eventTimes[index] = eventTime;
    }
    function markRootSuspended(root, suspendedLanes) {
        root.suspendedLanes |= suspendedLanes;
        root.pingedLanes &= ~suspendedLanes;
        var expirationTimes = root.expirationTimes;
        var lanes = suspendedLanes;
        while(lanes > 0){
            var index = pickArbitraryLaneIndex(lanes);
            var lane = 1 << index;
            expirationTimes[index] = NoTimestamp;
            lanes &= ~lane;
        }
    }
    function markRootPinged(root, pingedLanes, eventTime) {
        root.pingedLanes |= root.suspendedLanes & pingedLanes;
    }
    function markDiscreteUpdatesExpired(root) {
        root.expiredLanes |= InputDiscreteLanes & root.pendingLanes;
    }
    function hasDiscreteLanes(lanes) {
        return (lanes & InputDiscreteLanes) !== NoLanes;
    }
    function markRootMutableRead(root, updateLane) {
        root.mutableReadLanes |= updateLane & root.pendingLanes;
    }
    function markRootFinished(root, remainingLanes) {
        var noLongerPendingLanes = root.pendingLanes & ~remainingLanes;
        root.pendingLanes = remainingLanes;
        root.suspendedLanes = 0;
        root.pingedLanes = 0;
        root.expiredLanes &= remainingLanes;
        root.mutableReadLanes &= remainingLanes;
        root.entangledLanes &= remainingLanes;
        var entanglements = root.entanglements;
        var eventTimes = root.eventTimes;
        var expirationTimes = root.expirationTimes;
        var lanes = noLongerPendingLanes;
        while(lanes > 0){
            var index = pickArbitraryLaneIndex(lanes);
            var lane = 1 << index;
            entanglements[index] = NoLanes;
            eventTimes[index] = NoTimestamp;
            expirationTimes[index] = NoTimestamp;
            lanes &= ~lane;
        }
    }
    function markRootEntangled(root, entangledLanes) {
        root.entangledLanes |= entangledLanes;
        var entanglements = root.entanglements;
        var lanes = entangledLanes;
        while(lanes > 0){
            var index = pickArbitraryLaneIndex(lanes);
            var lane = 1 << index;
            entanglements[index] |= entangledLanes;
            lanes &= ~lane;
        }
    }
    var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
    var log = Math.log;
    var LN2 = Math.LN2;
    function clz32Fallback(lanes) {
        if (lanes === 0) {
            return 32;
        }
        return 31 - (log(lanes) / LN2 | 0) | 0;
    }
    var UserBlockingPriority$1 = Scheduler.unstable_UserBlockingPriority, runWithPriority = Scheduler.unstable_runWithPriority;
    var _enabled = true;
    function setEnabled(enabled) {
        _enabled = !!enabled;
    }
    function isEnabled() {
        return _enabled;
    }
    function createEventListenerWrapperWithPriority(targetContainer, domEventName, eventSystemFlags) {
        var eventPriority = getEventPriorityForPluginSystem(domEventName);
        var listenerWrapper;
        switch(eventPriority){
            case DiscreteEvent:
                listenerWrapper = dispatchDiscreteEvent;
                break;
            case UserBlockingEvent:
                listenerWrapper = dispatchUserBlockingUpdate;
                break;
            case ContinuousEvent:
            default:
                listenerWrapper = dispatchEvent;
                break;
        }
        return listenerWrapper.bind(null, domEventName, eventSystemFlags, targetContainer);
    }
    function dispatchDiscreteEvent(domEventName, eventSystemFlags, container, nativeEvent) {
        {
            flushDiscreteUpdatesIfNeeded(nativeEvent.timeStamp);
        }
        discreteUpdates(dispatchEvent, domEventName, eventSystemFlags, container, nativeEvent);
    }
    function dispatchUserBlockingUpdate(domEventName, eventSystemFlags, container, nativeEvent) {
        {
            runWithPriority(UserBlockingPriority$1, dispatchEvent.bind(null, domEventName, eventSystemFlags, container, nativeEvent));
        }
    }
    function dispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
        if (!_enabled) {
            return;
        }
        var allowReplay = true;
        {
            allowReplay = (eventSystemFlags & IS_CAPTURE_PHASE) === 0;
        }
        if (allowReplay && hasQueuedDiscreteEvents() && isReplayableDiscreteEvent(domEventName)) {
            queueDiscreteEvent(null, domEventName, eventSystemFlags, targetContainer, nativeEvent);
            return;
        }
        var blockedOn = attemptToDispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent);
        if (blockedOn === null) {
            if (allowReplay) {
                clearIfContinuousEvent(domEventName, nativeEvent);
            }
            return;
        }
        if (allowReplay) {
            if (isReplayableDiscreteEvent(domEventName)) {
                queueDiscreteEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent);
                return;
            }
            if (queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent)) {
                return;
            }
            clearIfContinuousEvent(domEventName, nativeEvent);
        }
        dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, null, targetContainer);
    }
    function attemptToDispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
        var nativeEventTarget = getEventTarget(nativeEvent);
        var targetInst = getClosestInstanceFromNode(nativeEventTarget);
        if (targetInst !== null) {
            var nearestMounted = getNearestMountedFiber(targetInst);
            if (nearestMounted === null) {
                targetInst = null;
            } else {
                var tag = nearestMounted.tag;
                if (tag === SuspenseComponent) {
                    var instance = getSuspenseInstanceFromFiber(nearestMounted);
                    if (instance !== null) {
                        return instance;
                    }
                    targetInst = null;
                } else if (tag === HostRoot) {
                    var root = nearestMounted.stateNode;
                    if (root.hydrate) {
                        return getContainerFromFiber(nearestMounted);
                    }
                    targetInst = null;
                } else if (nearestMounted !== targetInst) {
                    targetInst = null;
                }
            }
        }
        dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, targetInst, targetContainer);
        return null;
    }
    function addEventBubbleListener(target, eventType, listener) {
        target.addEventListener(eventType, listener, false);
        return listener;
    }
    function addEventCaptureListener(target, eventType, listener) {
        target.addEventListener(eventType, listener, true);
        return listener;
    }
    function addEventCaptureListenerWithPassiveFlag(target, eventType, listener, passive) {
        target.addEventListener(eventType, listener, {
            capture: true,
            passive: passive
        });
        return listener;
    }
    function addEventBubbleListenerWithPassiveFlag(target, eventType, listener, passive) {
        target.addEventListener(eventType, listener, {
            passive: passive
        });
        return listener;
    }
    var root1 = null;
    var startText = null;
    var fallbackText = null;
    function initialize(nativeEventTarget) {
        root1 = nativeEventTarget;
        startText = getText();
        return true;
    }
    function reset() {
        root1 = null;
        startText = null;
        fallbackText = null;
    }
    function getData() {
        if (fallbackText) {
            return fallbackText;
        }
        var start;
        var startValue = startText;
        var startLength = startValue.length;
        var end;
        var endValue = getText();
        var endLength = endValue.length;
        for(start = 0; start < startLength; start++){
            if (startValue[start] !== endValue[start]) {
                break;
            }
        }
        var minEnd = startLength - start;
        for(end = 1; end <= minEnd; end++){
            if (startValue[startLength - end] !== endValue[endLength - end]) {
                break;
            }
        }
        var sliceTail = end > 1 ? 1 - end : undefined;
        fallbackText = endValue.slice(start, sliceTail);
        return fallbackText;
    }
    function getText() {
        if ("value" in root1) {
            return root1.value;
        }
        return root1.textContent;
    }
    function getEventCharCode(nativeEvent) {
        var charCode;
        var keyCode = nativeEvent.keyCode;
        if ("charCode" in nativeEvent) {
            charCode = nativeEvent.charCode;
            if (charCode === 0 && keyCode === 13) {
                charCode = 13;
            }
        } else {
            charCode = keyCode;
        }
        if (charCode === 10) {
            charCode = 13;
        }
        if (charCode >= 32 || charCode === 13) {
            return charCode;
        }
        return 0;
    }
    function functionThatReturnsTrue() {
        return true;
    }
    function functionThatReturnsFalse() {
        return false;
    }
    function createSyntheticEvent(Interface) {
        function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
            this._reactName = reactName;
            this._targetInst = targetInst;
            this.type = reactEventType;
            this.nativeEvent = nativeEvent;
            this.target = nativeEventTarget;
            this.currentTarget = null;
            for(var _propName in Interface){
                if (!Interface.hasOwnProperty(_propName)) {
                    continue;
                }
                var normalize = Interface[_propName];
                if (normalize) {
                    this[_propName] = normalize(nativeEvent);
                } else {
                    this[_propName] = nativeEvent[_propName];
                }
            }
            var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
            if (defaultPrevented) {
                this.isDefaultPrevented = functionThatReturnsTrue;
            } else {
                this.isDefaultPrevented = functionThatReturnsFalse;
            }
            this.isPropagationStopped = functionThatReturnsFalse;
            return this;
        }
        _assign(SyntheticBaseEvent.prototype, {
            preventDefault: function() {
                this.defaultPrevented = true;
                var event = this.nativeEvent;
                if (!event) {
                    return;
                }
                if (event.preventDefault) {
                    event.preventDefault();
                } else if (typeof event.returnValue !== "unknown") {
                    event.returnValue = false;
                }
                this.isDefaultPrevented = functionThatReturnsTrue;
            },
            stopPropagation: function() {
                var event = this.nativeEvent;
                if (!event) {
                    return;
                }
                if (event.stopPropagation) {
                    event.stopPropagation();
                } else if (typeof event.cancelBubble !== "unknown") {
                    event.cancelBubble = true;
                }
                this.isPropagationStopped = functionThatReturnsTrue;
            },
            persist: function() {},
            isPersistent: functionThatReturnsTrue
        });
        return SyntheticBaseEvent;
    }
    var EventInterface = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(event) {
            return event.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    };
    var SyntheticEvent = createSyntheticEvent(EventInterface);
    var UIEventInterface = _assign({}, EventInterface, {
        view: 0,
        detail: 0
    });
    var SyntheticUIEvent = createSyntheticEvent(UIEventInterface);
    var lastMovementX;
    var lastMovementY;
    var lastMouseEvent;
    function updateMouseMovementPolyfillState(event) {
        if (event !== lastMouseEvent) {
            if (lastMouseEvent && event.type === "mousemove") {
                lastMovementX = event.screenX - lastMouseEvent.screenX;
                lastMovementY = event.screenY - lastMouseEvent.screenY;
            } else {
                lastMovementX = 0;
                lastMovementY = 0;
            }
            lastMouseEvent = event;
        }
    }
    var MouseEventInterface = _assign({}, UIEventInterface, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: getEventModifierState,
        button: 0,
        buttons: 0,
        relatedTarget: function(event) {
            if (event.relatedTarget === undefined) return event.fromElement === event.srcElement ? event.toElement : event.fromElement;
            return event.relatedTarget;
        },
        movementX: function(event) {
            if ("movementX" in event) {
                return event.movementX;
            }
            updateMouseMovementPolyfillState(event);
            return lastMovementX;
        },
        movementY: function(event) {
            if ("movementY" in event) {
                return event.movementY;
            }
            return lastMovementY;
        }
    });
    var SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface);
    var DragEventInterface = _assign({}, MouseEventInterface, {
        dataTransfer: 0
    });
    var SyntheticDragEvent = createSyntheticEvent(DragEventInterface);
    var FocusEventInterface = _assign({}, UIEventInterface, {
        relatedTarget: 0
    });
    var SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface);
    var AnimationEventInterface = _assign({}, EventInterface, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    });
    var SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface);
    var ClipboardEventInterface = _assign({}, EventInterface, {
        clipboardData: function(event) {
            return "clipboardData" in event ? event.clipboardData : window.clipboardData;
        }
    });
    var SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface);
    var CompositionEventInterface = _assign({}, EventInterface, {
        data: 0
    });
    var SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface);
    var SyntheticInputEvent = SyntheticCompositionEvent;
    var normalizeKey = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    };
    var translateToKey = {
        "8": "Backspace",
        "9": "Tab",
        "12": "Clear",
        "13": "Enter",
        "16": "Shift",
        "17": "Control",
        "18": "Alt",
        "19": "Pause",
        "20": "CapsLock",
        "27": "Escape",
        "32": " ",
        "33": "PageUp",
        "34": "PageDown",
        "35": "End",
        "36": "Home",
        "37": "ArrowLeft",
        "38": "ArrowUp",
        "39": "ArrowRight",
        "40": "ArrowDown",
        "45": "Insert",
        "46": "Delete",
        "112": "F1",
        "113": "F2",
        "114": "F3",
        "115": "F4",
        "116": "F5",
        "117": "F6",
        "118": "F7",
        "119": "F8",
        "120": "F9",
        "121": "F10",
        "122": "F11",
        "123": "F12",
        "144": "NumLock",
        "145": "ScrollLock",
        "224": "Meta"
    };
    function getEventKey(nativeEvent) {
        if (nativeEvent.key) {
            var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
            if (key !== "Unidentified") {
                return key;
            }
        }
        if (nativeEvent.type === "keypress") {
            var charCode = getEventCharCode(nativeEvent);
            return charCode === 13 ? "Enter" : String.fromCharCode(charCode);
        }
        if (nativeEvent.type === "keydown" || nativeEvent.type === "keyup") {
            return translateToKey[nativeEvent.keyCode] || "Unidentified";
        }
        return "";
    }
    var modifierKeyToProp = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function modifierStateGetter(keyArg) {
        var syntheticEvent = this;
        var nativeEvent = syntheticEvent.nativeEvent;
        if (nativeEvent.getModifierState) {
            return nativeEvent.getModifierState(keyArg);
        }
        var keyProp = modifierKeyToProp[keyArg];
        return keyProp ? !!nativeEvent[keyProp] : false;
    }
    function getEventModifierState(nativeEvent) {
        return modifierStateGetter;
    }
    var KeyboardEventInterface = _assign({}, UIEventInterface, {
        key: getEventKey,
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: getEventModifierState,
        charCode: function(event) {
            if (event.type === "keypress") {
                return getEventCharCode(event);
            }
            return 0;
        },
        keyCode: function(event) {
            if (event.type === "keydown" || event.type === "keyup") {
                return event.keyCode;
            }
            return 0;
        },
        which: function(event) {
            if (event.type === "keypress") {
                return getEventCharCode(event);
            }
            if (event.type === "keydown" || event.type === "keyup") {
                return event.keyCode;
            }
            return 0;
        }
    });
    var SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface);
    var PointerEventInterface = _assign({}, MouseEventInterface, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    });
    var SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface);
    var TouchEventInterface = _assign({}, UIEventInterface, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: getEventModifierState
    });
    var SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface);
    var TransitionEventInterface = _assign({}, EventInterface, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    });
    var SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface);
    var WheelEventInterface = _assign({}, MouseEventInterface, {
        deltaX: function(event) {
            return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
        },
        deltaY: function(event) {
            return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    });
    var SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface);
    var END_KEYCODES = [
        9,
        13,
        27,
        32
    ];
    var START_KEYCODE = 229;
    var canUseCompositionEvent = canUseDOM && "CompositionEvent" in window;
    var documentMode = null;
    if (canUseDOM && "documentMode" in document) {
        documentMode = document.documentMode;
    }
    var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode;
    var useFallbackCompositionData = canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);
    var SPACEBAR_CODE = 32;
    var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
    function registerEvents() {
        registerTwoPhaseEvent("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]);
        registerTwoPhaseEvent("onCompositionEnd", [
            "compositionend",
            "focusout",
            "keydown",
            "keypress",
            "keyup",
            "mousedown"
        ]);
        registerTwoPhaseEvent("onCompositionStart", [
            "compositionstart",
            "focusout",
            "keydown",
            "keypress",
            "keyup",
            "mousedown"
        ]);
        registerTwoPhaseEvent("onCompositionUpdate", [
            "compositionupdate",
            "focusout",
            "keydown",
            "keypress",
            "keyup",
            "mousedown"
        ]);
    }
    var hasSpaceKeypress = false;
    function isKeypressCommand(nativeEvent) {
        return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) && !(nativeEvent.ctrlKey && nativeEvent.altKey);
    }
    function getCompositionEventType(domEventName) {
        switch(domEventName){
            case "compositionstart":
                return "onCompositionStart";
            case "compositionend":
                return "onCompositionEnd";
            case "compositionupdate":
                return "onCompositionUpdate";
        }
    }
    function isFallbackCompositionStart(domEventName, nativeEvent) {
        return domEventName === "keydown" && nativeEvent.keyCode === START_KEYCODE;
    }
    function isFallbackCompositionEnd(domEventName, nativeEvent) {
        switch(domEventName){
            case "keyup":
                return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
            case "keydown":
                return nativeEvent.keyCode !== START_KEYCODE;
            case "keypress":
            case "mousedown":
            case "focusout":
                return true;
            default:
                return false;
        }
    }
    function getDataFromCustomEvent(nativeEvent) {
        var detail = nativeEvent.detail;
        if (typeof detail === "object" && "data" in detail) {
            return detail.data;
        }
        return null;
    }
    function isUsingKoreanIME(nativeEvent) {
        return nativeEvent.locale === "ko";
    }
    var isComposing = false;
    function extractCompositionEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget) {
        var eventType;
        var fallbackData;
        if (canUseCompositionEvent) {
            eventType = getCompositionEventType(domEventName);
        } else if (!isComposing) {
            if (isFallbackCompositionStart(domEventName, nativeEvent)) {
                eventType = "onCompositionStart";
            }
        } else if (isFallbackCompositionEnd(domEventName, nativeEvent)) {
            eventType = "onCompositionEnd";
        }
        if (!eventType) {
            return null;
        }
        if (useFallbackCompositionData && !isUsingKoreanIME(nativeEvent)) {
            if (!isComposing && eventType === "onCompositionStart") {
                isComposing = initialize(nativeEventTarget);
            } else if (eventType === "onCompositionEnd") {
                if (isComposing) {
                    fallbackData = getData();
                }
            }
        }
        var listeners = accumulateTwoPhaseListeners(targetInst, eventType);
        if (listeners.length > 0) {
            var event = new SyntheticCompositionEvent(eventType, domEventName, null, nativeEvent, nativeEventTarget);
            dispatchQueue.push({
                event: event,
                listeners: listeners
            });
            if (fallbackData) {
                event.data = fallbackData;
            } else {
                var customData = getDataFromCustomEvent(nativeEvent);
                if (customData !== null) {
                    event.data = customData;
                }
            }
        }
    }
    function getNativeBeforeInputChars(domEventName, nativeEvent) {
        switch(domEventName){
            case "compositionend":
                return getDataFromCustomEvent(nativeEvent);
            case "keypress":
                var which = nativeEvent.which;
                if (which !== SPACEBAR_CODE) {
                    return null;
                }
                hasSpaceKeypress = true;
                return SPACEBAR_CHAR;
            case "textInput":
                var chars = nativeEvent.data;
                if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
                    return null;
                }
                return chars;
            default:
                return null;
        }
    }
    function getFallbackBeforeInputChars(domEventName, nativeEvent) {
        if (isComposing) {
            if (domEventName === "compositionend" || !canUseCompositionEvent && isFallbackCompositionEnd(domEventName, nativeEvent)) {
                var chars = getData();
                reset();
                isComposing = false;
                return chars;
            }
            return null;
        }
        switch(domEventName){
            case "paste":
                return null;
            case "keypress":
                if (!isKeypressCommand(nativeEvent)) {
                    if (nativeEvent.char && nativeEvent.char.length > 1) {
                        return nativeEvent.char;
                    } else if (nativeEvent.which) {
                        return String.fromCharCode(nativeEvent.which);
                    }
                }
                return null;
            case "compositionend":
                return useFallbackCompositionData && !isUsingKoreanIME(nativeEvent) ? null : nativeEvent.data;
            default:
                return null;
        }
    }
    function extractBeforeInputEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget) {
        var chars;
        if (canUseTextInputEvent) {
            chars = getNativeBeforeInputChars(domEventName, nativeEvent);
        } else {
            chars = getFallbackBeforeInputChars(domEventName, nativeEvent);
        }
        if (!chars) {
            return null;
        }
        var listeners = accumulateTwoPhaseListeners(targetInst, "onBeforeInput");
        if (listeners.length > 0) {
            var event = new SyntheticInputEvent("onBeforeInput", "beforeinput", null, nativeEvent, nativeEventTarget);
            dispatchQueue.push({
                event: event,
                listeners: listeners
            });
            event.data = chars;
        }
    }
    function extractEvents(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
        extractCompositionEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
        extractBeforeInputEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
    }
    var supportedInputTypes = {
        color: true,
        date: true,
        datetime: true,
        "datetime-local": true,
        email: true,
        month: true,
        number: true,
        password: true,
        range: true,
        search: true,
        tel: true,
        text: true,
        time: true,
        url: true,
        week: true
    };
    function isTextInputElement(elem) {
        var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
        if (nodeName === "input") {
            return !!supportedInputTypes[elem.type];
        }
        if (nodeName === "textarea") {
            return true;
        }
        return false;
    }
    function isEventSupported(eventNameSuffix) {
        if (!canUseDOM) {
            return false;
        }
        var eventName = "on" + eventNameSuffix;
        var isSupported = eventName in document;
        if (!isSupported) {
            var element = document.createElement("div");
            element.setAttribute(eventName, "return;");
            isSupported = typeof element[eventName] === "function";
        }
        return isSupported;
    }
    function registerEvents$1() {
        registerTwoPhaseEvent("onChange", [
            "change",
            "click",
            "focusin",
            "focusout",
            "input",
            "keydown",
            "keyup",
            "selectionchange"
        ]);
    }
    function createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, target) {
        enqueueStateRestore(target);
        var listeners = accumulateTwoPhaseListeners(inst, "onChange");
        if (listeners.length > 0) {
            var event = new SyntheticEvent("onChange", "change", null, nativeEvent, target);
            dispatchQueue.push({
                event: event,
                listeners: listeners
            });
        }
    }
    var activeElement = null;
    var activeElementInst = null;
    function shouldUseChangeEvent(elem) {
        var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
        return nodeName === "select" || nodeName === "input" && elem.type === "file";
    }
    function manualDispatchChangeEvent(nativeEvent) {
        var dispatchQueue = [];
        createAndAccumulateChangeEvent(dispatchQueue, activeElementInst, nativeEvent, getEventTarget(nativeEvent));
        batchedUpdates(runEventInBatch, dispatchQueue);
    }
    function runEventInBatch(dispatchQueue) {
        processDispatchQueue(dispatchQueue, 0);
    }
    function getInstIfValueChanged(targetInst) {
        var targetNode = getNodeFromInstance(targetInst);
        if (updateValueIfChanged(targetNode)) {
            return targetInst;
        }
    }
    function getTargetInstForChangeEvent(domEventName, targetInst) {
        if (domEventName === "change") {
            return targetInst;
        }
    }
    var isInputEventSupported = false;
    if (canUseDOM) {
        isInputEventSupported = isEventSupported("input") && (!document.documentMode || document.documentMode > 9);
    }
    function startWatchingForValueChange(target, targetInst) {
        activeElement = target;
        activeElementInst = targetInst;
        activeElement.attachEvent("onpropertychange", handlePropertyChange);
    }
    function stopWatchingForValueChange() {
        if (!activeElement) {
            return;
        }
        activeElement.detachEvent("onpropertychange", handlePropertyChange);
        activeElement = null;
        activeElementInst = null;
    }
    function handlePropertyChange(nativeEvent) {
        if (nativeEvent.propertyName !== "value") {
            return;
        }
        if (getInstIfValueChanged(activeElementInst)) {
            manualDispatchChangeEvent(nativeEvent);
        }
    }
    function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
        if (domEventName === "focusin") {
            stopWatchingForValueChange();
            startWatchingForValueChange(target, targetInst);
        } else if (domEventName === "focusout") {
            stopWatchingForValueChange();
        }
    }
    function getTargetInstForInputEventPolyfill(domEventName, targetInst) {
        if (domEventName === "selectionchange" || domEventName === "keyup" || domEventName === "keydown") {
            return getInstIfValueChanged(activeElementInst);
        }
    }
    function shouldUseClickEvent(elem) {
        var nodeName = elem.nodeName;
        return nodeName && nodeName.toLowerCase() === "input" && (elem.type === "checkbox" || elem.type === "radio");
    }
    function getTargetInstForClickEvent(domEventName, targetInst) {
        if (domEventName === "click") {
            return getInstIfValueChanged(targetInst);
        }
    }
    function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
        if (domEventName === "input" || domEventName === "change") {
            return getInstIfValueChanged(targetInst);
        }
    }
    function handleControlledInputBlur(node) {
        var state = node._wrapperState;
        if (!state || !state.controlled || node.type !== "number") {
            return;
        }
        {
            setDefaultValue(node, "number", node.value);
        }
    }
    function extractEvents$1(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
        var targetNode = targetInst ? getNodeFromInstance(targetInst) : window;
        var getTargetInstFunc, handleEventFunc;
        if (shouldUseChangeEvent(targetNode)) {
            getTargetInstFunc = getTargetInstForChangeEvent;
        } else if (isTextInputElement(targetNode)) {
            if (isInputEventSupported) {
                getTargetInstFunc = getTargetInstForInputOrChangeEvent;
            } else {
                getTargetInstFunc = getTargetInstForInputEventPolyfill;
                handleEventFunc = handleEventsForInputEventPolyfill;
            }
        } else if (shouldUseClickEvent(targetNode)) {
            getTargetInstFunc = getTargetInstForClickEvent;
        }
        if (getTargetInstFunc) {
            var inst = getTargetInstFunc(domEventName, targetInst);
            if (inst) {
                createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, nativeEventTarget);
                return;
            }
        }
        if (handleEventFunc) {
            handleEventFunc(domEventName, targetNode, targetInst);
        }
        if (domEventName === "focusout") {
            handleControlledInputBlur(targetNode);
        }
    }
    function registerEvents$2() {
        registerDirectEvent("onMouseEnter", [
            "mouseout",
            "mouseover"
        ]);
        registerDirectEvent("onMouseLeave", [
            "mouseout",
            "mouseover"
        ]);
        registerDirectEvent("onPointerEnter", [
            "pointerout",
            "pointerover"
        ]);
        registerDirectEvent("onPointerLeave", [
            "pointerout",
            "pointerover"
        ]);
    }
    function extractEvents$2(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
        var isOverEvent = domEventName === "mouseover" || domEventName === "pointerover";
        var isOutEvent = domEventName === "mouseout" || domEventName === "pointerout";
        if (isOverEvent && (eventSystemFlags & IS_REPLAYED) === 0) {
            var related = nativeEvent.relatedTarget || nativeEvent.fromElement;
            if (related) {
                if (getClosestInstanceFromNode(related) || isContainerMarkedAsRoot(related)) {
                    return;
                }
            }
        }
        if (!isOutEvent && !isOverEvent) {
            return;
        }
        var win;
        if (nativeEventTarget.window === nativeEventTarget) {
            win = nativeEventTarget;
        } else {
            var doc = nativeEventTarget.ownerDocument;
            if (doc) {
                win = doc.defaultView || doc.parentWindow;
            } else {
                win = window;
            }
        }
        var from;
        var to;
        if (isOutEvent) {
            var _related = nativeEvent.relatedTarget || nativeEvent.toElement;
            from = targetInst;
            to = _related ? getClosestInstanceFromNode(_related) : null;
            if (to !== null) {
                var nearestMounted = getNearestMountedFiber(to);
                if (to !== nearestMounted || to.tag !== HostComponent && to.tag !== HostText) {
                    to = null;
                }
            }
        } else {
            from = null;
            to = targetInst;
        }
        if (from === to) {
            return;
        }
        var SyntheticEventCtor = SyntheticMouseEvent;
        var leaveEventType = "onMouseLeave";
        var enterEventType = "onMouseEnter";
        var eventTypePrefix = "mouse";
        if (domEventName === "pointerout" || domEventName === "pointerover") {
            SyntheticEventCtor = SyntheticPointerEvent;
            leaveEventType = "onPointerLeave";
            enterEventType = "onPointerEnter";
            eventTypePrefix = "pointer";
        }
        var fromNode = from == null ? win : getNodeFromInstance(from);
        var toNode = to == null ? win : getNodeFromInstance(to);
        var leave = new SyntheticEventCtor(leaveEventType, eventTypePrefix + "leave", from, nativeEvent, nativeEventTarget);
        leave.target = fromNode;
        leave.relatedTarget = toNode;
        var enter = null;
        var nativeTargetInst = getClosestInstanceFromNode(nativeEventTarget);
        if (nativeTargetInst === targetInst) {
            var enterEvent = new SyntheticEventCtor(enterEventType, eventTypePrefix + "enter", to, nativeEvent, nativeEventTarget);
            enterEvent.target = toNode;
            enterEvent.relatedTarget = fromNode;
            enter = enterEvent;
        }
        accumulateEnterLeaveTwoPhaseListeners(dispatchQueue, leave, enter, from, to);
    }
    function is(x, y) {
        return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
    }
    var objectIs = typeof Object.is === "function" ? Object.is : is;
    var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
    function shallowEqual(objA, objB) {
        if (objectIs(objA, objB)) {
            return true;
        }
        if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
            return false;
        }
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) {
            return false;
        }
        for(var i = 0; i < keysA.length; i++){
            if (!hasOwnProperty$2.call(objB, keysA[i]) || !objectIs(objA[keysA[i]], objB[keysA[i]])) {
                return false;
            }
        }
        return true;
    }
    function getLeafNode(node) {
        while(node && node.firstChild){
            node = node.firstChild;
        }
        return node;
    }
    function getSiblingNode(node) {
        while(node){
            if (node.nextSibling) {
                return node.nextSibling;
            }
            node = node.parentNode;
        }
    }
    function getNodeForCharacterOffset(root, offset) {
        var node = getLeafNode(root);
        var nodeStart = 0;
        var nodeEnd = 0;
        while(node){
            if (node.nodeType === TEXT_NODE) {
                nodeEnd = nodeStart + node.textContent.length;
                if (nodeStart <= offset && nodeEnd >= offset) {
                    return {
                        node: node,
                        offset: offset - nodeStart
                    };
                }
                nodeStart = nodeEnd;
            }
            node = getLeafNode(getSiblingNode(node));
        }
    }
    function getOffsets(outerNode) {
        var ownerDocument = outerNode.ownerDocument;
        var win = ownerDocument && ownerDocument.defaultView || window;
        var selection = win.getSelection && win.getSelection();
        if (!selection || selection.rangeCount === 0) {
            return null;
        }
        var anchorNode = selection.anchorNode, anchorOffset = selection.anchorOffset, focusNode = selection.focusNode, focusOffset = selection.focusOffset;
        try {
            anchorNode.nodeType;
            focusNode.nodeType;
        } catch (e) {
            return null;
        }
        return getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode, focusOffset);
    }
    function getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode, focusOffset) {
        var length = 0;
        var start = -1;
        var end = -1;
        var indexWithinAnchor = 0;
        var indexWithinFocus = 0;
        var node = outerNode;
        var parentNode = null;
        outer: while(true){
            var next = null;
            while(true){
                if (node === anchorNode && (anchorOffset === 0 || node.nodeType === TEXT_NODE)) {
                    start = length + anchorOffset;
                }
                if (node === focusNode && (focusOffset === 0 || node.nodeType === TEXT_NODE)) {
                    end = length + focusOffset;
                }
                if (node.nodeType === TEXT_NODE) {
                    length += node.nodeValue.length;
                }
                if ((next = node.firstChild) === null) {
                    break;
                }
                parentNode = node;
                node = next;
            }
            while(true){
                if (node === outerNode) {
                    break outer;
                }
                if (parentNode === anchorNode && ++indexWithinAnchor === anchorOffset) {
                    start = length;
                }
                if (parentNode === focusNode && ++indexWithinFocus === focusOffset) {
                    end = length;
                }
                if ((next = node.nextSibling) !== null) {
                    break;
                }
                node = parentNode;
                parentNode = node.parentNode;
            }
            node = next;
        }
        if (start === -1 || end === -1) {
            return null;
        }
        return {
            start: start,
            end: end
        };
    }
    function setOffsets(node, offsets) {
        var doc = node.ownerDocument || document;
        var win = doc && doc.defaultView || window;
        if (!win.getSelection) {
            return;
        }
        var selection = win.getSelection();
        var length = node.textContent.length;
        var start = Math.min(offsets.start, length);
        var end = offsets.end === undefined ? start : Math.min(offsets.end, length);
        if (!selection.extend && start > end) {
            var temp = end;
            end = start;
            start = temp;
        }
        var startMarker = getNodeForCharacterOffset(node, start);
        var endMarker = getNodeForCharacterOffset(node, end);
        if (startMarker && endMarker) {
            if (selection.rangeCount === 1 && selection.anchorNode === startMarker.node && selection.anchorOffset === startMarker.offset && selection.focusNode === endMarker.node && selection.focusOffset === endMarker.offset) {
                return;
            }
            var range = doc.createRange();
            range.setStart(startMarker.node, startMarker.offset);
            selection.removeAllRanges();
            if (start > end) {
                selection.addRange(range);
                selection.extend(endMarker.node, endMarker.offset);
            } else {
                range.setEnd(endMarker.node, endMarker.offset);
                selection.addRange(range);
            }
        }
    }
    function isTextNode(node) {
        return node && node.nodeType === TEXT_NODE;
    }
    function containsNode(outerNode, innerNode) {
        if (!outerNode || !innerNode) {
            return false;
        } else if (outerNode === innerNode) {
            return true;
        } else if (isTextNode(outerNode)) {
            return false;
        } else if (isTextNode(innerNode)) {
            return containsNode(outerNode, innerNode.parentNode);
        } else if ("contains" in outerNode) {
            return outerNode.contains(innerNode);
        } else if (outerNode.compareDocumentPosition) {
            return !!(outerNode.compareDocumentPosition(innerNode) & 16);
        } else {
            return false;
        }
    }
    function isInDocument(node) {
        return node && node.ownerDocument && containsNode(node.ownerDocument.documentElement, node);
    }
    function isSameOriginFrame(iframe) {
        try {
            return typeof iframe.contentWindow.location.href === "string";
        } catch (err) {
            return false;
        }
    }
    function getActiveElementDeep() {
        var win = window;
        var element = getActiveElement();
        while(element instanceof win.HTMLIFrameElement){
            if (isSameOriginFrame(element)) {
                win = element.contentWindow;
            } else {
                return element;
            }
            element = getActiveElement(win.document);
        }
        return element;
    }
    function hasSelectionCapabilities(elem) {
        var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
        return nodeName && (nodeName === "input" && (elem.type === "text" || elem.type === "search" || elem.type === "tel" || elem.type === "url" || elem.type === "password") || nodeName === "textarea" || elem.contentEditable === "true");
    }
    function getSelectionInformation() {
        var focusedElem = getActiveElementDeep();
        return {
            focusedElem: focusedElem,
            selectionRange: hasSelectionCapabilities(focusedElem) ? getSelection(focusedElem) : null
        };
    }
    function restoreSelection(priorSelectionInformation) {
        var curFocusedElem = getActiveElementDeep();
        var priorFocusedElem = priorSelectionInformation.focusedElem;
        var priorSelectionRange = priorSelectionInformation.selectionRange;
        if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
            if (priorSelectionRange !== null && hasSelectionCapabilities(priorFocusedElem)) {
                setSelection(priorFocusedElem, priorSelectionRange);
            }
            var ancestors = [];
            var ancestor = priorFocusedElem;
            while(ancestor = ancestor.parentNode){
                if (ancestor.nodeType === ELEMENT_NODE) {
                    ancestors.push({
                        element: ancestor,
                        left: ancestor.scrollLeft,
                        top: ancestor.scrollTop
                    });
                }
            }
            if (typeof priorFocusedElem.focus === "function") {
                priorFocusedElem.focus();
            }
            for(var i = 0; i < ancestors.length; i++){
                var info = ancestors[i];
                info.element.scrollLeft = info.left;
                info.element.scrollTop = info.top;
            }
        }
    }
    function getSelection(input) {
        var selection;
        if ("selectionStart" in input) {
            selection = {
                start: input.selectionStart,
                end: input.selectionEnd
            };
        } else {
            selection = getOffsets(input);
        }
        return selection || {
            start: 0,
            end: 0
        };
    }
    function setSelection(input, offsets) {
        var start = offsets.start;
        var end = offsets.end;
        if (end === undefined) {
            end = start;
        }
        if ("selectionStart" in input) {
            input.selectionStart = start;
            input.selectionEnd = Math.min(end, input.value.length);
        } else {
            setOffsets(input, offsets);
        }
    }
    var skipSelectionChangeEvent = canUseDOM && "documentMode" in document && document.documentMode <= 11;
    function registerEvents$3() {
        registerTwoPhaseEvent("onSelect", [
            "focusout",
            "contextmenu",
            "dragend",
            "focusin",
            "keydown",
            "keyup",
            "mousedown",
            "mouseup",
            "selectionchange"
        ]);
    }
    var activeElement$1 = null;
    var activeElementInst$1 = null;
    var lastSelection = null;
    var mouseDown = false;
    function getSelection$1(node) {
        if ("selectionStart" in node && hasSelectionCapabilities(node)) {
            return {
                start: node.selectionStart,
                end: node.selectionEnd
            };
        } else {
            var win = node.ownerDocument && node.ownerDocument.defaultView || window;
            var selection = win.getSelection();
            return {
                anchorNode: selection.anchorNode,
                anchorOffset: selection.anchorOffset,
                focusNode: selection.focusNode,
                focusOffset: selection.focusOffset
            };
        }
    }
    function getEventTargetDocument(eventTarget) {
        return eventTarget.window === eventTarget ? eventTarget.document : eventTarget.nodeType === DOCUMENT_NODE ? eventTarget : eventTarget.ownerDocument;
    }
    function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
        var doc = getEventTargetDocument(nativeEventTarget);
        if (mouseDown || activeElement$1 == null || activeElement$1 !== getActiveElement(doc)) {
            return;
        }
        var currentSelection = getSelection$1(activeElement$1);
        if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
            lastSelection = currentSelection;
            var listeners = accumulateTwoPhaseListeners(activeElementInst$1, "onSelect");
            if (listeners.length > 0) {
                var event = new SyntheticEvent("onSelect", "select", null, nativeEvent, nativeEventTarget);
                dispatchQueue.push({
                    event: event,
                    listeners: listeners
                });
                event.target = activeElement$1;
            }
        }
    }
    function extractEvents$3(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
        var targetNode = targetInst ? getNodeFromInstance(targetInst) : window;
        switch(domEventName){
            case "focusin":
                if (isTextInputElement(targetNode) || targetNode.contentEditable === "true") {
                    activeElement$1 = targetNode;
                    activeElementInst$1 = targetInst;
                    lastSelection = null;
                }
                break;
            case "focusout":
                activeElement$1 = null;
                activeElementInst$1 = null;
                lastSelection = null;
                break;
            case "mousedown":
                mouseDown = true;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                mouseDown = false;
                constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
                break;
            case "selectionchange":
                if (skipSelectionChangeEvent) {
                    break;
                }
            case "keydown":
            case "keyup":
                constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
        }
    }
    function extractEvents$4(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
        var reactName = topLevelEventsToReactNames.get(domEventName);
        if (reactName === undefined) {
            return;
        }
        var SyntheticEventCtor = SyntheticEvent;
        var reactEventType = domEventName;
        switch(domEventName){
            case "keypress":
                if (getEventCharCode(nativeEvent) === 0) {
                    return;
                }
            case "keydown":
            case "keyup":
                SyntheticEventCtor = SyntheticKeyboardEvent;
                break;
            case "focusin":
                reactEventType = "focus";
                SyntheticEventCtor = SyntheticFocusEvent;
                break;
            case "focusout":
                reactEventType = "blur";
                SyntheticEventCtor = SyntheticFocusEvent;
                break;
            case "beforeblur":
            case "afterblur":
                SyntheticEventCtor = SyntheticFocusEvent;
                break;
            case "click":
                if (nativeEvent.button === 2) {
                    return;
                }
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
                SyntheticEventCtor = SyntheticMouseEvent;
                break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
                SyntheticEventCtor = SyntheticDragEvent;
                break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
                SyntheticEventCtor = SyntheticTouchEvent;
                break;
            case ANIMATION_END:
            case ANIMATION_ITERATION:
            case ANIMATION_START:
                SyntheticEventCtor = SyntheticAnimationEvent;
                break;
            case TRANSITION_END:
                SyntheticEventCtor = SyntheticTransitionEvent;
                break;
            case "scroll":
                SyntheticEventCtor = SyntheticUIEvent;
                break;
            case "wheel":
                SyntheticEventCtor = SyntheticWheelEvent;
                break;
            case "copy":
            case "cut":
            case "paste":
                SyntheticEventCtor = SyntheticClipboardEvent;
                break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
                SyntheticEventCtor = SyntheticPointerEvent;
                break;
        }
        var inCapturePhase = (eventSystemFlags & IS_CAPTURE_PHASE) !== 0;
        {
            var accumulateTargetOnly = !inCapturePhase && domEventName === "scroll";
            var _listeners = accumulateSinglePhaseListeners(targetInst, reactName, nativeEvent.type, inCapturePhase, accumulateTargetOnly);
            if (_listeners.length > 0) {
                var _event = new SyntheticEventCtor(reactName, reactEventType, null, nativeEvent, nativeEventTarget);
                dispatchQueue.push({
                    event: _event,
                    listeners: _listeners
                });
            }
        }
    }
    registerSimpleEvents();
    registerEvents$2();
    registerEvents$1();
    registerEvents$3();
    registerEvents();
    function extractEvents$5(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
        extractEvents$4(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags);
        var shouldProcessPolyfillPlugins = (eventSystemFlags & SHOULD_NOT_PROCESS_POLYFILL_EVENT_PLUGINS) === 0;
        if (shouldProcessPolyfillPlugins) {
            extractEvents$2(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags);
            extractEvents$1(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
            extractEvents$3(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
            extractEvents(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
        }
    }
    var mediaEventTypes = [
        "abort",
        "canplay",
        "canplaythrough",
        "durationchange",
        "emptied",
        "encrypted",
        "ended",
        "error",
        "loadeddata",
        "loadedmetadata",
        "loadstart",
        "pause",
        "play",
        "playing",
        "progress",
        "ratechange",
        "seeked",
        "seeking",
        "stalled",
        "suspend",
        "timeupdate",
        "volumechange",
        "waiting"
    ];
    var nonDelegatedEvents = new Set([
        "cancel",
        "close",
        "invalid",
        "load",
        "scroll",
        "toggle"
    ].concat(mediaEventTypes));
    function executeDispatch(event, listener, currentTarget) {
        var type = event.type || "unknown-event";
        event.currentTarget = currentTarget;
        invokeGuardedCallbackAndCatchFirstError(type, listener, undefined, event);
        event.currentTarget = null;
    }
    function processDispatchQueueItemsInOrder(event, dispatchListeners, inCapturePhase) {
        var previousInstance;
        if (inCapturePhase) {
            for(var i = dispatchListeners.length - 1; i >= 0; i--){
                var _dispatchListeners$i = dispatchListeners[i], instance = _dispatchListeners$i.instance, currentTarget = _dispatchListeners$i.currentTarget, listener = _dispatchListeners$i.listener;
                if (instance !== previousInstance && event.isPropagationStopped()) {
                    return;
                }
                executeDispatch(event, listener, currentTarget);
                previousInstance = instance;
            }
        } else {
            for(var _i = 0; _i < dispatchListeners.length; _i++){
                var _dispatchListeners$_i = dispatchListeners[_i], _instance = _dispatchListeners$_i.instance, _currentTarget = _dispatchListeners$_i.currentTarget, _listener = _dispatchListeners$_i.listener;
                if (_instance !== previousInstance && event.isPropagationStopped()) {
                    return;
                }
                executeDispatch(event, _listener, _currentTarget);
                previousInstance = _instance;
            }
        }
    }
    function processDispatchQueue(dispatchQueue, eventSystemFlags) {
        var inCapturePhase = (eventSystemFlags & IS_CAPTURE_PHASE) !== 0;
        for(var i = 0; i < dispatchQueue.length; i++){
            var _dispatchQueue$i = dispatchQueue[i], event = _dispatchQueue$i.event, listeners = _dispatchQueue$i.listeners;
            processDispatchQueueItemsInOrder(event, listeners, inCapturePhase);
        }
        rethrowCaughtError();
    }
    function dispatchEventsForPlugins(domEventName, eventSystemFlags, nativeEvent, targetInst, targetContainer) {
        var nativeEventTarget = getEventTarget(nativeEvent);
        var dispatchQueue = [];
        extractEvents$5(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags);
        processDispatchQueue(dispatchQueue, eventSystemFlags);
    }
    function listenToNonDelegatedEvent(domEventName, targetElement) {
        var isCapturePhaseListener = false;
        var listenerSet = getEventListenerSet(targetElement);
        var listenerSetKey = getListenerSetKey(domEventName, isCapturePhaseListener);
        if (!listenerSet.has(listenerSetKey)) {
            addTrappedEventListener(targetElement, domEventName, IS_NON_DELEGATED, isCapturePhaseListener);
            listenerSet.add(listenerSetKey);
        }
    }
    var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
    function listenToAllSupportedEvents(rootContainerElement) {
        {
            if (rootContainerElement[listeningMarker]) {
                return;
            }
            rootContainerElement[listeningMarker] = true;
            allNativeEvents.forEach(function(domEventName) {
                if (!nonDelegatedEvents.has(domEventName)) {
                    listenToNativeEvent(domEventName, false, rootContainerElement, null);
                }
                listenToNativeEvent(domEventName, true, rootContainerElement, null);
            });
        }
    }
    function listenToNativeEvent(domEventName, isCapturePhaseListener, rootContainerElement, targetElement) {
        var eventSystemFlags = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var target = rootContainerElement;
        if (domEventName === "selectionchange" && rootContainerElement.nodeType !== DOCUMENT_NODE) {
            target = rootContainerElement.ownerDocument;
        }
        if (targetElement !== null && !isCapturePhaseListener && nonDelegatedEvents.has(domEventName)) {
            if (domEventName !== "scroll") {
                return;
            }
            eventSystemFlags |= IS_NON_DELEGATED;
            target = targetElement;
        }
        var listenerSet = getEventListenerSet(target);
        var listenerSetKey = getListenerSetKey(domEventName, isCapturePhaseListener);
        if (!listenerSet.has(listenerSetKey)) {
            if (isCapturePhaseListener) {
                eventSystemFlags |= IS_CAPTURE_PHASE;
            }
            addTrappedEventListener(target, domEventName, eventSystemFlags, isCapturePhaseListener);
            listenerSet.add(listenerSetKey);
        }
    }
    function addTrappedEventListener(targetContainer, domEventName, eventSystemFlags, isCapturePhaseListener, isDeferredListenerForLegacyFBSupport) {
        var listener = createEventListenerWrapperWithPriority(targetContainer, domEventName, eventSystemFlags);
        var isPassiveListener = undefined;
        if (passiveBrowserEventsSupported) {
            if (domEventName === "touchstart" || domEventName === "touchmove" || domEventName === "wheel") {
                isPassiveListener = true;
            }
        }
        targetContainer = targetContainer;
        var unsubscribeListener;
        if (isCapturePhaseListener) {
            if (isPassiveListener !== undefined) {
                unsubscribeListener = addEventCaptureListenerWithPassiveFlag(targetContainer, domEventName, listener, isPassiveListener);
            } else {
                unsubscribeListener = addEventCaptureListener(targetContainer, domEventName, listener);
            }
        } else {
            if (isPassiveListener !== undefined) {
                unsubscribeListener = addEventBubbleListenerWithPassiveFlag(targetContainer, domEventName, listener, isPassiveListener);
            } else {
                unsubscribeListener = addEventBubbleListener(targetContainer, domEventName, listener);
            }
        }
    }
    function isMatchingRootContainer(grandContainer, targetContainer) {
        return grandContainer === targetContainer || grandContainer.nodeType === COMMENT_NODE && grandContainer.parentNode === targetContainer;
    }
    function dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, targetInst, targetContainer) {
        var ancestorInst = targetInst;
        if ((eventSystemFlags & IS_EVENT_HANDLE_NON_MANAGED_NODE) === 0 && (eventSystemFlags & IS_NON_DELEGATED) === 0) {
            var targetContainerNode = targetContainer;
            if (targetInst !== null) {
                var node = targetInst;
                mainLoop: while(true){
                    if (node === null) {
                        return;
                    }
                    var nodeTag = node.tag;
                    if (nodeTag === HostRoot || nodeTag === HostPortal) {
                        var container = node.stateNode.containerInfo;
                        if (isMatchingRootContainer(container, targetContainerNode)) {
                            break;
                        }
                        if (nodeTag === HostPortal) {
                            var grandNode = node.return;
                            while(grandNode !== null){
                                var grandTag = grandNode.tag;
                                if (grandTag === HostRoot || grandTag === HostPortal) {
                                    var grandContainer = grandNode.stateNode.containerInfo;
                                    if (isMatchingRootContainer(grandContainer, targetContainerNode)) {
                                        return;
                                    }
                                }
                                grandNode = grandNode.return;
                            }
                        }
                        while(container !== null){
                            var parentNode = getClosestInstanceFromNode(container);
                            if (parentNode === null) {
                                return;
                            }
                            var parentTag = parentNode.tag;
                            if (parentTag === HostComponent || parentTag === HostText) {
                                node = ancestorInst = parentNode;
                                continue mainLoop;
                            }
                            container = container.parentNode;
                        }
                    }
                    node = node.return;
                }
            }
        }
        batchedEventUpdates(function() {
            return dispatchEventsForPlugins(domEventName, eventSystemFlags, nativeEvent, ancestorInst);
        });
    }
    function createDispatchListener(instance, listener, currentTarget) {
        return {
            instance: instance,
            listener: listener,
            currentTarget: currentTarget
        };
    }
    function accumulateSinglePhaseListeners(targetFiber, reactName, nativeEventType, inCapturePhase, accumulateTargetOnly) {
        var captureName = reactName !== null ? reactName + "Capture" : null;
        var reactEventName = inCapturePhase ? captureName : reactName;
        var listeners = [];
        var instance = targetFiber;
        var lastHostComponent = null;
        while(instance !== null){
            var _instance2 = instance, stateNode = _instance2.stateNode, tag = _instance2.tag;
            if (tag === HostComponent && stateNode !== null) {
                lastHostComponent = stateNode;
                if (reactEventName !== null) {
                    var listener = getListener(instance, reactEventName);
                    if (listener != null) {
                        listeners.push(createDispatchListener(instance, listener, lastHostComponent));
                    }
                }
            }
            if (accumulateTargetOnly) {
                break;
            }
            instance = instance.return;
        }
        return listeners;
    }
    function accumulateTwoPhaseListeners(targetFiber, reactName) {
        var captureName = reactName + "Capture";
        var listeners = [];
        var instance = targetFiber;
        while(instance !== null){
            var _instance3 = instance, stateNode = _instance3.stateNode, tag = _instance3.tag;
            if (tag === HostComponent && stateNode !== null) {
                var currentTarget = stateNode;
                var captureListener = getListener(instance, captureName);
                if (captureListener != null) {
                    listeners.unshift(createDispatchListener(instance, captureListener, currentTarget));
                }
                var bubbleListener = getListener(instance, reactName);
                if (bubbleListener != null) {
                    listeners.push(createDispatchListener(instance, bubbleListener, currentTarget));
                }
            }
            instance = instance.return;
        }
        return listeners;
    }
    function getParent(inst) {
        if (inst === null) {
            return null;
        }
        do {
            inst = inst.return;
        }while (inst && inst.tag !== HostComponent)
        if (inst) {
            return inst;
        }
        return null;
    }
    function getLowestCommonAncestor(instA, instB) {
        var nodeA = instA;
        var nodeB = instB;
        var depthA = 0;
        for(var tempA = nodeA; tempA; tempA = getParent(tempA)){
            depthA++;
        }
        var depthB = 0;
        for(var tempB = nodeB; tempB; tempB = getParent(tempB)){
            depthB++;
        }
        while(depthA - depthB > 0){
            nodeA = getParent(nodeA);
            depthA--;
        }
        while(depthB - depthA > 0){
            nodeB = getParent(nodeB);
            depthB--;
        }
        var depth = depthA;
        while(depth--){
            if (nodeA === nodeB || nodeB !== null && nodeA === nodeB.alternate) {
                return nodeA;
            }
            nodeA = getParent(nodeA);
            nodeB = getParent(nodeB);
        }
        return null;
    }
    function accumulateEnterLeaveListenersForEvent(dispatchQueue, event, target, common, inCapturePhase) {
        var registrationName = event._reactName;
        var listeners = [];
        var instance = target;
        while(instance !== null){
            if (instance === common) {
                break;
            }
            var _instance4 = instance, alternate = _instance4.alternate, stateNode = _instance4.stateNode, tag = _instance4.tag;
            if (alternate !== null && alternate === common) {
                break;
            }
            if (tag === HostComponent && stateNode !== null) {
                var currentTarget = stateNode;
                if (inCapturePhase) {
                    var captureListener = getListener(instance, registrationName);
                    if (captureListener != null) {
                        listeners.unshift(createDispatchListener(instance, captureListener, currentTarget));
                    }
                } else if (!inCapturePhase) {
                    var bubbleListener = getListener(instance, registrationName);
                    if (bubbleListener != null) {
                        listeners.push(createDispatchListener(instance, bubbleListener, currentTarget));
                    }
                }
            }
            instance = instance.return;
        }
        if (listeners.length !== 0) {
            dispatchQueue.push({
                event: event,
                listeners: listeners
            });
        }
    }
    function accumulateEnterLeaveTwoPhaseListeners(dispatchQueue, leaveEvent, enterEvent, from, to) {
        var common = from && to ? getLowestCommonAncestor(from, to) : null;
        if (from !== null) {
            accumulateEnterLeaveListenersForEvent(dispatchQueue, leaveEvent, from, common, false);
        }
        if (to !== null && enterEvent !== null) {
            accumulateEnterLeaveListenersForEvent(dispatchQueue, enterEvent, to, common, true);
        }
    }
    function getListenerSetKey(domEventName, capture) {
        return domEventName + "__" + (capture ? "capture" : "bubble");
    }
    var didWarnInvalidHydration = false;
    var DANGEROUSLY_SET_INNER_HTML = "dangerouslySetInnerHTML";
    var SUPPRESS_CONTENT_EDITABLE_WARNING = "suppressContentEditableWarning";
    var SUPPRESS_HYDRATION_WARNING = "suppressHydrationWarning";
    var AUTOFOCUS = "autoFocus";
    var CHILDREN = "children";
    var STYLE = "style";
    var HTML$1 = "__html";
    var HTML_NAMESPACE$1 = Namespaces.html;
    var warnedUnknownTags;
    var suppressHydrationWarning;
    var validatePropertiesInDevelopment;
    var warnForTextDifference;
    var warnForPropDifference;
    var warnForExtraAttributes;
    var warnForInvalidEventListener;
    var canDiffStyleForHydrationWarning;
    var normalizeMarkupForTextOrAttribute;
    var normalizeHTML;
    {
        warnedUnknownTags = {
            dialog: true,
            webview: true
        };
        validatePropertiesInDevelopment = function(type, props) {
            validateProperties(type, props);
            validateProperties$1(type, props);
            validateProperties$2(type, props, {
                registrationNameDependencies: registrationNameDependencies1,
                possibleRegistrationNames: possibleRegistrationNames1
            });
        };
        canDiffStyleForHydrationWarning = canUseDOM && !document.documentMode;
        var NORMALIZE_NEWLINES_REGEX = /\r\n?/g;
        var NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
        normalizeMarkupForTextOrAttribute = function(markup) {
            var markupString = typeof markup === "string" ? markup : "" + markup;
            return markupString.replace(NORMALIZE_NEWLINES_REGEX, "\n").replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
        };
        warnForTextDifference = function(serverText, clientText) {
            if (didWarnInvalidHydration) {
                return;
            }
            var normalizedClientText = normalizeMarkupForTextOrAttribute(clientText);
            var normalizedServerText = normalizeMarkupForTextOrAttribute(serverText);
            if (normalizedServerText === normalizedClientText) {
                return;
            }
            didWarnInvalidHydration = true;
            error1("Text content did not match. Server: \"%s\" Client: \"%s\"", normalizedServerText, normalizedClientText);
        };
        warnForPropDifference = function(propName, serverValue, clientValue) {
            if (didWarnInvalidHydration) {
                return;
            }
            var normalizedClientValue = normalizeMarkupForTextOrAttribute(clientValue);
            var normalizedServerValue = normalizeMarkupForTextOrAttribute(serverValue);
            if (normalizedServerValue === normalizedClientValue) {
                return;
            }
            didWarnInvalidHydration = true;
            error1("Prop `%s` did not match. Server: %s Client: %s", propName, JSON.stringify(normalizedServerValue), JSON.stringify(normalizedClientValue));
        };
        warnForExtraAttributes = function(attributeNames) {
            if (didWarnInvalidHydration) {
                return;
            }
            didWarnInvalidHydration = true;
            var names = [];
            attributeNames.forEach(function(name) {
                names.push(name);
            });
            error1("Extra attributes from the server: %s", names);
        };
        warnForInvalidEventListener = function(registrationName, listener) {
            if (listener === false) {
                error1("Expected `%s` listener to be a function, instead got `false`.\n\n" + "If you used to conditionally omit it with %s={condition && value}, " + "pass %s={condition ? value : undefined} instead.", registrationName, registrationName, registrationName);
            } else {
                error1("Expected `%s` listener to be a function, instead got a value of `%s` type.", registrationName, typeof listener);
            }
        };
        normalizeHTML = function(parent, html) {
            var testElement = parent.namespaceURI === HTML_NAMESPACE$1 ? parent.ownerDocument.createElement(parent.tagName) : parent.ownerDocument.createElementNS(parent.namespaceURI, parent.tagName);
            testElement.innerHTML = html;
            return testElement.innerHTML;
        };
    }
    function getOwnerDocumentFromRootContainer(rootContainerElement) {
        return rootContainerElement.nodeType === DOCUMENT_NODE ? rootContainerElement : rootContainerElement.ownerDocument;
    }
    function noop() {}
    function trapClickOnNonInteractiveElement(node) {
        node.onclick = noop;
    }
    function setInitialDOMProperties(tag, domElement, rootContainerElement, nextProps, isCustomComponentTag) {
        for(var propKey in nextProps){
            if (!nextProps.hasOwnProperty(propKey)) {
                continue;
            }
            var nextProp = nextProps[propKey];
            if (propKey === STYLE) {
                {
                    if (nextProp) {
                        Object.freeze(nextProp);
                    }
                }
                setValueForStyles(domElement, nextProp);
            } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
                var nextHtml = nextProp ? nextProp[HTML$1] : undefined;
                if (nextHtml != null) {
                    setInnerHTML(domElement, nextHtml);
                }
            } else if (propKey === CHILDREN) {
                if (typeof nextProp === "string") {
                    var canSetTextContent = tag !== "textarea" || nextProp !== "";
                    if (canSetTextContent) {
                        setTextContent(domElement, nextProp);
                    }
                } else if (typeof nextProp === "number") {
                    setTextContent(domElement, "" + nextProp);
                }
            } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING) ;
            else if (propKey === AUTOFOCUS) ;
            else if (registrationNameDependencies1.hasOwnProperty(propKey)) {
                if (nextProp != null) {
                    if (typeof nextProp !== "function") {
                        warnForInvalidEventListener(propKey, nextProp);
                    }
                    if (propKey === "onScroll") {
                        listenToNonDelegatedEvent("scroll", domElement);
                    }
                }
            } else if (nextProp != null) {
                setValueForProperty(domElement, propKey, nextProp, isCustomComponentTag);
            }
        }
    }
    function updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag) {
        for(var i = 0; i < updatePayload.length; i += 2){
            var propKey = updatePayload[i];
            var propValue = updatePayload[i + 1];
            if (propKey === STYLE) {
                setValueForStyles(domElement, propValue);
            } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
                setInnerHTML(domElement, propValue);
            } else if (propKey === CHILDREN) {
                setTextContent(domElement, propValue);
            } else {
                setValueForProperty(domElement, propKey, propValue, isCustomComponentTag);
            }
        }
    }
    function createElement1(type, props, rootContainerElement, parentNamespace) {
        var isCustomComponentTag;
        var ownerDocument = getOwnerDocumentFromRootContainer(rootContainerElement);
        var domElement;
        var namespaceURI = parentNamespace;
        if (namespaceURI === HTML_NAMESPACE$1) {
            namespaceURI = getIntrinsicNamespace(type);
        }
        if (namespaceURI === HTML_NAMESPACE$1) {
            {
                isCustomComponentTag = isCustomComponent(type, props);
                if (!isCustomComponentTag && type !== type.toLowerCase()) {
                    error1("<%s /> is using incorrect casing. " + "Use PascalCase for React components, " + "or lowercase for HTML elements.", type);
                }
            }
            if (type === "script") {
                var div = ownerDocument.createElement("div");
                div.innerHTML = "<script><" + "/script>";
                var firstChild = div.firstChild;
                domElement = div.removeChild(firstChild);
            } else if (typeof props.is === "string") {
                domElement = ownerDocument.createElement(type, {
                    is: props.is
                });
            } else {
                domElement = ownerDocument.createElement(type);
                if (type === "select") {
                    var node = domElement;
                    if (props.multiple) {
                        node.multiple = true;
                    } else if (props.size) {
                        node.size = props.size;
                    }
                }
            }
        } else {
            domElement = ownerDocument.createElementNS(namespaceURI, type);
        }
        {
            if (namespaceURI === HTML_NAMESPACE$1) {
                if (!isCustomComponentTag && Object.prototype.toString.call(domElement) === "[object HTMLUnknownElement]" && !Object.prototype.hasOwnProperty.call(warnedUnknownTags, type)) {
                    warnedUnknownTags[type] = true;
                    error1("The tag <%s> is unrecognized in this browser. " + "If you meant to render a React component, start its name with " + "an uppercase letter.", type);
                }
            }
        }
        return domElement;
    }
    function createTextNode(text, rootContainerElement) {
        return getOwnerDocumentFromRootContainer(rootContainerElement).createTextNode(text);
    }
    function setInitialProperties(domElement, tag, rawProps, rootContainerElement) {
        var isCustomComponentTag = isCustomComponent(tag, rawProps);
        {
            validatePropertiesInDevelopment(tag, rawProps);
        }
        var props;
        switch(tag){
            case "dialog":
                listenToNonDelegatedEvent("cancel", domElement);
                listenToNonDelegatedEvent("close", domElement);
                props = rawProps;
                break;
            case "iframe":
            case "object":
            case "embed":
                listenToNonDelegatedEvent("load", domElement);
                props = rawProps;
                break;
            case "video":
            case "audio":
                for(var i = 0; i < mediaEventTypes.length; i++){
                    listenToNonDelegatedEvent(mediaEventTypes[i], domElement);
                }
                props = rawProps;
                break;
            case "source":
                listenToNonDelegatedEvent("error", domElement);
                props = rawProps;
                break;
            case "img":
            case "image":
            case "link":
                listenToNonDelegatedEvent("error", domElement);
                listenToNonDelegatedEvent("load", domElement);
                props = rawProps;
                break;
            case "details":
                listenToNonDelegatedEvent("toggle", domElement);
                props = rawProps;
                break;
            case "input":
                initWrapperState(domElement, rawProps);
                props = getHostProps(domElement, rawProps);
                listenToNonDelegatedEvent("invalid", domElement);
                break;
            case "option":
                validateProps(domElement, rawProps);
                props = getHostProps$1(domElement, rawProps);
                break;
            case "select":
                initWrapperState$1(domElement, rawProps);
                props = getHostProps$2(domElement, rawProps);
                listenToNonDelegatedEvent("invalid", domElement);
                break;
            case "textarea":
                initWrapperState$2(domElement, rawProps);
                props = getHostProps$3(domElement, rawProps);
                listenToNonDelegatedEvent("invalid", domElement);
                break;
            default:
                props = rawProps;
        }
        assertValidProps(tag, props);
        setInitialDOMProperties(tag, domElement, rootContainerElement, props, isCustomComponentTag);
        switch(tag){
            case "input":
                track(domElement);
                postMountWrapper(domElement, rawProps, false);
                break;
            case "textarea":
                track(domElement);
                postMountWrapper$3(domElement);
                break;
            case "option":
                postMountWrapper$1(domElement, rawProps);
                break;
            case "select":
                postMountWrapper$2(domElement, rawProps);
                break;
            default:
                if (typeof props.onClick === "function") {
                    trapClickOnNonInteractiveElement(domElement);
                }
                break;
        }
    }
    function diffProperties(domElement, tag, lastRawProps, nextRawProps, rootContainerElement) {
        {
            validatePropertiesInDevelopment(tag, nextRawProps);
        }
        var updatePayload = null;
        var lastProps;
        var nextProps;
        switch(tag){
            case "input":
                lastProps = getHostProps(domElement, lastRawProps);
                nextProps = getHostProps(domElement, nextRawProps);
                updatePayload = [];
                break;
            case "option":
                lastProps = getHostProps$1(domElement, lastRawProps);
                nextProps = getHostProps$1(domElement, nextRawProps);
                updatePayload = [];
                break;
            case "select":
                lastProps = getHostProps$2(domElement, lastRawProps);
                nextProps = getHostProps$2(domElement, nextRawProps);
                updatePayload = [];
                break;
            case "textarea":
                lastProps = getHostProps$3(domElement, lastRawProps);
                nextProps = getHostProps$3(domElement, nextRawProps);
                updatePayload = [];
                break;
            default:
                lastProps = lastRawProps;
                nextProps = nextRawProps;
                if (typeof lastProps.onClick !== "function" && typeof nextProps.onClick === "function") {
                    trapClickOnNonInteractiveElement(domElement);
                }
                break;
        }
        assertValidProps(tag, nextProps);
        var propKey;
        var styleName;
        var styleUpdates = null;
        for(propKey in lastProps){
            if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
                continue;
            }
            if (propKey === STYLE) {
                var lastStyle = lastProps[propKey];
                for(styleName in lastStyle){
                    if (lastStyle.hasOwnProperty(styleName)) {
                        if (!styleUpdates) {
                            styleUpdates = {};
                        }
                        styleUpdates[styleName] = "";
                    }
                }
            } else if (propKey === DANGEROUSLY_SET_INNER_HTML || propKey === CHILDREN) ;
            else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING) ;
            else if (propKey === AUTOFOCUS) ;
            else if (registrationNameDependencies1.hasOwnProperty(propKey)) {
                if (!updatePayload) {
                    updatePayload = [];
                }
            } else {
                (updatePayload = updatePayload || []).push(propKey, null);
            }
        }
        for(propKey in nextProps){
            var nextProp = nextProps[propKey];
            var lastProp = lastProps != null ? lastProps[propKey] : undefined;
            if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
                continue;
            }
            if (propKey === STYLE) {
                {
                    if (nextProp) {
                        Object.freeze(nextProp);
                    }
                }
                if (lastProp) {
                    for(styleName in lastProp){
                        if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
                            if (!styleUpdates) {
                                styleUpdates = {};
                            }
                            styleUpdates[styleName] = "";
                        }
                    }
                    for(styleName in nextProp){
                        if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
                            if (!styleUpdates) {
                                styleUpdates = {};
                            }
                            styleUpdates[styleName] = nextProp[styleName];
                        }
                    }
                } else {
                    if (!styleUpdates) {
                        if (!updatePayload) {
                            updatePayload = [];
                        }
                        updatePayload.push(propKey, styleUpdates);
                    }
                    styleUpdates = nextProp;
                }
            } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
                var nextHtml = nextProp ? nextProp[HTML$1] : undefined;
                var lastHtml = lastProp ? lastProp[HTML$1] : undefined;
                if (nextHtml != null) {
                    if (lastHtml !== nextHtml) {
                        (updatePayload = updatePayload || []).push(propKey, nextHtml);
                    }
                }
            } else if (propKey === CHILDREN) {
                if (typeof nextProp === "string" || typeof nextProp === "number") {
                    (updatePayload = updatePayload || []).push(propKey, "" + nextProp);
                }
            } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING) ;
            else if (registrationNameDependencies1.hasOwnProperty(propKey)) {
                if (nextProp != null) {
                    if (typeof nextProp !== "function") {
                        warnForInvalidEventListener(propKey, nextProp);
                    }
                    if (propKey === "onScroll") {
                        listenToNonDelegatedEvent("scroll", domElement);
                    }
                }
                if (!updatePayload && lastProp !== nextProp) {
                    updatePayload = [];
                }
            } else if (typeof nextProp === "object" && nextProp !== null && nextProp.$$typeof === REACT_OPAQUE_ID_TYPE) {
                nextProp.toString();
            } else {
                (updatePayload = updatePayload || []).push(propKey, nextProp);
            }
        }
        if (styleUpdates) {
            {
                validateShorthandPropertyCollisionInDev(styleUpdates, nextProps[STYLE]);
            }
            (updatePayload = updatePayload || []).push(STYLE, styleUpdates);
        }
        return updatePayload;
    }
    function updateProperties(domElement, updatePayload, tag, lastRawProps, nextRawProps) {
        if (tag === "input" && nextRawProps.type === "radio" && nextRawProps.name != null) {
            updateChecked(domElement, nextRawProps);
        }
        var wasCustomComponentTag = isCustomComponent(tag, lastRawProps);
        var isCustomComponentTag = isCustomComponent(tag, nextRawProps);
        updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag);
        switch(tag){
            case "input":
                updateWrapper(domElement, nextRawProps);
                break;
            case "textarea":
                updateWrapper$1(domElement, nextRawProps);
                break;
            case "select":
                postUpdateWrapper(domElement, nextRawProps);
                break;
        }
    }
    function getPossibleStandardName(propName) {
        {
            var lowerCasedName = propName.toLowerCase();
            if (!possibleStandardNames.hasOwnProperty(lowerCasedName)) {
                return null;
            }
            return possibleStandardNames[lowerCasedName] || null;
        }
    }
    function diffHydratedProperties(domElement, tag, rawProps, parentNamespace, rootContainerElement) {
        var isCustomComponentTag;
        var extraAttributeNames;
        {
            suppressHydrationWarning = rawProps[SUPPRESS_HYDRATION_WARNING] === true;
            isCustomComponentTag = isCustomComponent(tag, rawProps);
            validatePropertiesInDevelopment(tag, rawProps);
        }
        switch(tag){
            case "dialog":
                listenToNonDelegatedEvent("cancel", domElement);
                listenToNonDelegatedEvent("close", domElement);
                break;
            case "iframe":
            case "object":
            case "embed":
                listenToNonDelegatedEvent("load", domElement);
                break;
            case "video":
            case "audio":
                for(var i = 0; i < mediaEventTypes.length; i++){
                    listenToNonDelegatedEvent(mediaEventTypes[i], domElement);
                }
                break;
            case "source":
                listenToNonDelegatedEvent("error", domElement);
                break;
            case "img":
            case "image":
            case "link":
                listenToNonDelegatedEvent("error", domElement);
                listenToNonDelegatedEvent("load", domElement);
                break;
            case "details":
                listenToNonDelegatedEvent("toggle", domElement);
                break;
            case "input":
                initWrapperState(domElement, rawProps);
                listenToNonDelegatedEvent("invalid", domElement);
                break;
            case "option":
                validateProps(domElement, rawProps);
                break;
            case "select":
                initWrapperState$1(domElement, rawProps);
                listenToNonDelegatedEvent("invalid", domElement);
                break;
            case "textarea":
                initWrapperState$2(domElement, rawProps);
                listenToNonDelegatedEvent("invalid", domElement);
                break;
        }
        assertValidProps(tag, rawProps);
        {
            extraAttributeNames = new Set();
            var attributes = domElement.attributes;
            for(var _i = 0; _i < attributes.length; _i++){
                var name = attributes[_i].name.toLowerCase();
                switch(name){
                    case "data-reactroot":
                        break;
                    case "value":
                        break;
                    case "checked":
                        break;
                    case "selected":
                        break;
                    default:
                        extraAttributeNames.add(attributes[_i].name);
                }
            }
        }
        var updatePayload = null;
        for(var propKey in rawProps){
            if (!rawProps.hasOwnProperty(propKey)) {
                continue;
            }
            var nextProp = rawProps[propKey];
            if (propKey === CHILDREN) {
                if (typeof nextProp === "string") {
                    if (domElement.textContent !== nextProp) {
                        if (!suppressHydrationWarning) {
                            warnForTextDifference(domElement.textContent, nextProp);
                        }
                        updatePayload = [
                            CHILDREN,
                            nextProp
                        ];
                    }
                } else if (typeof nextProp === "number") {
                    if (domElement.textContent !== "" + nextProp) {
                        if (!suppressHydrationWarning) {
                            warnForTextDifference(domElement.textContent, nextProp);
                        }
                        updatePayload = [
                            CHILDREN,
                            "" + nextProp
                        ];
                    }
                }
            } else if (registrationNameDependencies1.hasOwnProperty(propKey)) {
                if (nextProp != null) {
                    if (typeof nextProp !== "function") {
                        warnForInvalidEventListener(propKey, nextProp);
                    }
                    if (propKey === "onScroll") {
                        listenToNonDelegatedEvent("scroll", domElement);
                    }
                }
            } else if (typeof isCustomComponentTag === "boolean") {
                var serverValue = void 0;
                var propertyInfo = getPropertyInfo(propKey);
                if (suppressHydrationWarning) ;
                else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING || propKey === "value" || propKey === "checked" || propKey === "selected") ;
                else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
                    var serverHTML = domElement.innerHTML;
                    var nextHtml = nextProp ? nextProp[HTML$1] : undefined;
                    if (nextHtml != null) {
                        var expectedHTML = normalizeHTML(domElement, nextHtml);
                        if (expectedHTML !== serverHTML) {
                            warnForPropDifference(propKey, serverHTML, expectedHTML);
                        }
                    }
                } else if (propKey === STYLE) {
                    extraAttributeNames.delete(propKey);
                    if (canDiffStyleForHydrationWarning) {
                        var expectedStyle = createDangerousStringForStyles(nextProp);
                        serverValue = domElement.getAttribute("style");
                        if (expectedStyle !== serverValue) {
                            warnForPropDifference(propKey, serverValue, expectedStyle);
                        }
                    }
                } else if (isCustomComponentTag) {
                    extraAttributeNames.delete(propKey.toLowerCase());
                    serverValue = getValueForAttribute(domElement, propKey, nextProp);
                    if (nextProp !== serverValue) {
                        warnForPropDifference(propKey, serverValue, nextProp);
                    }
                } else if (!shouldIgnoreAttribute(propKey, propertyInfo, isCustomComponentTag) && !shouldRemoveAttribute(propKey, nextProp, propertyInfo, isCustomComponentTag)) {
                    var isMismatchDueToBadCasing = false;
                    if (propertyInfo !== null) {
                        extraAttributeNames.delete(propertyInfo.attributeName);
                        serverValue = getValueForProperty(domElement, propKey, nextProp, propertyInfo);
                    } else {
                        var ownNamespace = parentNamespace;
                        if (ownNamespace === HTML_NAMESPACE$1) {
                            ownNamespace = getIntrinsicNamespace(tag);
                        }
                        if (ownNamespace === HTML_NAMESPACE$1) {
                            extraAttributeNames.delete(propKey.toLowerCase());
                        } else {
                            var standardName = getPossibleStandardName(propKey);
                            if (standardName !== null && standardName !== propKey) {
                                isMismatchDueToBadCasing = true;
                                extraAttributeNames.delete(standardName);
                            }
                            extraAttributeNames.delete(propKey);
                        }
                        serverValue = getValueForAttribute(domElement, propKey, nextProp);
                    }
                    if (nextProp !== serverValue && !isMismatchDueToBadCasing) {
                        warnForPropDifference(propKey, serverValue, nextProp);
                    }
                }
            }
        }
        {
            if (extraAttributeNames.size > 0 && !suppressHydrationWarning) {
                warnForExtraAttributes(extraAttributeNames);
            }
        }
        switch(tag){
            case "input":
                track(domElement);
                postMountWrapper(domElement, rawProps, true);
                break;
            case "textarea":
                track(domElement);
                postMountWrapper$3(domElement);
                break;
            case "select":
            case "option":
                break;
            default:
                if (typeof rawProps.onClick === "function") {
                    trapClickOnNonInteractiveElement(domElement);
                }
                break;
        }
        return updatePayload;
    }
    function diffHydratedText(textNode, text) {
        var isDifferent = textNode.nodeValue !== text;
        return isDifferent;
    }
    function warnForUnmatchedText(textNode, text) {
        {
            warnForTextDifference(textNode.nodeValue, text);
        }
    }
    function warnForDeletedHydratableElement(parentNode, child) {
        {
            if (didWarnInvalidHydration) {
                return;
            }
            didWarnInvalidHydration = true;
            error1("Did not expect server HTML to contain a <%s> in <%s>.", child.nodeName.toLowerCase(), parentNode.nodeName.toLowerCase());
        }
    }
    function warnForDeletedHydratableText(parentNode, child) {
        {
            if (didWarnInvalidHydration) {
                return;
            }
            didWarnInvalidHydration = true;
            error1("Did not expect server HTML to contain the text node \"%s\" in <%s>.", child.nodeValue, parentNode.nodeName.toLowerCase());
        }
    }
    function warnForInsertedHydratedElement(parentNode, tag, props) {
        {
            if (didWarnInvalidHydration) {
                return;
            }
            didWarnInvalidHydration = true;
            error1("Expected server HTML to contain a matching <%s> in <%s>.", tag, parentNode.nodeName.toLowerCase());
        }
    }
    function warnForInsertedHydratedText(parentNode, text) {
        {
            if (text === "") {
                return;
            }
            if (didWarnInvalidHydration) {
                return;
            }
            didWarnInvalidHydration = true;
            error1("Expected server HTML to contain a matching text node for \"%s\" in <%s>.", text, parentNode.nodeName.toLowerCase());
        }
    }
    function restoreControlledState$3(domElement, tag, props) {
        switch(tag){
            case "input":
                restoreControlledState(domElement, props);
                return;
            case "textarea":
                restoreControlledState$2(domElement, props);
                return;
            case "select":
                restoreControlledState$1(domElement, props);
                return;
        }
    }
    var validateDOMNesting = function() {};
    var updatedAncestorInfo = function() {};
    {
        var specialTags = [
            "address",
            "applet",
            "area",
            "article",
            "aside",
            "base",
            "basefont",
            "bgsound",
            "blockquote",
            "body",
            "br",
            "button",
            "caption",
            "center",
            "col",
            "colgroup",
            "dd",
            "details",
            "dir",
            "div",
            "dl",
            "dt",
            "embed",
            "fieldset",
            "figcaption",
            "figure",
            "footer",
            "form",
            "frame",
            "frameset",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hgroup",
            "hr",
            "html",
            "iframe",
            "img",
            "input",
            "isindex",
            "li",
            "link",
            "listing",
            "main",
            "marquee",
            "menu",
            "menuitem",
            "meta",
            "nav",
            "noembed",
            "noframes",
            "noscript",
            "object",
            "ol",
            "p",
            "param",
            "plaintext",
            "pre",
            "script",
            "section",
            "select",
            "source",
            "style",
            "summary",
            "table",
            "tbody",
            "td",
            "template",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "title",
            "tr",
            "track",
            "ul",
            "wbr",
            "xmp"
        ];
        var inScopeTags = [
            "applet",
            "caption",
            "html",
            "table",
            "td",
            "th",
            "marquee",
            "object",
            "template",
            "foreignObject",
            "desc",
            "title"
        ];
        var buttonScopeTags = inScopeTags.concat([
            "button"
        ]);
        var impliedEndTags = [
            "dd",
            "dt",
            "li",
            "option",
            "optgroup",
            "p",
            "rp",
            "rt"
        ];
        var emptyAncestorInfo = {
            current: null,
            formTag: null,
            aTagInScope: null,
            buttonTagInScope: null,
            nobrTagInScope: null,
            pTagInButtonScope: null,
            listItemTagAutoclosing: null,
            dlItemTagAutoclosing: null
        };
        updatedAncestorInfo = function(oldInfo, tag) {
            var ancestorInfo = _assign({}, oldInfo || emptyAncestorInfo);
            var info = {
                tag: tag
            };
            if (inScopeTags.indexOf(tag) !== -1) {
                ancestorInfo.aTagInScope = null;
                ancestorInfo.buttonTagInScope = null;
                ancestorInfo.nobrTagInScope = null;
            }
            if (buttonScopeTags.indexOf(tag) !== -1) {
                ancestorInfo.pTagInButtonScope = null;
            }
            if (specialTags.indexOf(tag) !== -1 && tag !== "address" && tag !== "div" && tag !== "p") {
                ancestorInfo.listItemTagAutoclosing = null;
                ancestorInfo.dlItemTagAutoclosing = null;
            }
            ancestorInfo.current = info;
            if (tag === "form") {
                ancestorInfo.formTag = info;
            }
            if (tag === "a") {
                ancestorInfo.aTagInScope = info;
            }
            if (tag === "button") {
                ancestorInfo.buttonTagInScope = info;
            }
            if (tag === "nobr") {
                ancestorInfo.nobrTagInScope = info;
            }
            if (tag === "p") {
                ancestorInfo.pTagInButtonScope = info;
            }
            if (tag === "li") {
                ancestorInfo.listItemTagAutoclosing = info;
            }
            if (tag === "dd" || tag === "dt") {
                ancestorInfo.dlItemTagAutoclosing = info;
            }
            return ancestorInfo;
        };
        var isTagValidWithParent = function(tag, parentTag) {
            switch(parentTag){
                case "select":
                    return tag === "option" || tag === "optgroup" || tag === "#text";
                case "optgroup":
                    return tag === "option" || tag === "#text";
                case "option":
                    return tag === "#text";
                case "tr":
                    return tag === "th" || tag === "td" || tag === "style" || tag === "script" || tag === "template";
                case "tbody":
                case "thead":
                case "tfoot":
                    return tag === "tr" || tag === "style" || tag === "script" || tag === "template";
                case "colgroup":
                    return tag === "col" || tag === "template";
                case "table":
                    return tag === "caption" || tag === "colgroup" || tag === "tbody" || tag === "tfoot" || tag === "thead" || tag === "style" || tag === "script" || tag === "template";
                case "head":
                    return tag === "base" || tag === "basefont" || tag === "bgsound" || tag === "link" || tag === "meta" || tag === "title" || tag === "noscript" || tag === "noframes" || tag === "style" || tag === "script" || tag === "template";
                case "html":
                    return tag === "head" || tag === "body" || tag === "frameset";
                case "frameset":
                    return tag === "frame";
                case "#document":
                    return tag === "html";
            }
            switch(tag){
                case "h1":
                case "h2":
                case "h3":
                case "h4":
                case "h5":
                case "h6":
                    return parentTag !== "h1" && parentTag !== "h2" && parentTag !== "h3" && parentTag !== "h4" && parentTag !== "h5" && parentTag !== "h6";
                case "rp":
                case "rt":
                    return impliedEndTags.indexOf(parentTag) === -1;
                case "body":
                case "caption":
                case "col":
                case "colgroup":
                case "frameset":
                case "frame":
                case "head":
                case "html":
                case "tbody":
                case "td":
                case "tfoot":
                case "th":
                case "thead":
                case "tr":
                    return parentTag == null;
            }
            return true;
        };
        var findInvalidAncestorForTag = function(tag, ancestorInfo) {
            switch(tag){
                case "address":
                case "article":
                case "aside":
                case "blockquote":
                case "center":
                case "details":
                case "dialog":
                case "dir":
                case "div":
                case "dl":
                case "fieldset":
                case "figcaption":
                case "figure":
                case "footer":
                case "header":
                case "hgroup":
                case "main":
                case "menu":
                case "nav":
                case "ol":
                case "p":
                case "section":
                case "summary":
                case "ul":
                case "pre":
                case "listing":
                case "table":
                case "hr":
                case "xmp":
                case "h1":
                case "h2":
                case "h3":
                case "h4":
                case "h5":
                case "h6":
                    return ancestorInfo.pTagInButtonScope;
                case "form":
                    return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;
                case "li":
                    return ancestorInfo.listItemTagAutoclosing;
                case "dd":
                case "dt":
                    return ancestorInfo.dlItemTagAutoclosing;
                case "button":
                    return ancestorInfo.buttonTagInScope;
                case "a":
                    return ancestorInfo.aTagInScope;
                case "nobr":
                    return ancestorInfo.nobrTagInScope;
            }
            return null;
        };
        var didWarn$1 = {};
        validateDOMNesting = function(childTag, childText, ancestorInfo) {
            ancestorInfo = ancestorInfo || emptyAncestorInfo;
            var parentInfo = ancestorInfo.current;
            var parentTag = parentInfo && parentInfo.tag;
            if (childText != null) {
                if (childTag != null) {
                    error1("validateDOMNesting: when childText is passed, childTag should be null");
                }
                childTag = "#text";
            }
            var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
            var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
            var invalidParentOrAncestor = invalidParent || invalidAncestor;
            if (!invalidParentOrAncestor) {
                return;
            }
            var ancestorTag = invalidParentOrAncestor.tag;
            var warnKey = !!invalidParent + "|" + childTag + "|" + ancestorTag;
            if (didWarn$1[warnKey]) {
                return;
            }
            didWarn$1[warnKey] = true;
            var tagDisplayName = childTag;
            var whitespaceInfo = "";
            if (childTag === "#text") {
                if (/\S/.test(childText)) {
                    tagDisplayName = "Text nodes";
                } else {
                    tagDisplayName = "Whitespace text nodes";
                    whitespaceInfo = " Make sure you don't have any extra whitespace between tags on " + "each line of your source code.";
                }
            } else {
                tagDisplayName = "<" + childTag + ">";
            }
            if (invalidParent) {
                var info = "";
                if (ancestorTag === "table" && childTag === "tr") {
                    info += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by " + "the browser.";
                }
                error1("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", tagDisplayName, ancestorTag, whitespaceInfo, info);
            } else {
                error1("validateDOMNesting(...): %s cannot appear as a descendant of " + "<%s>.", tagDisplayName, ancestorTag);
            }
        };
    }
    var SUPPRESS_HYDRATION_WARNING$1;
    {
        SUPPRESS_HYDRATION_WARNING$1 = "suppressHydrationWarning";
    }
    var SUSPENSE_START_DATA = "$";
    var SUSPENSE_END_DATA = "/$";
    var SUSPENSE_PENDING_START_DATA = "$?";
    var SUSPENSE_FALLBACK_START_DATA = "$!";
    var STYLE$1 = "style";
    var eventsEnabled = null;
    var selectionInformation = null;
    function shouldAutoFocusHostComponent(type, props) {
        switch(type){
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!props.autoFocus;
        }
        return false;
    }
    function getRootHostContext(rootContainerInstance) {
        var type;
        var namespace;
        var nodeType = rootContainerInstance.nodeType;
        switch(nodeType){
            case DOCUMENT_NODE:
            case DOCUMENT_FRAGMENT_NODE:
                {
                    type = nodeType === DOCUMENT_NODE ? "#document" : "#fragment";
                    var root = rootContainerInstance.documentElement;
                    namespace = root ? root.namespaceURI : getChildNamespace(null, "");
                    break;
                }
            default:
                {
                    var container = nodeType === COMMENT_NODE ? rootContainerInstance.parentNode : rootContainerInstance;
                    var ownNamespace = container.namespaceURI || null;
                    type = container.tagName;
                    namespace = getChildNamespace(ownNamespace, type);
                    break;
                }
        }
        {
            var validatedTag = type.toLowerCase();
            var ancestorInfo = updatedAncestorInfo(null, validatedTag);
            return {
                namespace: namespace,
                ancestorInfo: ancestorInfo
            };
        }
    }
    function getChildHostContext(parentHostContext, type, rootContainerInstance) {
        {
            var parentHostContextDev = parentHostContext;
            var namespace = getChildNamespace(parentHostContextDev.namespace, type);
            var ancestorInfo = updatedAncestorInfo(parentHostContextDev.ancestorInfo, type);
            return {
                namespace: namespace,
                ancestorInfo: ancestorInfo
            };
        }
    }
    function getPublicInstance(instance) {
        return instance;
    }
    function prepareForCommit(containerInfo) {
        eventsEnabled = isEnabled();
        selectionInformation = getSelectionInformation();
        var activeInstance = null;
        setEnabled(false);
        return activeInstance;
    }
    function resetAfterCommit(containerInfo) {
        restoreSelection(selectionInformation);
        setEnabled(eventsEnabled);
        eventsEnabled = null;
        selectionInformation = null;
    }
    function createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
        var parentNamespace;
        {
            var hostContextDev = hostContext;
            validateDOMNesting(type, null, hostContextDev.ancestorInfo);
            if (typeof props.children === "string" || typeof props.children === "number") {
                var string = "" + props.children;
                var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type);
                validateDOMNesting(null, string, ownAncestorInfo);
            }
            parentNamespace = hostContextDev.namespace;
        }
        var domElement = createElement1(type, props, rootContainerInstance, parentNamespace);
        precacheFiberNode(internalInstanceHandle, domElement);
        updateFiberProps(domElement, props);
        return domElement;
    }
    function appendInitialChild(parentInstance, child) {
        parentInstance.appendChild(child);
    }
    function finalizeInitialChildren(domElement, type, props, rootContainerInstance, hostContext) {
        setInitialProperties(domElement, type, props, rootContainerInstance);
        return shouldAutoFocusHostComponent(type, props);
    }
    function prepareUpdate(domElement, type, oldProps, newProps, rootContainerInstance, hostContext) {
        {
            var hostContextDev = hostContext;
            if (typeof newProps.children !== typeof oldProps.children && (typeof newProps.children === "string" || typeof newProps.children === "number")) {
                var string = "" + newProps.children;
                var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type);
                validateDOMNesting(null, string, ownAncestorInfo);
            }
        }
        return diffProperties(domElement, type, oldProps, newProps);
    }
    function shouldSetTextContent(type, props) {
        return type === "textarea" || type === "option" || type === "noscript" || typeof props.children === "string" || typeof props.children === "number" || typeof props.dangerouslySetInnerHTML === "object" && props.dangerouslySetInnerHTML !== null && props.dangerouslySetInnerHTML.__html != null;
    }
    function createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
        {
            var hostContextDev = hostContext;
            validateDOMNesting(null, text, hostContextDev.ancestorInfo);
        }
        var textNode = createTextNode(text, rootContainerInstance);
        precacheFiberNode(internalInstanceHandle, textNode);
        return textNode;
    }
    var scheduleTimeout = typeof setTimeout === "function" ? setTimeout : undefined;
    var cancelTimeout = typeof clearTimeout === "function" ? clearTimeout : undefined;
    var noTimeout = -1;
    function commitMount(domElement, type, newProps, internalInstanceHandle) {
        if (shouldAutoFocusHostComponent(type, newProps)) {
            domElement.focus();
        }
    }
    function commitUpdate(domElement, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
        updateFiberProps(domElement, newProps);
        updateProperties(domElement, updatePayload, type, oldProps, newProps);
    }
    function resetTextContent(domElement) {
        setTextContent(domElement, "");
    }
    function commitTextUpdate(textInstance, oldText, newText) {
        textInstance.nodeValue = newText;
    }
    function appendChild(parentInstance, child) {
        parentInstance.appendChild(child);
    }
    function appendChildToContainer(container, child) {
        var parentNode;
        if (container.nodeType === COMMENT_NODE) {
            parentNode = container.parentNode;
            parentNode.insertBefore(child, container);
        } else {
            parentNode = container;
            parentNode.appendChild(child);
        }
        var reactRootContainer = container._reactRootContainer;
        if ((reactRootContainer === null || reactRootContainer === undefined) && parentNode.onclick === null) {
            trapClickOnNonInteractiveElement(parentNode);
        }
    }
    function insertBefore(parentInstance, child, beforeChild) {
        parentInstance.insertBefore(child, beforeChild);
    }
    function insertInContainerBefore(container, child, beforeChild) {
        if (container.nodeType === COMMENT_NODE) {
            container.parentNode.insertBefore(child, beforeChild);
        } else {
            container.insertBefore(child, beforeChild);
        }
    }
    function removeChild(parentInstance, child) {
        parentInstance.removeChild(child);
    }
    function removeChildFromContainer(container, child) {
        if (container.nodeType === COMMENT_NODE) {
            container.parentNode.removeChild(child);
        } else {
            container.removeChild(child);
        }
    }
    function hideInstance(instance) {
        instance = instance;
        var style = instance.style;
        if (typeof style.setProperty === "function") {
            style.setProperty("display", "none", "important");
        } else {
            style.display = "none";
        }
    }
    function hideTextInstance(textInstance) {
        textInstance.nodeValue = "";
    }
    function unhideInstance(instance, props) {
        instance = instance;
        var styleProp = props[STYLE$1];
        var display = styleProp !== undefined && styleProp !== null && styleProp.hasOwnProperty("display") ? styleProp.display : null;
        instance.style.display = dangerousStyleValue("display", display);
    }
    function unhideTextInstance(textInstance, text) {
        textInstance.nodeValue = text;
    }
    function clearContainer(container) {
        if (container.nodeType === ELEMENT_NODE) {
            container.textContent = "";
        } else if (container.nodeType === DOCUMENT_NODE) {
            var body = container.body;
            if (body != null) {
                body.textContent = "";
            }
        }
    }
    function canHydrateInstance(instance, type, props) {
        if (instance.nodeType !== ELEMENT_NODE || type.toLowerCase() !== instance.nodeName.toLowerCase()) {
            return null;
        }
        return instance;
    }
    function canHydrateTextInstance(instance, text) {
        if (text === "" || instance.nodeType !== TEXT_NODE) {
            return null;
        }
        return instance;
    }
    function isSuspenseInstancePending(instance) {
        return instance.data === SUSPENSE_PENDING_START_DATA;
    }
    function isSuspenseInstanceFallback(instance) {
        return instance.data === SUSPENSE_FALLBACK_START_DATA;
    }
    function getNextHydratable(node) {
        for(; node != null; node = node.nextSibling){
            var nodeType = node.nodeType;
            if (nodeType === ELEMENT_NODE || nodeType === TEXT_NODE) {
                break;
            }
        }
        return node;
    }
    function getNextHydratableSibling(instance) {
        return getNextHydratable(instance.nextSibling);
    }
    function getFirstHydratableChild(parentInstance) {
        return getNextHydratable(parentInstance.firstChild);
    }
    function hydrateInstance(instance, type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
        precacheFiberNode(internalInstanceHandle, instance);
        updateFiberProps(instance, props);
        var parentNamespace;
        {
            var hostContextDev = hostContext;
            parentNamespace = hostContextDev.namespace;
        }
        return diffHydratedProperties(instance, type, props, parentNamespace);
    }
    function hydrateTextInstance(textInstance, text, internalInstanceHandle) {
        precacheFiberNode(internalInstanceHandle, textInstance);
        return diffHydratedText(textInstance, text);
    }
    function getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance) {
        var node = suspenseInstance.nextSibling;
        var depth = 0;
        while(node){
            if (node.nodeType === COMMENT_NODE) {
                var data = node.data;
                if (data === SUSPENSE_END_DATA) {
                    if (depth === 0) {
                        return getNextHydratableSibling(node);
                    } else {
                        depth--;
                    }
                } else if (data === SUSPENSE_START_DATA || data === SUSPENSE_FALLBACK_START_DATA || data === SUSPENSE_PENDING_START_DATA) {
                    depth++;
                }
            }
            node = node.nextSibling;
        }
        return null;
    }
    function getParentSuspenseInstance(targetInstance) {
        var node = targetInstance.previousSibling;
        var depth = 0;
        while(node){
            if (node.nodeType === COMMENT_NODE) {
                var data = node.data;
                if (data === SUSPENSE_START_DATA || data === SUSPENSE_FALLBACK_START_DATA || data === SUSPENSE_PENDING_START_DATA) {
                    if (depth === 0) {
                        return node;
                    } else {
                        depth--;
                    }
                } else if (data === SUSPENSE_END_DATA) {
                    depth++;
                }
            }
            node = node.previousSibling;
        }
        return null;
    }
    function commitHydratedContainer(container) {
        retryIfBlockedOn(container);
    }
    function commitHydratedSuspenseInstance(suspenseInstance) {
        retryIfBlockedOn(suspenseInstance);
    }
    function didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, text) {
        {
            warnForUnmatchedText(textInstance, text);
        }
    }
    function didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, text) {
        if (parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) {
            warnForUnmatchedText(textInstance, text);
        }
    }
    function didNotHydrateContainerInstance(parentContainer, instance) {
        {
            if (instance.nodeType === ELEMENT_NODE) {
                warnForDeletedHydratableElement(parentContainer, instance);
            } else if (instance.nodeType === COMMENT_NODE) ;
            else {
                warnForDeletedHydratableText(parentContainer, instance);
            }
        }
    }
    function didNotHydrateInstance(parentType, parentProps, parentInstance, instance) {
        if (parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) {
            if (instance.nodeType === ELEMENT_NODE) {
                warnForDeletedHydratableElement(parentInstance, instance);
            } else if (instance.nodeType === COMMENT_NODE) ;
            else {
                warnForDeletedHydratableText(parentInstance, instance);
            }
        }
    }
    function didNotFindHydratableContainerInstance(parentContainer, type, props) {
        {
            warnForInsertedHydratedElement(parentContainer, type);
        }
    }
    function didNotFindHydratableContainerTextInstance(parentContainer, text) {
        {
            warnForInsertedHydratedText(parentContainer, text);
        }
    }
    function didNotFindHydratableInstance(parentType, parentProps, parentInstance, type, props) {
        if (parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) {
            warnForInsertedHydratedElement(parentInstance, type);
        }
    }
    function didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, text) {
        if (parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) {
            warnForInsertedHydratedText(parentInstance, text);
        }
    }
    function didNotFindHydratableSuspenseInstance(parentType, parentProps, parentInstance) {
        if (parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) ;
    }
    var clientId = 0;
    function makeClientIdInDEV(warnOnAccessInDEV) {
        var id = "r:" + (clientId++).toString(36);
        return {
            toString: function() {
                warnOnAccessInDEV();
                return id;
            },
            valueOf: function() {
                warnOnAccessInDEV();
                return id;
            }
        };
    }
    function isOpaqueHydratingObject(value) {
        return value !== null && typeof value === "object" && value.$$typeof === REACT_OPAQUE_ID_TYPE;
    }
    function makeOpaqueHydratingObject(attemptToReadValue) {
        return {
            $$typeof: REACT_OPAQUE_ID_TYPE,
            toString: attemptToReadValue,
            valueOf: attemptToReadValue
        };
    }
    function preparePortalMount(portalInstance) {
        {
            listenToAllSupportedEvents(portalInstance);
        }
    }
    var randomKey = Math.random().toString(36).slice(2);
    var internalInstanceKey = "__reactFiber$" + randomKey;
    var internalPropsKey = "__reactProps$" + randomKey;
    var internalContainerInstanceKey = "__reactContainer$" + randomKey;
    var internalEventHandlersKey = "__reactEvents$" + randomKey;
    function precacheFiberNode(hostInst, node) {
        node[internalInstanceKey] = hostInst;
    }
    function markContainerAsRoot(hostRoot, node) {
        node[internalContainerInstanceKey] = hostRoot;
    }
    function unmarkContainerAsRoot(node) {
        node[internalContainerInstanceKey] = null;
    }
    function isContainerMarkedAsRoot(node) {
        return !!node[internalContainerInstanceKey];
    }
    function getClosestInstanceFromNode(targetNode) {
        var targetInst = targetNode[internalInstanceKey];
        if (targetInst) {
            return targetInst;
        }
        var parentNode = targetNode.parentNode;
        while(parentNode){
            targetInst = parentNode[internalContainerInstanceKey] || parentNode[internalInstanceKey];
            if (targetInst) {
                var alternate = targetInst.alternate;
                if (targetInst.child !== null || alternate !== null && alternate.child !== null) {
                    var suspenseInstance = getParentSuspenseInstance(targetNode);
                    while(suspenseInstance !== null){
                        var targetSuspenseInst = suspenseInstance[internalInstanceKey];
                        if (targetSuspenseInst) {
                            return targetSuspenseInst;
                        }
                        suspenseInstance = getParentSuspenseInstance(suspenseInstance);
                    }
                }
                return targetInst;
            }
            targetNode = parentNode;
            parentNode = targetNode.parentNode;
        }
        return null;
    }
    function getInstanceFromNode(node) {
        var inst = node[internalInstanceKey] || node[internalContainerInstanceKey];
        if (inst) {
            if (inst.tag === HostComponent || inst.tag === HostText || inst.tag === SuspenseComponent || inst.tag === HostRoot) {
                return inst;
            } else {
                return null;
            }
        }
        return null;
    }
    function getNodeFromInstance(inst) {
        if (inst.tag === HostComponent || inst.tag === HostText) {
            return inst.stateNode;
        }
        {
            {
                throw Error("getNodeFromInstance: Invalid argument.");
            }
        }
    }
    function getFiberCurrentPropsFromNode(node) {
        return node[internalPropsKey] || null;
    }
    function updateFiberProps(node, props) {
        node[internalPropsKey] = props;
    }
    function getEventListenerSet(node) {
        var elementListenerSet = node[internalEventHandlersKey];
        if (elementListenerSet === undefined) {
            elementListenerSet = node[internalEventHandlersKey] = new Set();
        }
        return elementListenerSet;
    }
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        {
            if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
        }
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
            var has = Function.call.bind(Object.prototype.hasOwnProperty);
            for(var typeSpecName in typeSpecs){
                if (has(typeSpecs, typeSpecName)) {
                    var error$1 = void 0;
                    try {
                        if (typeof typeSpecs[typeSpecName] !== "function") {
                            var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`." + "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                            err.name = "Invariant Violation";
                            throw err;
                        }
                        error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                    } catch (ex) {
                        error$1 = ex;
                    }
                    if (error$1 && !(error$1 instanceof Error)) {
                        setCurrentlyValidatingElement(element);
                        error1("%s: type specification of %s" + " `%s` is invalid; the type checker " + "function must return `null` or an `Error` but returned a %s. " + "You may have forgotten to pass an argument to the type checker " + "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " + "shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                        setCurrentlyValidatingElement(null);
                    }
                    if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                        loggedTypeFailures[error$1.message] = true;
                        setCurrentlyValidatingElement(element);
                        error1("Failed %s type: %s", location, error$1.message);
                        setCurrentlyValidatingElement(null);
                    }
                }
            }
        }
    }
    var valueStack = [];
    var fiberStack;
    {
        fiberStack = [];
    }
    var index1 = -1;
    function createCursor(defaultValue) {
        return {
            current: defaultValue
        };
    }
    function pop(cursor, fiber) {
        if (index1 < 0) {
            {
                error1("Unexpected pop.");
            }
            return;
        }
        {
            if (fiber !== fiberStack[index1]) {
                error1("Unexpected Fiber popped.");
            }
        }
        cursor.current = valueStack[index1];
        valueStack[index1] = null;
        {
            fiberStack[index1] = null;
        }
        index1--;
    }
    function push(cursor, value, fiber) {
        index1++;
        valueStack[index1] = cursor.current;
        {
            fiberStack[index1] = fiber;
        }
        cursor.current = value;
    }
    var warnedAboutMissingGetChildContext;
    {
        warnedAboutMissingGetChildContext = {};
    }
    var emptyContextObject = {};
    {
        Object.freeze(emptyContextObject);
    }
    var contextStackCursor = createCursor(emptyContextObject);
    var didPerformWorkStackCursor = createCursor(false);
    var previousContext = emptyContextObject;
    function getUnmaskedContext(workInProgress, Component2, didPushOwnContextIfProvider) {
        {
            if (didPushOwnContextIfProvider && isContextProvider(Component2)) {
                return previousContext;
            }
            return contextStackCursor.current;
        }
    }
    function cacheContext(workInProgress, unmaskedContext, maskedContext) {
        {
            var instance = workInProgress.stateNode;
            instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext;
            instance.__reactInternalMemoizedMaskedChildContext = maskedContext;
        }
    }
    function getMaskedContext(workInProgress, unmaskedContext) {
        {
            var type = workInProgress.type;
            var contextTypes = type.contextTypes;
            if (!contextTypes) {
                return emptyContextObject;
            }
            var instance = workInProgress.stateNode;
            if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext) {
                return instance.__reactInternalMemoizedMaskedChildContext;
            }
            var context = {};
            for(var key in contextTypes){
                context[key] = unmaskedContext[key];
            }
            {
                var name = getComponentName(type) || "Unknown";
                checkPropTypes(contextTypes, context, "context", name);
            }
            if (instance) {
                cacheContext(workInProgress, unmaskedContext, context);
            }
            return context;
        }
    }
    function hasContextChanged() {
        {
            return didPerformWorkStackCursor.current;
        }
    }
    function isContextProvider(type) {
        {
            var childContextTypes = type.childContextTypes;
            return childContextTypes !== null && childContextTypes !== undefined;
        }
    }
    function popContext(fiber) {
        {
            pop(didPerformWorkStackCursor, fiber);
            pop(contextStackCursor, fiber);
        }
    }
    function popTopLevelContextObject(fiber) {
        {
            pop(didPerformWorkStackCursor, fiber);
            pop(contextStackCursor, fiber);
        }
    }
    function pushTopLevelContextObject(fiber, context, didChange) {
        {
            if (!(contextStackCursor.current === emptyContextObject)) {
                {
                    throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
                }
            }
            push(contextStackCursor, context, fiber);
            push(didPerformWorkStackCursor, didChange, fiber);
        }
    }
    function processChildContext(fiber, type, parentContext) {
        {
            var instance = fiber.stateNode;
            var childContextTypes = type.childContextTypes;
            if (typeof instance.getChildContext !== "function") {
                {
                    var componentName = getComponentName(type) || "Unknown";
                    if (!warnedAboutMissingGetChildContext[componentName]) {
                        warnedAboutMissingGetChildContext[componentName] = true;
                        error1("%s.childContextTypes is specified but there is no getChildContext() method " + "on the instance. You can either define getChildContext() on %s or remove " + "childContextTypes from it.", componentName, componentName);
                    }
                }
                return parentContext;
            }
            var childContext = instance.getChildContext();
            for(var contextKey in childContext){
                if (!(contextKey in childContextTypes)) {
                    {
                        throw Error((getComponentName(type) || "Unknown") + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes.");
                    }
                }
            }
            {
                var name = getComponentName(type) || "Unknown";
                checkPropTypes(childContextTypes, childContext, "child context", name);
            }
            return _assign({}, parentContext, childContext);
        }
    }
    function pushContextProvider(workInProgress) {
        {
            var instance = workInProgress.stateNode;
            var memoizedMergedChildContext = instance && instance.__reactInternalMemoizedMergedChildContext || emptyContextObject;
            previousContext = contextStackCursor.current;
            push(contextStackCursor, memoizedMergedChildContext, workInProgress);
            push(didPerformWorkStackCursor, didPerformWorkStackCursor.current, workInProgress);
            return true;
        }
    }
    function invalidateContextProvider(workInProgress, type, didChange) {
        {
            var instance = workInProgress.stateNode;
            if (!instance) {
                {
                    throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
                }
            }
            if (didChange) {
                var mergedContext = processChildContext(workInProgress, type, previousContext);
                instance.__reactInternalMemoizedMergedChildContext = mergedContext;
                pop(didPerformWorkStackCursor, workInProgress);
                pop(contextStackCursor, workInProgress);
                push(contextStackCursor, mergedContext, workInProgress);
                push(didPerformWorkStackCursor, didChange, workInProgress);
            } else {
                pop(didPerformWorkStackCursor, workInProgress);
                push(didPerformWorkStackCursor, didChange, workInProgress);
            }
        }
    }
    function findCurrentUnmaskedContext(fiber) {
        {
            if (!(isFiberMounted(fiber) && fiber.tag === ClassComponent)) {
                {
                    throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
                }
            }
            var node = fiber;
            do {
                switch(node.tag){
                    case HostRoot:
                        return node.stateNode.context;
                    case ClassComponent:
                        {
                            var Component3 = node.type;
                            if (isContextProvider(Component3)) {
                                return node.stateNode.__reactInternalMemoizedMergedChildContext;
                            }
                            break;
                        }
                }
                node = node.return;
            }while (node !== null)
            {
                {
                    throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
                }
            }
        }
    }
    var LegacyRoot = 0;
    var BlockingRoot = 1;
    var ConcurrentRoot = 2;
    var rendererID = null;
    var injectedHook = null;
    var hasLoggedError = false;
    var isDevToolsPresent = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined";
    function injectInternals(internals) {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined") {
            return false;
        }
        var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook.isDisabled) {
            return true;
        }
        if (!hook.supportsFiber) {
            {
                error1("The installed version of React DevTools is too old and will not work " + "with the current version of React. Please update React DevTools. " + "https://reactjs.org/link/react-devtools");
            }
            return true;
        }
        try {
            rendererID = hook.inject(internals);
            injectedHook = hook;
        } catch (err) {
            {
                error1("React instrumentation encountered an error: %s.", err);
            }
        }
        return true;
    }
    function onScheduleRoot(root, children) {
        {
            if (injectedHook && typeof injectedHook.onScheduleFiberRoot === "function") {
                try {
                    injectedHook.onScheduleFiberRoot(rendererID, root, children);
                } catch (err) {
                    if (!hasLoggedError) {
                        hasLoggedError = true;
                        error1("React instrumentation encountered an error: %s", err);
                    }
                }
            }
        }
    }
    function onCommitRoot(root, priorityLevel) {
        if (injectedHook && typeof injectedHook.onCommitFiberRoot === "function") {
            try {
                var didError = (root.current.flags & DidCapture) === DidCapture;
                if (enableProfilerTimer) {
                    injectedHook.onCommitFiberRoot(rendererID, root, priorityLevel, didError);
                } else {
                    injectedHook.onCommitFiberRoot(rendererID, root, undefined, didError);
                }
            } catch (err) {
                {
                    if (!hasLoggedError) {
                        hasLoggedError = true;
                        error1("React instrumentation encountered an error: %s", err);
                    }
                }
            }
        }
    }
    function onCommitUnmount(fiber) {
        if (injectedHook && typeof injectedHook.onCommitFiberUnmount === "function") {
            try {
                injectedHook.onCommitFiberUnmount(rendererID, fiber);
            } catch (err) {
                {
                    if (!hasLoggedError) {
                        hasLoggedError = true;
                        error1("React instrumentation encountered an error: %s", err);
                    }
                }
            }
        }
    }
    var Scheduler_runWithPriority = Scheduler.unstable_runWithPriority, Scheduler_scheduleCallback = Scheduler.unstable_scheduleCallback, Scheduler_cancelCallback = Scheduler.unstable_cancelCallback, Scheduler_shouldYield = Scheduler.unstable_shouldYield, Scheduler_requestPaint = Scheduler.unstable_requestPaint, Scheduler_now$1 = Scheduler.unstable_now, Scheduler_getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel, Scheduler_ImmediatePriority = Scheduler.unstable_ImmediatePriority, Scheduler_UserBlockingPriority = Scheduler.unstable_UserBlockingPriority, Scheduler_NormalPriority = Scheduler.unstable_NormalPriority, Scheduler_LowPriority = Scheduler.unstable_LowPriority, Scheduler_IdlePriority = Scheduler.unstable_IdlePriority;
    {
        if (!(tracing.__interactionsRef != null && tracing.__interactionsRef.current != null)) {
            {
                throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
            }
        }
    }
    var fakeCallbackNode = {};
    var ImmediatePriority$1 = 99;
    var UserBlockingPriority$2 = 98;
    var NormalPriority$1 = 97;
    var LowPriority$1 = 96;
    var IdlePriority$1 = 95;
    var NoPriority$1 = 90;
    var shouldYield = Scheduler_shouldYield;
    var requestPaint = Scheduler_requestPaint !== undefined ? Scheduler_requestPaint : function() {};
    var syncQueue = null;
    var immediateQueueCallbackNode = null;
    var isFlushingSyncQueue = false;
    var initialTimeMs$1 = Scheduler_now$1();
    var now = initialTimeMs$1 < 10000 ? Scheduler_now$1 : function() {
        return Scheduler_now$1() - initialTimeMs$1;
    };
    function getCurrentPriorityLevel() {
        switch(Scheduler_getCurrentPriorityLevel()){
            case Scheduler_ImmediatePriority:
                return ImmediatePriority$1;
            case Scheduler_UserBlockingPriority:
                return UserBlockingPriority$2;
            case Scheduler_NormalPriority:
                return NormalPriority$1;
            case Scheduler_LowPriority:
                return LowPriority$1;
            case Scheduler_IdlePriority:
                return IdlePriority$1;
            default:
                {
                    {
                        throw Error("Unknown priority level.");
                    }
                }
        }
    }
    function reactPriorityToSchedulerPriority(reactPriorityLevel) {
        switch(reactPriorityLevel){
            case ImmediatePriority$1:
                return Scheduler_ImmediatePriority;
            case UserBlockingPriority$2:
                return Scheduler_UserBlockingPriority;
            case NormalPriority$1:
                return Scheduler_NormalPriority;
            case LowPriority$1:
                return Scheduler_LowPriority;
            case IdlePriority$1:
                return Scheduler_IdlePriority;
            default:
                {
                    {
                        throw Error("Unknown priority level.");
                    }
                }
        }
    }
    function runWithPriority$1(reactPriorityLevel, fn) {
        var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
        return Scheduler_runWithPriority(priorityLevel, fn);
    }
    function scheduleCallback(reactPriorityLevel, callback, options) {
        var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
        return Scheduler_scheduleCallback(priorityLevel, callback, options);
    }
    function scheduleSyncCallback(callback) {
        if (syncQueue === null) {
            syncQueue = [
                callback
            ];
            immediateQueueCallbackNode = Scheduler_scheduleCallback(Scheduler_ImmediatePriority, flushSyncCallbackQueueImpl);
        } else {
            syncQueue.push(callback);
        }
        return fakeCallbackNode;
    }
    function cancelCallback(callbackNode) {
        if (callbackNode !== fakeCallbackNode) {
            Scheduler_cancelCallback(callbackNode);
        }
    }
    function flushSyncCallbackQueue() {
        if (immediateQueueCallbackNode !== null) {
            var node = immediateQueueCallbackNode;
            immediateQueueCallbackNode = null;
            Scheduler_cancelCallback(node);
        }
        flushSyncCallbackQueueImpl();
    }
    function flushSyncCallbackQueueImpl() {
        if (!isFlushingSyncQueue && syncQueue !== null) {
            isFlushingSyncQueue = true;
            var i = 0;
            {
                try {
                    var _isSync2 = true;
                    var _queue = syncQueue;
                    runWithPriority$1(ImmediatePriority$1, function() {
                        for(; i < _queue.length; i++){
                            var callback = _queue[i];
                            do {
                                callback = callback(_isSync2);
                            }while (callback !== null)
                        }
                    });
                    syncQueue = null;
                } catch (error) {
                    if (syncQueue !== null) {
                        syncQueue = syncQueue.slice(i + 1);
                    }
                    Scheduler_scheduleCallback(Scheduler_ImmediatePriority, flushSyncCallbackQueue);
                    throw error;
                } finally{
                    isFlushingSyncQueue = false;
                }
            }
        }
    }
    var ReactVersion = "17.0.1";
    var NoMode = 0;
    var StrictMode1 = 1;
    var BlockingMode = 2;
    var ConcurrentMode = 4;
    var ProfileMode = 8;
    var DebugTracingMode = 16;
    var ReactCurrentBatchConfig = ReactSharedInternals.ReactCurrentBatchConfig;
    var NoTransition = 0;
    function requestCurrentTransition() {
        return ReactCurrentBatchConfig.transition;
    }
    var ReactStrictModeWarnings = {
        recordUnsafeLifecycleWarnings: function(fiber, instance) {},
        flushPendingUnsafeLifecycleWarnings: function() {},
        recordLegacyContextWarning: function(fiber, instance) {},
        flushLegacyContextWarning: function() {},
        discardPendingWarnings: function() {}
    };
    {
        var findStrictRoot = function(fiber) {
            var maybeStrictRoot = null;
            var node = fiber;
            while(node !== null){
                if (node.mode & StrictMode1) {
                    maybeStrictRoot = node;
                }
                node = node.return;
            }
            return maybeStrictRoot;
        };
        var setToSortedString = function(set) {
            var array = [];
            set.forEach(function(value) {
                array.push(value);
            });
            return array.sort().join(", ");
        };
        var pendingComponentWillMountWarnings = [];
        var pendingUNSAFE_ComponentWillMountWarnings = [];
        var pendingComponentWillReceivePropsWarnings = [];
        var pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
        var pendingComponentWillUpdateWarnings = [];
        var pendingUNSAFE_ComponentWillUpdateWarnings = [];
        var didWarnAboutUnsafeLifecycles = new Set();
        ReactStrictModeWarnings.recordUnsafeLifecycleWarnings = function(fiber, instance) {
            if (didWarnAboutUnsafeLifecycles.has(fiber.type)) {
                return;
            }
            if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
                pendingComponentWillMountWarnings.push(fiber);
            }
            if (fiber.mode & StrictMode1 && typeof instance.UNSAFE_componentWillMount === "function") {
                pendingUNSAFE_ComponentWillMountWarnings.push(fiber);
            }
            if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
                pendingComponentWillReceivePropsWarnings.push(fiber);
            }
            if (fiber.mode & StrictMode1 && typeof instance.UNSAFE_componentWillReceiveProps === "function") {
                pendingUNSAFE_ComponentWillReceivePropsWarnings.push(fiber);
            }
            if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
                pendingComponentWillUpdateWarnings.push(fiber);
            }
            if (fiber.mode & StrictMode1 && typeof instance.UNSAFE_componentWillUpdate === "function") {
                pendingUNSAFE_ComponentWillUpdateWarnings.push(fiber);
            }
        };
        ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings = function() {
            var componentWillMountUniqueNames = new Set();
            if (pendingComponentWillMountWarnings.length > 0) {
                pendingComponentWillMountWarnings.forEach(function(fiber) {
                    componentWillMountUniqueNames.add(getComponentName(fiber.type) || "Component");
                    didWarnAboutUnsafeLifecycles.add(fiber.type);
                });
                pendingComponentWillMountWarnings = [];
            }
            var UNSAFE_componentWillMountUniqueNames = new Set();
            if (pendingUNSAFE_ComponentWillMountWarnings.length > 0) {
                pendingUNSAFE_ComponentWillMountWarnings.forEach(function(fiber) {
                    UNSAFE_componentWillMountUniqueNames.add(getComponentName(fiber.type) || "Component");
                    didWarnAboutUnsafeLifecycles.add(fiber.type);
                });
                pendingUNSAFE_ComponentWillMountWarnings = [];
            }
            var componentWillReceivePropsUniqueNames = new Set();
            if (pendingComponentWillReceivePropsWarnings.length > 0) {
                pendingComponentWillReceivePropsWarnings.forEach(function(fiber) {
                    componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || "Component");
                    didWarnAboutUnsafeLifecycles.add(fiber.type);
                });
                pendingComponentWillReceivePropsWarnings = [];
            }
            var UNSAFE_componentWillReceivePropsUniqueNames = new Set();
            if (pendingUNSAFE_ComponentWillReceivePropsWarnings.length > 0) {
                pendingUNSAFE_ComponentWillReceivePropsWarnings.forEach(function(fiber) {
                    UNSAFE_componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || "Component");
                    didWarnAboutUnsafeLifecycles.add(fiber.type);
                });
                pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
            }
            var componentWillUpdateUniqueNames = new Set();
            if (pendingComponentWillUpdateWarnings.length > 0) {
                pendingComponentWillUpdateWarnings.forEach(function(fiber) {
                    componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || "Component");
                    didWarnAboutUnsafeLifecycles.add(fiber.type);
                });
                pendingComponentWillUpdateWarnings = [];
            }
            var UNSAFE_componentWillUpdateUniqueNames = new Set();
            if (pendingUNSAFE_ComponentWillUpdateWarnings.length > 0) {
                pendingUNSAFE_ComponentWillUpdateWarnings.forEach(function(fiber) {
                    UNSAFE_componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || "Component");
                    didWarnAboutUnsafeLifecycles.add(fiber.type);
                });
                pendingUNSAFE_ComponentWillUpdateWarnings = [];
            }
            if (UNSAFE_componentWillMountUniqueNames.size > 0) {
                var sortedNames = setToSortedString(UNSAFE_componentWillMountUniqueNames);
                error1("Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. " + "See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n" + "* Move code with side effects to componentDidMount, and set initial state in the constructor.\n" + "\nPlease update the following components: %s", sortedNames);
            }
            if (UNSAFE_componentWillReceivePropsUniqueNames.size > 0) {
                var _sortedNames = setToSortedString(UNSAFE_componentWillReceivePropsUniqueNames);
                error1("Using UNSAFE_componentWillReceiveProps in strict mode is not recommended " + "and may indicate bugs in your code. " + "See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n" + "* Move data fetching code or side effects to componentDidUpdate.\n" + "* If you're updating state whenever props change, " + "refactor your code to use memoization techniques or move it to " + "static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n" + "\nPlease update the following components: %s", _sortedNames);
            }
            if (UNSAFE_componentWillUpdateUniqueNames.size > 0) {
                var _sortedNames2 = setToSortedString(UNSAFE_componentWillUpdateUniqueNames);
                error1("Using UNSAFE_componentWillUpdate in strict mode is not recommended " + "and may indicate bugs in your code. " + "See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n" + "* Move data fetching code or side effects to componentDidUpdate.\n" + "\nPlease update the following components: %s", _sortedNames2);
            }
            if (componentWillMountUniqueNames.size > 0) {
                var _sortedNames3 = setToSortedString(componentWillMountUniqueNames);
                warn("componentWillMount has been renamed, and is not recommended for use. " + "See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n" + "* Move code with side effects to componentDidMount, and set initial state in the constructor.\n" + "* Rename componentWillMount to UNSAFE_componentWillMount to suppress " + "this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. " + "To rename all deprecated lifecycles to their new names, you can run " + "`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n" + "\nPlease update the following components: %s", _sortedNames3);
            }
            if (componentWillReceivePropsUniqueNames.size > 0) {
                var _sortedNames4 = setToSortedString(componentWillReceivePropsUniqueNames);
                warn("componentWillReceiveProps has been renamed, and is not recommended for use. " + "See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n" + "* Move data fetching code or side effects to componentDidUpdate.\n" + "* If you're updating state whenever props change, refactor your " + "code to use memoization techniques or move it to " + "static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n" + "* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress " + "this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. " + "To rename all deprecated lifecycles to their new names, you can run " + "`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n" + "\nPlease update the following components: %s", _sortedNames4);
            }
            if (componentWillUpdateUniqueNames.size > 0) {
                var _sortedNames5 = setToSortedString(componentWillUpdateUniqueNames);
                warn("componentWillUpdate has been renamed, and is not recommended for use. " + "See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n" + "* Move data fetching code or side effects to componentDidUpdate.\n" + "* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress " + "this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. " + "To rename all deprecated lifecycles to their new names, you can run " + "`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n" + "\nPlease update the following components: %s", _sortedNames5);
            }
        };
        var pendingLegacyContextWarning = new Map();
        var didWarnAboutLegacyContext = new Set();
        ReactStrictModeWarnings.recordLegacyContextWarning = function(fiber, instance) {
            var strictRoot = findStrictRoot(fiber);
            if (strictRoot === null) {
                error1("Expected to find a StrictMode component in a strict mode tree. " + "This error is likely caused by a bug in React. Please file an issue.");
                return;
            }
            if (didWarnAboutLegacyContext.has(fiber.type)) {
                return;
            }
            var warningsForRoot = pendingLegacyContextWarning.get(strictRoot);
            if (fiber.type.contextTypes != null || fiber.type.childContextTypes != null || instance !== null && typeof instance.getChildContext === "function") {
                if (warningsForRoot === undefined) {
                    warningsForRoot = [];
                    pendingLegacyContextWarning.set(strictRoot, warningsForRoot);
                }
                warningsForRoot.push(fiber);
            }
        };
        ReactStrictModeWarnings.flushLegacyContextWarning = function() {
            pendingLegacyContextWarning.forEach(function(fiberArray, strictRoot) {
                if (fiberArray.length === 0) {
                    return;
                }
                var firstFiber = fiberArray[0];
                var uniqueNames = new Set();
                fiberArray.forEach(function(fiber) {
                    uniqueNames.add(getComponentName(fiber.type) || "Component");
                    didWarnAboutLegacyContext.add(fiber.type);
                });
                var sortedNames = setToSortedString(uniqueNames);
                try {
                    setCurrentFiber(firstFiber);
                    error1("Legacy context API has been detected within a strict-mode tree." + "\n\nThe old API will be supported in all 16.x releases, but applications " + "using it should migrate to the new version." + "\n\nPlease update the following components: %s" + "\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context", sortedNames);
                } finally{
                    resetCurrentFiber();
                }
            });
        };
        ReactStrictModeWarnings.discardPendingWarnings = function() {
            pendingComponentWillMountWarnings = [];
            pendingUNSAFE_ComponentWillMountWarnings = [];
            pendingComponentWillReceivePropsWarnings = [];
            pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
            pendingComponentWillUpdateWarnings = [];
            pendingUNSAFE_ComponentWillUpdateWarnings = [];
            pendingLegacyContextWarning = new Map();
        };
    }
    function resolveDefaultProps(Component4, baseProps) {
        if (Component4 && Component4.defaultProps) {
            var props = _assign({}, baseProps);
            var defaultProps = Component4.defaultProps;
            for(var propName in defaultProps){
                if (props[propName] === undefined) {
                    props[propName] = defaultProps[propName];
                }
            }
            return props;
        }
        return baseProps;
    }
    var MAX_SIGNED_31_BIT_INT = 1073741823;
    var valueCursor = createCursor(null);
    var rendererSigil;
    {
        rendererSigil = {};
    }
    var currentlyRenderingFiber = null;
    var lastContextDependency = null;
    var lastContextWithAllBitsObserved = null;
    var isDisallowedContextReadInDEV = false;
    function resetContextDependencies() {
        currentlyRenderingFiber = null;
        lastContextDependency = null;
        lastContextWithAllBitsObserved = null;
        {
            isDisallowedContextReadInDEV = false;
        }
    }
    function enterDisallowedContextReadInDEV() {
        {
            isDisallowedContextReadInDEV = true;
        }
    }
    function exitDisallowedContextReadInDEV() {
        {
            isDisallowedContextReadInDEV = false;
        }
    }
    function pushProvider(providerFiber, nextValue) {
        var context = providerFiber.type._context;
        {
            push(valueCursor, context._currentValue, providerFiber);
            context._currentValue = nextValue;
            {
                if (context._currentRenderer !== undefined && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
                    error1("Detected multiple renderers concurrently rendering the " + "same context provider. This is currently unsupported.");
                }
                context._currentRenderer = rendererSigil;
            }
        }
    }
    function popProvider(providerFiber) {
        var currentValue = valueCursor.current;
        pop(valueCursor, providerFiber);
        var context = providerFiber.type._context;
        {
            context._currentValue = currentValue;
        }
    }
    function calculateChangedBits(context, newValue, oldValue) {
        if (objectIs(oldValue, newValue)) {
            return 0;
        } else {
            var changedBits = typeof context._calculateChangedBits === "function" ? context._calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
            {
                if ((changedBits & MAX_SIGNED_31_BIT_INT) !== changedBits) {
                    error1("calculateChangedBits: Expected the return value to be a " + "31-bit integer. Instead received: %s", changedBits);
                }
            }
            return changedBits | 0;
        }
    }
    function scheduleWorkOnParentPath(parent, renderLanes) {
        var node = parent;
        while(node !== null){
            var alternate = node.alternate;
            if (!isSubsetOfLanes(node.childLanes, renderLanes)) {
                node.childLanes = mergeLanes(node.childLanes, renderLanes);
                if (alternate !== null) {
                    alternate.childLanes = mergeLanes(alternate.childLanes, renderLanes);
                }
            } else if (alternate !== null && !isSubsetOfLanes(alternate.childLanes, renderLanes)) {
                alternate.childLanes = mergeLanes(alternate.childLanes, renderLanes);
            } else {
                break;
            }
            node = node.return;
        }
    }
    function propagateContextChange(workInProgress, context, changedBits, renderLanes) {
        var fiber = workInProgress.child;
        if (fiber !== null) {
            fiber.return = workInProgress;
        }
        while(fiber !== null){
            var nextFiber = void 0;
            var list = fiber.dependencies;
            if (list !== null) {
                nextFiber = fiber.child;
                var dependency = list.firstContext;
                while(dependency !== null){
                    if (dependency.context === context && (dependency.observedBits & changedBits) !== 0) {
                        if (fiber.tag === ClassComponent) {
                            var update = createUpdate(NoTimestamp, pickArbitraryLane(renderLanes));
                            update.tag = ForceUpdate;
                            enqueueUpdate(fiber, update);
                        }
                        fiber.lanes = mergeLanes(fiber.lanes, renderLanes);
                        var alternate = fiber.alternate;
                        if (alternate !== null) {
                            alternate.lanes = mergeLanes(alternate.lanes, renderLanes);
                        }
                        scheduleWorkOnParentPath(fiber.return, renderLanes);
                        list.lanes = mergeLanes(list.lanes, renderLanes);
                        break;
                    }
                    dependency = dependency.next;
                }
            } else if (fiber.tag === ContextProvider) {
                nextFiber = fiber.type === workInProgress.type ? null : fiber.child;
            } else {
                nextFiber = fiber.child;
            }
            if (nextFiber !== null) {
                nextFiber.return = fiber;
            } else {
                nextFiber = fiber;
                while(nextFiber !== null){
                    if (nextFiber === workInProgress) {
                        nextFiber = null;
                        break;
                    }
                    var sibling = nextFiber.sibling;
                    if (sibling !== null) {
                        sibling.return = nextFiber.return;
                        nextFiber = sibling;
                        break;
                    }
                    nextFiber = nextFiber.return;
                }
            }
            fiber = nextFiber;
        }
    }
    function prepareToReadContext(workInProgress, renderLanes) {
        currentlyRenderingFiber = workInProgress;
        lastContextDependency = null;
        lastContextWithAllBitsObserved = null;
        var dependencies = workInProgress.dependencies;
        if (dependencies !== null) {
            var firstContext = dependencies.firstContext;
            if (firstContext !== null) {
                if (includesSomeLane(dependencies.lanes, renderLanes)) {
                    markWorkInProgressReceivedUpdate();
                }
                dependencies.firstContext = null;
            }
        }
    }
    function readContext(context, observedBits) {
        {
            if (isDisallowedContextReadInDEV) {
                error1("Context can only be read while React is rendering. " + "In classes, you can read it in the render method or getDerivedStateFromProps. " + "In function components, you can read it directly in the function body, but not " + "inside Hooks like useReducer() or useMemo().");
            }
        }
        if (lastContextWithAllBitsObserved === context) ;
        else if (observedBits === false || observedBits === 0) ;
        else {
            var resolvedObservedBits;
            if (typeof observedBits !== "number" || observedBits === MAX_SIGNED_31_BIT_INT) {
                lastContextWithAllBitsObserved = context;
                resolvedObservedBits = MAX_SIGNED_31_BIT_INT;
            } else {
                resolvedObservedBits = observedBits;
            }
            var contextItem = {
                context: context,
                observedBits: resolvedObservedBits,
                next: null
            };
            if (lastContextDependency === null) {
                if (!(currentlyRenderingFiber !== null)) {
                    {
                        throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
                    }
                }
                lastContextDependency = contextItem;
                currentlyRenderingFiber.dependencies = {
                    lanes: NoLanes,
                    firstContext: contextItem,
                    responders: null
                };
            } else {
                lastContextDependency = lastContextDependency.next = contextItem;
            }
        }
        return context._currentValue;
    }
    var UpdateState = 0;
    var ReplaceState = 1;
    var ForceUpdate = 2;
    var CaptureUpdate = 3;
    var hasForceUpdate = false;
    var didWarnUpdateInsideUpdate;
    var currentlyProcessingQueue;
    {
        didWarnUpdateInsideUpdate = false;
        currentlyProcessingQueue = null;
    }
    function initializeUpdateQueue(fiber) {
        var queue = {
            baseState: fiber.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null
            },
            effects: null
        };
        fiber.updateQueue = queue;
    }
    function cloneUpdateQueue(current, workInProgress) {
        var queue = workInProgress.updateQueue;
        var currentQueue = current.updateQueue;
        if (queue === currentQueue) {
            var clone = {
                baseState: currentQueue.baseState,
                firstBaseUpdate: currentQueue.firstBaseUpdate,
                lastBaseUpdate: currentQueue.lastBaseUpdate,
                shared: currentQueue.shared,
                effects: currentQueue.effects
            };
            workInProgress.updateQueue = clone;
        }
    }
    function createUpdate(eventTime, lane) {
        var update = {
            eventTime: eventTime,
            lane: lane,
            tag: UpdateState,
            payload: null,
            callback: null,
            next: null
        };
        return update;
    }
    function enqueueUpdate(fiber, update) {
        var updateQueue = fiber.updateQueue;
        if (updateQueue === null) {
            return;
        }
        var sharedQueue = updateQueue.shared;
        var pending = sharedQueue.pending;
        if (pending === null) {
            update.next = update;
        } else {
            update.next = pending.next;
            pending.next = update;
        }
        sharedQueue.pending = update;
        {
            if (currentlyProcessingQueue === sharedQueue && !didWarnUpdateInsideUpdate) {
                error1("An update (setState, replaceState, or forceUpdate) was scheduled " + "from inside an update function. Update functions should be pure, " + "with zero side-effects. Consider using componentDidUpdate or a " + "callback.");
                didWarnUpdateInsideUpdate = true;
            }
        }
    }
    function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
        var queue = workInProgress.updateQueue;
        var current = workInProgress.alternate;
        if (current !== null) {
            var currentQueue = current.updateQueue;
            if (queue === currentQueue) {
                var newFirst = null;
                var newLast = null;
                var firstBaseUpdate = queue.firstBaseUpdate;
                if (firstBaseUpdate !== null) {
                    var update = firstBaseUpdate;
                    do {
                        var clone = {
                            eventTime: update.eventTime,
                            lane: update.lane,
                            tag: update.tag,
                            payload: update.payload,
                            callback: update.callback,
                            next: null
                        };
                        if (newLast === null) {
                            newFirst = newLast = clone;
                        } else {
                            newLast.next = clone;
                            newLast = clone;
                        }
                        update = update.next;
                    }while (update !== null)
                    if (newLast === null) {
                        newFirst = newLast = capturedUpdate;
                    } else {
                        newLast.next = capturedUpdate;
                        newLast = capturedUpdate;
                    }
                } else {
                    newFirst = newLast = capturedUpdate;
                }
                queue = {
                    baseState: currentQueue.baseState,
                    firstBaseUpdate: newFirst,
                    lastBaseUpdate: newLast,
                    shared: currentQueue.shared,
                    effects: currentQueue.effects
                };
                workInProgress.updateQueue = queue;
                return;
            }
        }
        var lastBaseUpdate = queue.lastBaseUpdate;
        if (lastBaseUpdate === null) {
            queue.firstBaseUpdate = capturedUpdate;
        } else {
            lastBaseUpdate.next = capturedUpdate;
        }
        queue.lastBaseUpdate = capturedUpdate;
    }
    function getStateFromUpdate(workInProgress, queue, update, prevState, nextProps, instance) {
        switch(update.tag){
            case ReplaceState:
                {
                    var payload = update.payload;
                    if (typeof payload === "function") {
                        {
                            enterDisallowedContextReadInDEV();
                        }
                        var nextState = payload.call(instance, prevState, nextProps);
                        {
                            if (workInProgress.mode & StrictMode1) {
                                disableLogs();
                                try {
                                    payload.call(instance, prevState, nextProps);
                                } finally{
                                    reenableLogs();
                                }
                            }
                            exitDisallowedContextReadInDEV();
                        }
                        return nextState;
                    }
                    return payload;
                }
            case CaptureUpdate:
                {
                    workInProgress.flags = workInProgress.flags & ~ShouldCapture | DidCapture;
                }
            case UpdateState:
                {
                    var _payload = update.payload;
                    var partialState;
                    if (typeof _payload === "function") {
                        {
                            enterDisallowedContextReadInDEV();
                        }
                        partialState = _payload.call(instance, prevState, nextProps);
                        {
                            if (workInProgress.mode & StrictMode1) {
                                disableLogs();
                                try {
                                    _payload.call(instance, prevState, nextProps);
                                } finally{
                                    reenableLogs();
                                }
                            }
                            exitDisallowedContextReadInDEV();
                        }
                    } else {
                        partialState = _payload;
                    }
                    if (partialState === null || partialState === undefined) {
                        return prevState;
                    }
                    return _assign({}, prevState, partialState);
                }
            case ForceUpdate:
                {
                    hasForceUpdate = true;
                    return prevState;
                }
        }
        return prevState;
    }
    function processUpdateQueue(workInProgress, props, instance, renderLanes) {
        var queue = workInProgress.updateQueue;
        hasForceUpdate = false;
        {
            currentlyProcessingQueue = queue.shared;
        }
        var firstBaseUpdate = queue.firstBaseUpdate;
        var lastBaseUpdate = queue.lastBaseUpdate;
        var pendingQueue = queue.shared.pending;
        if (pendingQueue !== null) {
            queue.shared.pending = null;
            var lastPendingUpdate = pendingQueue;
            var firstPendingUpdate = lastPendingUpdate.next;
            lastPendingUpdate.next = null;
            if (lastBaseUpdate === null) {
                firstBaseUpdate = firstPendingUpdate;
            } else {
                lastBaseUpdate.next = firstPendingUpdate;
            }
            lastBaseUpdate = lastPendingUpdate;
            var current = workInProgress.alternate;
            if (current !== null) {
                var currentQueue = current.updateQueue;
                var currentLastBaseUpdate = currentQueue.lastBaseUpdate;
                if (currentLastBaseUpdate !== lastBaseUpdate) {
                    if (currentLastBaseUpdate === null) {
                        currentQueue.firstBaseUpdate = firstPendingUpdate;
                    } else {
                        currentLastBaseUpdate.next = firstPendingUpdate;
                    }
                    currentQueue.lastBaseUpdate = lastPendingUpdate;
                }
            }
        }
        if (firstBaseUpdate !== null) {
            var newState = queue.baseState;
            var newLanes = NoLanes;
            var newBaseState = null;
            var newFirstBaseUpdate = null;
            var newLastBaseUpdate = null;
            var update = firstBaseUpdate;
            do {
                var updateLane = update.lane;
                var updateEventTime = update.eventTime;
                if (!isSubsetOfLanes(renderLanes, updateLane)) {
                    var clone = {
                        eventTime: updateEventTime,
                        lane: updateLane,
                        tag: update.tag,
                        payload: update.payload,
                        callback: update.callback,
                        next: null
                    };
                    if (newLastBaseUpdate === null) {
                        newFirstBaseUpdate = newLastBaseUpdate = clone;
                        newBaseState = newState;
                    } else {
                        newLastBaseUpdate = newLastBaseUpdate.next = clone;
                    }
                    newLanes = mergeLanes(newLanes, updateLane);
                } else {
                    if (newLastBaseUpdate !== null) {
                        var _clone = {
                            eventTime: updateEventTime,
                            lane: NoLane,
                            tag: update.tag,
                            payload: update.payload,
                            callback: update.callback,
                            next: null
                        };
                        newLastBaseUpdate = newLastBaseUpdate.next = _clone;
                    }
                    newState = getStateFromUpdate(workInProgress, queue, update, newState, props, instance);
                    var callback = update.callback;
                    if (callback !== null) {
                        workInProgress.flags |= Callback;
                        var effects = queue.effects;
                        if (effects === null) {
                            queue.effects = [
                                update
                            ];
                        } else {
                            effects.push(update);
                        }
                    }
                }
                update = update.next;
                if (update === null) {
                    pendingQueue = queue.shared.pending;
                    if (pendingQueue === null) {
                        break;
                    } else {
                        var _lastPendingUpdate = pendingQueue;
                        var _firstPendingUpdate = _lastPendingUpdate.next;
                        _lastPendingUpdate.next = null;
                        update = _firstPendingUpdate;
                        queue.lastBaseUpdate = _lastPendingUpdate;
                        queue.shared.pending = null;
                    }
                }
            }while (true)
            if (newLastBaseUpdate === null) {
                newBaseState = newState;
            }
            queue.baseState = newBaseState;
            queue.firstBaseUpdate = newFirstBaseUpdate;
            queue.lastBaseUpdate = newLastBaseUpdate;
            markSkippedUpdateLanes(newLanes);
            workInProgress.lanes = newLanes;
            workInProgress.memoizedState = newState;
        }
        {
            currentlyProcessingQueue = null;
        }
    }
    function callCallback1(callback, context) {
        if (!(typeof callback === "function")) {
            {
                throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + callback);
            }
        }
        callback.call(context);
    }
    function resetHasForceUpdateBeforeProcessing() {
        hasForceUpdate = false;
    }
    function checkHasForceUpdateAfterProcessing() {
        return hasForceUpdate;
    }
    function commitUpdateQueue(finishedWork, finishedQueue, instance) {
        var effects = finishedQueue.effects;
        finishedQueue.effects = null;
        if (effects !== null) {
            for(var i = 0; i < effects.length; i++){
                var effect = effects[i];
                var callback = effect.callback;
                if (callback !== null) {
                    effect.callback = null;
                    callCallback1(callback, instance);
                }
            }
        }
    }
    var fakeInternalInstance = {};
    var isArray1 = Array.isArray;
    var emptyRefsObject = new React.Component().refs;
    var didWarnAboutStateAssignmentForComponent;
    var didWarnAboutUninitializedState;
    var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
    var didWarnAboutLegacyLifecyclesAndDerivedState;
    var didWarnAboutUndefinedDerivedState;
    var warnOnUndefinedDerivedState;
    var warnOnInvalidCallback;
    var didWarnAboutDirectlyAssigningPropsToState;
    var didWarnAboutContextTypeAndContextTypes;
    var didWarnAboutInvalidateContextType;
    {
        didWarnAboutStateAssignmentForComponent = new Set();
        didWarnAboutUninitializedState = new Set();
        didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
        didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
        didWarnAboutDirectlyAssigningPropsToState = new Set();
        didWarnAboutUndefinedDerivedState = new Set();
        didWarnAboutContextTypeAndContextTypes = new Set();
        didWarnAboutInvalidateContextType = new Set();
        var didWarnOnInvalidCallback = new Set();
        warnOnInvalidCallback = function(callback, callerName) {
            if (callback === null || typeof callback === "function") {
                return;
            }
            var key = callerName + "_" + callback;
            if (!didWarnOnInvalidCallback.has(key)) {
                didWarnOnInvalidCallback.add(key);
                error1("%s(...): Expected the last optional `callback` argument to be a " + "function. Instead received: %s.", callerName, callback);
            }
        };
        warnOnUndefinedDerivedState = function(type, partialState) {
            if (partialState === undefined) {
                var componentName = getComponentName(type) || "Component";
                if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
                    didWarnAboutUndefinedDerivedState.add(componentName);
                    error1("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. " + "You have returned undefined.", componentName);
                }
            }
        };
        Object.defineProperty(fakeInternalInstance, "_processChildContext", {
            enumerable: false,
            value: function() {
                {
                    {
                        throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
                    }
                }
            }
        });
        Object.freeze(fakeInternalInstance);
    }
    function applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, nextProps) {
        var prevState = workInProgress.memoizedState;
        {
            if (workInProgress.mode & StrictMode1) {
                disableLogs();
                try {
                    getDerivedStateFromProps(nextProps, prevState);
                } finally{
                    reenableLogs();
                }
            }
        }
        var partialState = getDerivedStateFromProps(nextProps, prevState);
        {
            warnOnUndefinedDerivedState(ctor, partialState);
        }
        var memoizedState = partialState === null || partialState === undefined ? prevState : _assign({}, prevState, partialState);
        workInProgress.memoizedState = memoizedState;
        if (workInProgress.lanes === NoLanes) {
            var updateQueue = workInProgress.updateQueue;
            updateQueue.baseState = memoizedState;
        }
    }
    var classComponentUpdater = {
        isMounted: isMounted,
        enqueueSetState: function(inst, payload, callback) {
            var fiber = get1(inst);
            var eventTime = requestEventTime();
            var lane = requestUpdateLane(fiber);
            var update = createUpdate(eventTime, lane);
            update.payload = payload;
            if (callback !== undefined && callback !== null) {
                {
                    warnOnInvalidCallback(callback, "setState");
                }
                update.callback = callback;
            }
            enqueueUpdate(fiber, update);
            scheduleUpdateOnFiber(fiber, lane, eventTime);
        },
        enqueueReplaceState: function(inst, payload, callback) {
            var fiber = get1(inst);
            var eventTime = requestEventTime();
            var lane = requestUpdateLane(fiber);
            var update = createUpdate(eventTime, lane);
            update.tag = ReplaceState;
            update.payload = payload;
            if (callback !== undefined && callback !== null) {
                {
                    warnOnInvalidCallback(callback, "replaceState");
                }
                update.callback = callback;
            }
            enqueueUpdate(fiber, update);
            scheduleUpdateOnFiber(fiber, lane, eventTime);
        },
        enqueueForceUpdate: function(inst, callback) {
            var fiber = get1(inst);
            var eventTime = requestEventTime();
            var lane = requestUpdateLane(fiber);
            var update = createUpdate(eventTime, lane);
            update.tag = ForceUpdate;
            if (callback !== undefined && callback !== null) {
                {
                    warnOnInvalidCallback(callback, "forceUpdate");
                }
                update.callback = callback;
            }
            enqueueUpdate(fiber, update);
            scheduleUpdateOnFiber(fiber, lane, eventTime);
        }
    };
    function checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext) {
        var instance = workInProgress.stateNode;
        if (typeof instance.shouldComponentUpdate === "function") {
            {
                if (workInProgress.mode & StrictMode1) {
                    disableLogs();
                    try {
                        instance.shouldComponentUpdate(newProps, newState, nextContext);
                    } finally{
                        reenableLogs();
                    }
                }
            }
            var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, nextContext);
            {
                if (shouldUpdate === undefined) {
                    error1("%s.shouldComponentUpdate(): Returned undefined instead of a " + "boolean value. Make sure to return true or false.", getComponentName(ctor) || "Component");
                }
            }
            return shouldUpdate;
        }
        if (ctor.prototype && ctor.prototype.isPureReactComponent) {
            return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
        }
        return true;
    }
    function checkClassInstance(workInProgress, ctor, newProps) {
        var instance = workInProgress.stateNode;
        {
            var name = getComponentName(ctor) || "Component";
            var renderPresent = instance.render;
            if (!renderPresent) {
                if (ctor.prototype && typeof ctor.prototype.render === "function") {
                    error1("%s(...): No `render` method found on the returned component " + "instance: did you accidentally return an object from the constructor?", name);
                } else {
                    error1("%s(...): No `render` method found on the returned component " + "instance: you may have forgotten to define `render`.", name);
                }
            }
            if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
                error1("getInitialState was defined on %s, a plain JavaScript class. " + "This is only supported for classes created using React.createClass. " + "Did you mean to define a state property instead?", name);
            }
            if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
                error1("getDefaultProps was defined on %s, a plain JavaScript class. " + "This is only supported for classes created using React.createClass. " + "Use a static property to define defaultProps instead.", name);
            }
            if (instance.propTypes) {
                error1("propTypes was defined as an instance property on %s. Use a static " + "property to define propTypes instead.", name);
            }
            if (instance.contextType) {
                error1("contextType was defined as an instance property on %s. Use a static " + "property to define contextType instead.", name);
            }
            {
                if (instance.contextTypes) {
                    error1("contextTypes was defined as an instance property on %s. Use a static " + "property to define contextTypes instead.", name);
                }
                if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
                    didWarnAboutContextTypeAndContextTypes.add(ctor);
                    error1("%s declares both contextTypes and contextType static properties. " + "The legacy contextTypes property will be ignored.", name);
                }
            }
            if (typeof instance.componentShouldUpdate === "function") {
                error1("%s has a method called " + "componentShouldUpdate(). Did you mean shouldComponentUpdate()? " + "The name is phrased as a question because the function is " + "expected to return a value.", name);
            }
            if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined") {
                error1("%s has a method called shouldComponentUpdate(). " + "shouldComponentUpdate should not be used when extending React.PureComponent. " + "Please extend React.Component if shouldComponentUpdate is used.", getComponentName(ctor) || "A pure component");
            }
            if (typeof instance.componentDidUnmount === "function") {
                error1("%s has a method called " + "componentDidUnmount(). But there is no such lifecycle method. " + "Did you mean componentWillUnmount()?", name);
            }
            if (typeof instance.componentDidReceiveProps === "function") {
                error1("%s has a method called " + "componentDidReceiveProps(). But there is no such lifecycle method. " + "If you meant to update the state in response to changing props, " + "use componentWillReceiveProps(). If you meant to fetch data or " + "run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
            }
            if (typeof instance.componentWillRecieveProps === "function") {
                error1("%s has a method called " + "componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
            }
            if (typeof instance.UNSAFE_componentWillRecieveProps === "function") {
                error1("%s has a method called " + "UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
            }
            var hasMutatedProps = instance.props !== newProps;
            if (instance.props !== undefined && hasMutatedProps) {
                error1("%s(...): When calling super() in `%s`, make sure to pass " + "up the same props that your component's constructor was passed.", name, name);
            }
            if (instance.defaultProps) {
                error1("Setting defaultProps as an instance property on %s is not supported and will be ignored." + " Instead, define defaultProps as a static property on %s.", name, name);
            }
            if (typeof instance.getSnapshotBeforeUpdate === "function" && typeof instance.componentDidUpdate !== "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
                didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
                error1("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). " + "This component defines getSnapshotBeforeUpdate() only.", getComponentName(ctor));
            }
            if (typeof instance.getDerivedStateFromProps === "function") {
                error1("%s: getDerivedStateFromProps() is defined as an instance method " + "and will be ignored. Instead, declare it as a static method.", name);
            }
            if (typeof instance.getDerivedStateFromError === "function") {
                error1("%s: getDerivedStateFromError() is defined as an instance method " + "and will be ignored. Instead, declare it as a static method.", name);
            }
            if (typeof ctor.getSnapshotBeforeUpdate === "function") {
                error1("%s: getSnapshotBeforeUpdate() is defined as a static method " + "and will be ignored. Instead, declare it as an instance method.", name);
            }
            var _state = instance.state;
            if (_state && (typeof _state !== "object" || isArray1(_state))) {
                error1("%s.state: must be set to an object or null", name);
            }
            if (typeof instance.getChildContext === "function" && typeof ctor.childContextTypes !== "object") {
                error1("%s.getChildContext(): childContextTypes must be defined in order to " + "use getChildContext().", name);
            }
        }
    }
    function adoptClassInstance(workInProgress, instance) {
        instance.updater = classComponentUpdater;
        workInProgress.stateNode = instance;
        set1(instance, workInProgress);
        {
            instance._reactInternalInstance = fakeInternalInstance;
        }
    }
    function constructClassInstance(workInProgress, ctor, props) {
        var isLegacyContextConsumer = false;
        var unmaskedContext = emptyContextObject;
        var context = emptyContextObject;
        var contextType = ctor.contextType;
        {
            if ("contextType" in ctor) {
                var isValid = contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined;
                if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
                    didWarnAboutInvalidateContextType.add(ctor);
                    var addendum = "";
                    if (contextType === undefined) {
                        addendum = " However, it is set to undefined. " + "This can be caused by a typo or by mixing up named and default imports. " + "This can also happen due to a circular dependency, so " + "try moving the createContext() call to a separate file.";
                    } else if (typeof contextType !== "object") {
                        addendum = " However, it is set to a " + typeof contextType + ".";
                    } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                        addendum = " Did you accidentally pass the Context.Provider instead?";
                    } else if (contextType._context !== undefined) {
                        addendum = " Did you accidentally pass the Context.Consumer instead?";
                    } else {
                        addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
                    }
                    error1("%s defines an invalid contextType. " + "contextType should point to the Context object returned by React.createContext().%s", getComponentName(ctor) || "Component", addendum);
                }
            }
        }
        if (typeof contextType === "object" && contextType !== null) {
            context = readContext(contextType);
        } else {
            unmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
            var contextTypes = ctor.contextTypes;
            isLegacyContextConsumer = contextTypes !== null && contextTypes !== undefined;
            context = isLegacyContextConsumer ? getMaskedContext(workInProgress, unmaskedContext) : emptyContextObject;
        }
        {
            if (workInProgress.mode & StrictMode1) {
                disableLogs();
                try {
                    new ctor(props, context);
                } finally{
                    reenableLogs();
                }
            }
        }
        var instance = new ctor(props, context);
        var state = workInProgress.memoizedState = instance.state !== null && instance.state !== undefined ? instance.state : null;
        adoptClassInstance(workInProgress, instance);
        {
            if (typeof ctor.getDerivedStateFromProps === "function" && state === null) {
                var componentName = getComponentName(ctor) || "Component";
                if (!didWarnAboutUninitializedState.has(componentName)) {
                    didWarnAboutUninitializedState.add(componentName);
                    error1("`%s` uses `getDerivedStateFromProps` but its initial state is " + "%s. This is not recommended. Instead, define the initial state by " + "assigning an object to `this.state` in the constructor of `%s`. " + "This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName);
                }
            }
            if (typeof ctor.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
                var foundWillMountName = null;
                var foundWillReceivePropsName = null;
                var foundWillUpdateName = null;
                if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
                    foundWillMountName = "componentWillMount";
                } else if (typeof instance.UNSAFE_componentWillMount === "function") {
                    foundWillMountName = "UNSAFE_componentWillMount";
                }
                if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
                    foundWillReceivePropsName = "componentWillReceiveProps";
                } else if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
                    foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
                }
                if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
                    foundWillUpdateName = "componentWillUpdate";
                } else if (typeof instance.UNSAFE_componentWillUpdate === "function") {
                    foundWillUpdateName = "UNSAFE_componentWillUpdate";
                }
                if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
                    var _componentName = getComponentName(ctor) || "Component";
                    var newApiName = typeof ctor.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                    if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                        didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
                        error1("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + "%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n" + "The above lifecycles should be removed. Learn more about this warning here:\n" + "https://reactjs.org/link/unsafe-component-lifecycles", _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : "", foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "", foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "");
                    }
                }
            }
        }
        if (isLegacyContextConsumer) {
            cacheContext(workInProgress, unmaskedContext, context);
        }
        return instance;
    }
    function callComponentWillMount(workInProgress, instance) {
        var oldState = instance.state;
        if (typeof instance.componentWillMount === "function") {
            instance.componentWillMount();
        }
        if (typeof instance.UNSAFE_componentWillMount === "function") {
            instance.UNSAFE_componentWillMount();
        }
        if (oldState !== instance.state) {
            {
                error1("%s.componentWillMount(): Assigning directly to this.state is " + "deprecated (except inside a component's " + "constructor). Use setState instead.", getComponentName(workInProgress.type) || "Component");
            }
            classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
        }
    }
    function callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext) {
        var oldState = instance.state;
        if (typeof instance.componentWillReceiveProps === "function") {
            instance.componentWillReceiveProps(newProps, nextContext);
        }
        if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
            instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
        }
        if (instance.state !== oldState) {
            {
                var componentName = getComponentName(workInProgress.type) || "Component";
                if (!didWarnAboutStateAssignmentForComponent.has(componentName)) {
                    didWarnAboutStateAssignmentForComponent.add(componentName);
                    error1("%s.componentWillReceiveProps(): Assigning directly to " + "this.state is deprecated (except inside a component's " + "constructor). Use setState instead.", componentName);
                }
            }
            classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
        }
    }
    function mountClassInstance(workInProgress, ctor, newProps, renderLanes) {
        {
            checkClassInstance(workInProgress, ctor, newProps);
        }
        var instance = workInProgress.stateNode;
        instance.props = newProps;
        instance.state = workInProgress.memoizedState;
        instance.refs = emptyRefsObject;
        initializeUpdateQueue(workInProgress);
        var contextType = ctor.contextType;
        if (typeof contextType === "object" && contextType !== null) {
            instance.context = readContext(contextType);
        } else {
            var unmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
            instance.context = getMaskedContext(workInProgress, unmaskedContext);
        }
        {
            if (instance.state === newProps) {
                var componentName = getComponentName(ctor) || "Component";
                if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
                    didWarnAboutDirectlyAssigningPropsToState.add(componentName);
                    error1("%s: It is not recommended to assign props directly to state " + "because updates to props won't be reflected in state. " + "In most cases, it is better to use props directly.", componentName);
                }
            }
            if (workInProgress.mode & StrictMode1) {
                ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, instance);
            }
            {
                ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress, instance);
            }
        }
        processUpdateQueue(workInProgress, newProps, instance, renderLanes);
        instance.state = workInProgress.memoizedState;
        var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
        if (typeof getDerivedStateFromProps === "function") {
            applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
            instance.state = workInProgress.memoizedState;
        }
        if (typeof ctor.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
            callComponentWillMount(workInProgress, instance);
            processUpdateQueue(workInProgress, newProps, instance, renderLanes);
            instance.state = workInProgress.memoizedState;
        }
        if (typeof instance.componentDidMount === "function") {
            workInProgress.flags |= Update;
        }
    }
    function resumeMountClassInstance(workInProgress, ctor, newProps, renderLanes) {
        var instance = workInProgress.stateNode;
        var oldProps = workInProgress.memoizedProps;
        instance.props = oldProps;
        var oldContext = instance.context;
        var contextType = ctor.contextType;
        var nextContext = emptyContextObject;
        if (typeof contextType === "object" && contextType !== null) {
            nextContext = readContext(contextType);
        } else {
            var nextLegacyUnmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
            nextContext = getMaskedContext(workInProgress, nextLegacyUnmaskedContext);
        }
        var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
        var hasNewLifecycles = typeof getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function";
        if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === "function" || typeof instance.componentWillReceiveProps === "function")) {
            if (oldProps !== newProps || oldContext !== nextContext) {
                callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext);
            }
        }
        resetHasForceUpdateBeforeProcessing();
        var oldState = workInProgress.memoizedState;
        var newState = instance.state = oldState;
        processUpdateQueue(workInProgress, newProps, instance, renderLanes);
        newState = workInProgress.memoizedState;
        if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
            if (typeof instance.componentDidMount === "function") {
                workInProgress.flags |= Update;
            }
            return false;
        }
        if (typeof getDerivedStateFromProps === "function") {
            applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
            newState = workInProgress.memoizedState;
        }
        var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext);
        if (shouldUpdate) {
            if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
                if (typeof instance.componentWillMount === "function") {
                    instance.componentWillMount();
                }
                if (typeof instance.UNSAFE_componentWillMount === "function") {
                    instance.UNSAFE_componentWillMount();
                }
            }
            if (typeof instance.componentDidMount === "function") {
                workInProgress.flags |= Update;
            }
        } else {
            if (typeof instance.componentDidMount === "function") {
                workInProgress.flags |= Update;
            }
            workInProgress.memoizedProps = newProps;
            workInProgress.memoizedState = newState;
        }
        instance.props = newProps;
        instance.state = newState;
        instance.context = nextContext;
        return shouldUpdate;
    }
    function updateClassInstance(current, workInProgress, ctor, newProps, renderLanes) {
        var instance = workInProgress.stateNode;
        cloneUpdateQueue(current, workInProgress);
        var unresolvedOldProps = workInProgress.memoizedProps;
        var oldProps = workInProgress.type === workInProgress.elementType ? unresolvedOldProps : resolveDefaultProps(workInProgress.type, unresolvedOldProps);
        instance.props = oldProps;
        var unresolvedNewProps = workInProgress.pendingProps;
        var oldContext = instance.context;
        var contextType = ctor.contextType;
        var nextContext = emptyContextObject;
        if (typeof contextType === "object" && contextType !== null) {
            nextContext = readContext(contextType);
        } else {
            var nextUnmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
            nextContext = getMaskedContext(workInProgress, nextUnmaskedContext);
        }
        var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
        var hasNewLifecycles = typeof getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function";
        if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === "function" || typeof instance.componentWillReceiveProps === "function")) {
            if (unresolvedOldProps !== unresolvedNewProps || oldContext !== nextContext) {
                callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext);
            }
        }
        resetHasForceUpdateBeforeProcessing();
        var oldState = workInProgress.memoizedState;
        var newState = instance.state = oldState;
        processUpdateQueue(workInProgress, newProps, instance, renderLanes);
        newState = workInProgress.memoizedState;
        if (unresolvedOldProps === unresolvedNewProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
            if (typeof instance.componentDidUpdate === "function") {
                if (unresolvedOldProps !== current.memoizedProps || oldState !== current.memoizedState) {
                    workInProgress.flags |= Update;
                }
            }
            if (typeof instance.getSnapshotBeforeUpdate === "function") {
                if (unresolvedOldProps !== current.memoizedProps || oldState !== current.memoizedState) {
                    workInProgress.flags |= Snapshot;
                }
            }
            return false;
        }
        if (typeof getDerivedStateFromProps === "function") {
            applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
            newState = workInProgress.memoizedState;
        }
        var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext);
        if (shouldUpdate) {
            if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillUpdate === "function" || typeof instance.componentWillUpdate === "function")) {
                if (typeof instance.componentWillUpdate === "function") {
                    instance.componentWillUpdate(newProps, newState, nextContext);
                }
                if (typeof instance.UNSAFE_componentWillUpdate === "function") {
                    instance.UNSAFE_componentWillUpdate(newProps, newState, nextContext);
                }
            }
            if (typeof instance.componentDidUpdate === "function") {
                workInProgress.flags |= Update;
            }
            if (typeof instance.getSnapshotBeforeUpdate === "function") {
                workInProgress.flags |= Snapshot;
            }
        } else {
            if (typeof instance.componentDidUpdate === "function") {
                if (unresolvedOldProps !== current.memoizedProps || oldState !== current.memoizedState) {
                    workInProgress.flags |= Update;
                }
            }
            if (typeof instance.getSnapshotBeforeUpdate === "function") {
                if (unresolvedOldProps !== current.memoizedProps || oldState !== current.memoizedState) {
                    workInProgress.flags |= Snapshot;
                }
            }
            workInProgress.memoizedProps = newProps;
            workInProgress.memoizedState = newState;
        }
        instance.props = newProps;
        instance.state = newState;
        instance.context = nextContext;
        return shouldUpdate;
    }
    var didWarnAboutMaps;
    var didWarnAboutGenerators;
    var didWarnAboutStringRefs;
    var ownerHasKeyUseWarning;
    var ownerHasFunctionTypeWarning;
    var warnForMissingKey = function(child, returnFiber) {};
    {
        didWarnAboutMaps = false;
        didWarnAboutGenerators = false;
        didWarnAboutStringRefs = {};
        ownerHasKeyUseWarning = {};
        ownerHasFunctionTypeWarning = {};
        warnForMissingKey = function(child, returnFiber) {
            if (child === null || typeof child !== "object") {
                return;
            }
            if (!child._store || child._store.validated || child.key != null) {
                return;
            }
            if (!(typeof child._store === "object")) {
                {
                    throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
                }
            }
            child._store.validated = true;
            var componentName = getComponentName(returnFiber.type) || "Component";
            if (ownerHasKeyUseWarning[componentName]) {
                return;
            }
            ownerHasKeyUseWarning[componentName] = true;
            error1("Each child in a list should have a unique " + "\"key\" prop. See https://reactjs.org/link/warning-keys for " + "more information.");
        };
    }
    var isArray$1 = Array.isArray;
    function coerceRef(returnFiber, current, element) {
        var mixedRef = element.ref;
        if (mixedRef !== null && typeof mixedRef !== "function" && typeof mixedRef !== "object") {
            {
                if ((returnFiber.mode & StrictMode1 || warnAboutStringRefs) && !(element._owner && element._self && element._owner.stateNode !== element._self)) {
                    var componentName = getComponentName(returnFiber.type) || "Component";
                    if (!didWarnAboutStringRefs[componentName]) {
                        {
                            error1("A string ref, \"%s\", has been found within a strict mode tree. " + "String refs are a source of potential bugs and should be avoided. " + "We recommend using useRef() or createRef() instead. " + "Learn more about using refs safely here: " + "https://reactjs.org/link/strict-mode-string-ref", mixedRef);
                        }
                        didWarnAboutStringRefs[componentName] = true;
                    }
                }
            }
            if (element._owner) {
                var owner = element._owner;
                var inst;
                if (owner) {
                    var ownerFiber = owner;
                    if (!(ownerFiber.tag === ClassComponent)) {
                        {
                            throw Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
                        }
                    }
                    inst = ownerFiber.stateNode;
                }
                if (!inst) {
                    {
                        throw Error("Missing owner for string ref " + mixedRef + ". This error is likely caused by a bug in React. Please file an issue.");
                    }
                }
                var stringRef = "" + mixedRef;
                if (current !== null && current.ref !== null && typeof current.ref === "function" && current.ref._stringRef === stringRef) {
                    return current.ref;
                }
                var ref = function(value) {
                    var refs = inst.refs;
                    if (refs === emptyRefsObject) {
                        refs = inst.refs = {};
                    }
                    if (value === null) {
                        delete refs[stringRef];
                    } else {
                        refs[stringRef] = value;
                    }
                };
                ref._stringRef = stringRef;
                return ref;
            } else {
                if (!(typeof mixedRef === "string")) {
                    {
                        throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
                    }
                }
                if (!element._owner) {
                    {
                        throw Error("Element ref was specified as a string (" + mixedRef + ") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://reactjs.org/link/refs-must-have-owner for more information.");
                    }
                }
            }
        }
        return mixedRef;
    }
    function throwOnInvalidObjectType(returnFiber, newChild) {
        if (returnFiber.type !== "textarea") {
            {
                {
                    throw Error("Objects are not valid as a React child (found: " + (Object.prototype.toString.call(newChild) === "[object Object]" ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : newChild) + "). If you meant to render a collection of children, use an array instead.");
                }
            }
        }
    }
    function warnOnFunctionType(returnFiber) {
        {
            var componentName = getComponentName(returnFiber.type) || "Component";
            if (ownerHasFunctionTypeWarning[componentName]) {
                return;
            }
            ownerHasFunctionTypeWarning[componentName] = true;
            error1("Functions are not valid as a React child. This may happen if " + "you return a Component instead of <Component /> from render. " + "Or maybe you meant to call this function rather than return it.");
        }
    }
    function ChildReconciler(shouldTrackSideEffects) {
        function deleteChild(returnFiber, childToDelete) {
            if (!shouldTrackSideEffects) {
                return;
            }
            var last = returnFiber.lastEffect;
            if (last !== null) {
                last.nextEffect = childToDelete;
                returnFiber.lastEffect = childToDelete;
            } else {
                returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
            }
            childToDelete.nextEffect = null;
            childToDelete.flags = Deletion;
        }
        function deleteRemainingChildren(returnFiber, currentFirstChild) {
            if (!shouldTrackSideEffects) {
                return null;
            }
            var childToDelete = currentFirstChild;
            while(childToDelete !== null){
                deleteChild(returnFiber, childToDelete);
                childToDelete = childToDelete.sibling;
            }
            return null;
        }
        function mapRemainingChildren(returnFiber, currentFirstChild) {
            var existingChildren = new Map();
            var existingChild = currentFirstChild;
            while(existingChild !== null){
                if (existingChild.key !== null) {
                    existingChildren.set(existingChild.key, existingChild);
                } else {
                    existingChildren.set(existingChild.index, existingChild);
                }
                existingChild = existingChild.sibling;
            }
            return existingChildren;
        }
        function useFiber(fiber, pendingProps) {
            var clone = createWorkInProgress(fiber, pendingProps);
            clone.index = 0;
            clone.sibling = null;
            return clone;
        }
        function placeChild(newFiber, lastPlacedIndex, newIndex) {
            newFiber.index = newIndex;
            if (!shouldTrackSideEffects) {
                return lastPlacedIndex;
            }
            var current = newFiber.alternate;
            if (current !== null) {
                var oldIndex = current.index;
                if (oldIndex < lastPlacedIndex) {
                    newFiber.flags = Placement;
                    return lastPlacedIndex;
                } else {
                    return oldIndex;
                }
            } else {
                newFiber.flags = Placement;
                return lastPlacedIndex;
            }
        }
        function placeSingleChild(newFiber) {
            if (shouldTrackSideEffects && newFiber.alternate === null) {
                newFiber.flags = Placement;
            }
            return newFiber;
        }
        function updateTextNode(returnFiber, current, textContent, lanes) {
            if (current === null || current.tag !== HostText) {
                var created = createFiberFromText(textContent, returnFiber.mode, lanes);
                created.return = returnFiber;
                return created;
            } else {
                var existing = useFiber(current, textContent);
                existing.return = returnFiber;
                return existing;
            }
        }
        function updateElement(returnFiber, current, element, lanes) {
            if (current !== null) {
                if (current.elementType === element.type || isCompatibleFamilyForHotReloading(current, element)) {
                    var existing = useFiber(current, element.props);
                    existing.ref = coerceRef(returnFiber, current, element);
                    existing.return = returnFiber;
                    {
                        existing._debugSource = element._source;
                        existing._debugOwner = element._owner;
                    }
                    return existing;
                }
            }
            var created = createFiberFromElement(element, returnFiber.mode, lanes);
            created.ref = coerceRef(returnFiber, current, element);
            created.return = returnFiber;
            return created;
        }
        function updatePortal(returnFiber, current, portal, lanes) {
            if (current === null || current.tag !== HostPortal || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation) {
                var created = createFiberFromPortal(portal, returnFiber.mode, lanes);
                created.return = returnFiber;
                return created;
            } else {
                var existing = useFiber(current, portal.children || []);
                existing.return = returnFiber;
                return existing;
            }
        }
        function updateFragment(returnFiber, current, fragment, lanes, key) {
            if (current === null || current.tag !== Fragment1) {
                var created = createFiberFromFragment(fragment, returnFiber.mode, lanes, key);
                created.return = returnFiber;
                return created;
            } else {
                var existing = useFiber(current, fragment);
                existing.return = returnFiber;
                return existing;
            }
        }
        function createChild(returnFiber, newChild, lanes) {
            if (typeof newChild === "string" || typeof newChild === "number") {
                var created = createFiberFromText("" + newChild, returnFiber.mode, lanes);
                created.return = returnFiber;
                return created;
            }
            if (typeof newChild === "object" && newChild !== null) {
                switch(newChild.$$typeof){
                    case REACT_ELEMENT_TYPE:
                        {
                            var _created = createFiberFromElement(newChild, returnFiber.mode, lanes);
                            _created.ref = coerceRef(returnFiber, null, newChild);
                            _created.return = returnFiber;
                            return _created;
                        }
                    case REACT_PORTAL_TYPE:
                        {
                            var _created2 = createFiberFromPortal(newChild, returnFiber.mode, lanes);
                            _created2.return = returnFiber;
                            return _created2;
                        }
                }
                if (isArray$1(newChild) || getIteratorFn(newChild)) {
                    var _created3 = createFiberFromFragment(newChild, returnFiber.mode, lanes, null);
                    _created3.return = returnFiber;
                    return _created3;
                }
                throwOnInvalidObjectType(returnFiber, newChild);
            }
            {
                if (typeof newChild === "function") {
                    warnOnFunctionType(returnFiber);
                }
            }
            return null;
        }
        function updateSlot(returnFiber, oldFiber, newChild, lanes) {
            var key = oldFiber !== null ? oldFiber.key : null;
            if (typeof newChild === "string" || typeof newChild === "number") {
                if (key !== null) {
                    return null;
                }
                return updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
            }
            if (typeof newChild === "object" && newChild !== null) {
                switch(newChild.$$typeof){
                    case REACT_ELEMENT_TYPE:
                        {
                            if (newChild.key === key) {
                                if (newChild.type === REACT_FRAGMENT_TYPE) {
                                    return updateFragment(returnFiber, oldFiber, newChild.props.children, lanes, key);
                                }
                                return updateElement(returnFiber, oldFiber, newChild, lanes);
                            } else {
                                return null;
                            }
                        }
                    case REACT_PORTAL_TYPE:
                        {
                            if (newChild.key === key) {
                                return updatePortal(returnFiber, oldFiber, newChild, lanes);
                            } else {
                                return null;
                            }
                        }
                }
                if (isArray$1(newChild) || getIteratorFn(newChild)) {
                    if (key !== null) {
                        return null;
                    }
                    return updateFragment(returnFiber, oldFiber, newChild, lanes, null);
                }
                throwOnInvalidObjectType(returnFiber, newChild);
            }
            {
                if (typeof newChild === "function") {
                    warnOnFunctionType(returnFiber);
                }
            }
            return null;
        }
        function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
            if (typeof newChild === "string" || typeof newChild === "number") {
                var matchedFiber = existingChildren.get(newIdx) || null;
                return updateTextNode(returnFiber, matchedFiber, "" + newChild, lanes);
            }
            if (typeof newChild === "object" && newChild !== null) {
                switch(newChild.$$typeof){
                    case REACT_ELEMENT_TYPE:
                        {
                            var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
                            if (newChild.type === REACT_FRAGMENT_TYPE) {
                                return updateFragment(returnFiber, _matchedFiber, newChild.props.children, lanes, newChild.key);
                            }
                            return updateElement(returnFiber, _matchedFiber, newChild, lanes);
                        }
                    case REACT_PORTAL_TYPE:
                        {
                            var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
                            return updatePortal(returnFiber, _matchedFiber2, newChild, lanes);
                        }
                }
                if (isArray$1(newChild) || getIteratorFn(newChild)) {
                    var _matchedFiber3 = existingChildren.get(newIdx) || null;
                    return updateFragment(returnFiber, _matchedFiber3, newChild, lanes, null);
                }
                throwOnInvalidObjectType(returnFiber, newChild);
            }
            {
                if (typeof newChild === "function") {
                    warnOnFunctionType(returnFiber);
                }
            }
            return null;
        }
        function warnOnInvalidKey(child, knownKeys, returnFiber) {
            {
                if (typeof child !== "object" || child === null) {
                    return knownKeys;
                }
                switch(child.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        warnForMissingKey(child, returnFiber);
                        var key = child.key;
                        if (typeof key !== "string") {
                            break;
                        }
                        if (knownKeys === null) {
                            knownKeys = new Set();
                            knownKeys.add(key);
                            break;
                        }
                        if (!knownKeys.has(key)) {
                            knownKeys.add(key);
                            break;
                        }
                        error1("Encountered two children with the same key, `%s`. " + "Keys should be unique so that components maintain their identity " + "across updates. Non-unique keys may cause children to be " + "duplicated and/or omitted \u2014 the behavior is unsupported and " + "could change in a future version.", key);
                        break;
                }
            }
            return knownKeys;
        }
        function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
            {
                var knownKeys = null;
                for(var i = 0; i < newChildren.length; i++){
                    var child = newChildren[i];
                    knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);
                }
            }
            var resultingFirstChild = null;
            var previousNewFiber = null;
            var oldFiber = currentFirstChild;
            var lastPlacedIndex = 0;
            var newIdx = 0;
            var nextOldFiber = null;
            for(; oldFiber !== null && newIdx < newChildren.length; newIdx++){
                if (oldFiber.index > newIdx) {
                    nextOldFiber = oldFiber;
                    oldFiber = null;
                } else {
                    nextOldFiber = oldFiber.sibling;
                }
                var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], lanes);
                if (newFiber === null) {
                    if (oldFiber === null) {
                        oldFiber = nextOldFiber;
                    }
                    break;
                }
                if (shouldTrackSideEffects) {
                    if (oldFiber && newFiber.alternate === null) {
                        deleteChild(returnFiber, oldFiber);
                    }
                }
                lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
                if (previousNewFiber === null) {
                    resultingFirstChild = newFiber;
                } else {
                    previousNewFiber.sibling = newFiber;
                }
                previousNewFiber = newFiber;
                oldFiber = nextOldFiber;
            }
            if (newIdx === newChildren.length) {
                deleteRemainingChildren(returnFiber, oldFiber);
                return resultingFirstChild;
            }
            if (oldFiber === null) {
                for(; newIdx < newChildren.length; newIdx++){
                    var _newFiber = createChild(returnFiber, newChildren[newIdx], lanes);
                    if (_newFiber === null) {
                        continue;
                    }
                    lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);
                    if (previousNewFiber === null) {
                        resultingFirstChild = _newFiber;
                    } else {
                        previousNewFiber.sibling = _newFiber;
                    }
                    previousNewFiber = _newFiber;
                }
                return resultingFirstChild;
            }
            var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
            for(; newIdx < newChildren.length; newIdx++){
                var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], lanes);
                if (_newFiber2 !== null) {
                    if (shouldTrackSideEffects) {
                        if (_newFiber2.alternate !== null) {
                            existingChildren.delete(_newFiber2.key === null ? newIdx : _newFiber2.key);
                        }
                    }
                    lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);
                    if (previousNewFiber === null) {
                        resultingFirstChild = _newFiber2;
                    } else {
                        previousNewFiber.sibling = _newFiber2;
                    }
                    previousNewFiber = _newFiber2;
                }
            }
            if (shouldTrackSideEffects) {
                existingChildren.forEach(function(child) {
                    return deleteChild(returnFiber, child);
                });
            }
            return resultingFirstChild;
        }
        function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, lanes) {
            var iteratorFn = getIteratorFn(newChildrenIterable);
            if (!(typeof iteratorFn === "function")) {
                {
                    throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
                }
            }
            {
                if (typeof Symbol === "function" && newChildrenIterable[Symbol.toStringTag] === "Generator") {
                    if (!didWarnAboutGenerators) {
                        error1("Using Generators as children is unsupported and will likely yield " + "unexpected results because enumerating a generator mutates it. " + "You may convert it to an array with `Array.from()` or the " + "`[...spread]` operator before rendering. Keep in mind " + "you might need to polyfill these features for older browsers.");
                    }
                    didWarnAboutGenerators = true;
                }
                if (newChildrenIterable.entries === iteratorFn) {
                    if (!didWarnAboutMaps) {
                        error1("Using Maps as children is not supported. " + "Use an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                }
                var _newChildren = iteratorFn.call(newChildrenIterable);
                if (_newChildren) {
                    var knownKeys = null;
                    var _step = _newChildren.next();
                    for(; !_step.done; _step = _newChildren.next()){
                        var child = _step.value;
                        knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);
                    }
                }
            }
            var newChildren = iteratorFn.call(newChildrenIterable);
            if (!(newChildren != null)) {
                {
                    throw Error("An iterable object provided no iterator.");
                }
            }
            var resultingFirstChild = null;
            var previousNewFiber = null;
            var oldFiber = currentFirstChild;
            var lastPlacedIndex = 0;
            var newIdx = 0;
            var nextOldFiber = null;
            var step = newChildren.next();
            for(; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()){
                if (oldFiber.index > newIdx) {
                    nextOldFiber = oldFiber;
                    oldFiber = null;
                } else {
                    nextOldFiber = oldFiber.sibling;
                }
                var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
                if (newFiber === null) {
                    if (oldFiber === null) {
                        oldFiber = nextOldFiber;
                    }
                    break;
                }
                if (shouldTrackSideEffects) {
                    if (oldFiber && newFiber.alternate === null) {
                        deleteChild(returnFiber, oldFiber);
                    }
                }
                lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
                if (previousNewFiber === null) {
                    resultingFirstChild = newFiber;
                } else {
                    previousNewFiber.sibling = newFiber;
                }
                previousNewFiber = newFiber;
                oldFiber = nextOldFiber;
            }
            if (step.done) {
                deleteRemainingChildren(returnFiber, oldFiber);
                return resultingFirstChild;
            }
            if (oldFiber === null) {
                for(; !step.done; newIdx++, step = newChildren.next()){
                    var _newFiber3 = createChild(returnFiber, step.value, lanes);
                    if (_newFiber3 === null) {
                        continue;
                    }
                    lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);
                    if (previousNewFiber === null) {
                        resultingFirstChild = _newFiber3;
                    } else {
                        previousNewFiber.sibling = _newFiber3;
                    }
                    previousNewFiber = _newFiber3;
                }
                return resultingFirstChild;
            }
            var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
            for(; !step.done; newIdx++, step = newChildren.next()){
                var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, lanes);
                if (_newFiber4 !== null) {
                    if (shouldTrackSideEffects) {
                        if (_newFiber4.alternate !== null) {
                            existingChildren.delete(_newFiber4.key === null ? newIdx : _newFiber4.key);
                        }
                    }
                    lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);
                    if (previousNewFiber === null) {
                        resultingFirstChild = _newFiber4;
                    } else {
                        previousNewFiber.sibling = _newFiber4;
                    }
                    previousNewFiber = _newFiber4;
                }
            }
            if (shouldTrackSideEffects) {
                existingChildren.forEach(function(child) {
                    return deleteChild(returnFiber, child);
                });
            }
            return resultingFirstChild;
        }
        function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, lanes) {
            if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
                deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
                var existing = useFiber(currentFirstChild, textContent);
                existing.return = returnFiber;
                return existing;
            }
            deleteRemainingChildren(returnFiber, currentFirstChild);
            var created = createFiberFromText(textContent, returnFiber.mode, lanes);
            created.return = returnFiber;
            return created;
        }
        function reconcileSingleElement(returnFiber, currentFirstChild, element, lanes) {
            var key = element.key;
            var child = currentFirstChild;
            while(child !== null){
                if (child.key === key) {
                    switch(child.tag){
                        case Fragment1:
                            {
                                if (element.type === REACT_FRAGMENT_TYPE) {
                                    deleteRemainingChildren(returnFiber, child.sibling);
                                    var existing = useFiber(child, element.props.children);
                                    existing.return = returnFiber;
                                    {
                                        existing._debugSource = element._source;
                                        existing._debugOwner = element._owner;
                                    }
                                    return existing;
                                }
                                break;
                            }
                        case Block:
                        default:
                            {
                                if (child.elementType === element.type || isCompatibleFamilyForHotReloading(child, element)) {
                                    deleteRemainingChildren(returnFiber, child.sibling);
                                    var _existing3 = useFiber(child, element.props);
                                    _existing3.ref = coerceRef(returnFiber, child, element);
                                    _existing3.return = returnFiber;
                                    {
                                        _existing3._debugSource = element._source;
                                        _existing3._debugOwner = element._owner;
                                    }
                                    return _existing3;
                                }
                                break;
                            }
                    }
                    deleteRemainingChildren(returnFiber, child);
                    break;
                } else {
                    deleteChild(returnFiber, child);
                }
                child = child.sibling;
            }
            if (element.type === REACT_FRAGMENT_TYPE) {
                var created = createFiberFromFragment(element.props.children, returnFiber.mode, lanes, element.key);
                created.return = returnFiber;
                return created;
            } else {
                var _created4 = createFiberFromElement(element, returnFiber.mode, lanes);
                _created4.ref = coerceRef(returnFiber, currentFirstChild, element);
                _created4.return = returnFiber;
                return _created4;
            }
        }
        function reconcileSinglePortal(returnFiber, currentFirstChild, portal, lanes) {
            var key = portal.key;
            var child = currentFirstChild;
            while(child !== null){
                if (child.key === key) {
                    if (child.tag === HostPortal && child.stateNode.containerInfo === portal.containerInfo && child.stateNode.implementation === portal.implementation) {
                        deleteRemainingChildren(returnFiber, child.sibling);
                        var existing = useFiber(child, portal.children || []);
                        existing.return = returnFiber;
                        return existing;
                    } else {
                        deleteRemainingChildren(returnFiber, child);
                        break;
                    }
                } else {
                    deleteChild(returnFiber, child);
                }
                child = child.sibling;
            }
            var created = createFiberFromPortal(portal, returnFiber.mode, lanes);
            created.return = returnFiber;
            return created;
        }
        function reconcileChildFibers(returnFiber, currentFirstChild, newChild, lanes) {
            var isUnkeyedTopLevelFragment = typeof newChild === "object" && newChild !== null && newChild.type === REACT_FRAGMENT_TYPE && newChild.key === null;
            if (isUnkeyedTopLevelFragment) {
                newChild = newChild.props.children;
            }
            var isObject = typeof newChild === "object" && newChild !== null;
            if (isObject) {
                switch(newChild.$$typeof){
                    case REACT_ELEMENT_TYPE:
                        return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, lanes));
                    case REACT_PORTAL_TYPE:
                        return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, lanes));
                }
            }
            if (typeof newChild === "string" || typeof newChild === "number") {
                return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, "" + newChild, lanes));
            }
            if (isArray$1(newChild)) {
                return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, lanes);
            }
            if (getIteratorFn(newChild)) {
                return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, lanes);
            }
            if (isObject) {
                throwOnInvalidObjectType(returnFiber, newChild);
            }
            {
                if (typeof newChild === "function") {
                    warnOnFunctionType(returnFiber);
                }
            }
            if (typeof newChild === "undefined" && !isUnkeyedTopLevelFragment) {
                switch(returnFiber.tag){
                    case ClassComponent:
                        {
                            {
                                var instance = returnFiber.stateNode;
                                if (instance.render._isMockFunction) {
                                    break;
                                }
                            }
                        }
                    case Block:
                    case FunctionComponent:
                    case ForwardRef:
                    case SimpleMemoComponent:
                        {
                            {
                                {
                                    throw Error((getComponentName(returnFiber.type) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
                                }
                            }
                        }
                }
            }
            return deleteRemainingChildren(returnFiber, currentFirstChild);
        }
        return reconcileChildFibers;
    }
    var reconcileChildFibers1 = ChildReconciler(true);
    var mountChildFibers = ChildReconciler(false);
    function cloneChildFibers(current, workInProgress) {
        if (!(current === null || workInProgress.child === current.child)) {
            {
                throw Error("Resuming work not yet implemented.");
            }
        }
        if (workInProgress.child === null) {
            return;
        }
        var currentChild = workInProgress.child;
        var newChild = createWorkInProgress(currentChild, currentChild.pendingProps);
        workInProgress.child = newChild;
        newChild.return = workInProgress;
        while(currentChild.sibling !== null){
            currentChild = currentChild.sibling;
            newChild = newChild.sibling = createWorkInProgress(currentChild, currentChild.pendingProps);
            newChild.return = workInProgress;
        }
        newChild.sibling = null;
    }
    function resetChildFibers(workInProgress, lanes) {
        var child = workInProgress.child;
        while(child !== null){
            resetWorkInProgress(child, lanes);
            child = child.sibling;
        }
    }
    var NO_CONTEXT = {};
    var contextStackCursor$1 = createCursor(NO_CONTEXT);
    var contextFiberStackCursor = createCursor(NO_CONTEXT);
    var rootInstanceStackCursor = createCursor(NO_CONTEXT);
    function requiredContext(c) {
        if (!(c !== NO_CONTEXT)) {
            {
                throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
            }
        }
        return c;
    }
    function getRootHostContainer() {
        var rootInstance = requiredContext(rootInstanceStackCursor.current);
        return rootInstance;
    }
    function pushHostContainer(fiber, nextRootInstance) {
        push(rootInstanceStackCursor, nextRootInstance, fiber);
        push(contextFiberStackCursor, fiber, fiber);
        push(contextStackCursor$1, NO_CONTEXT, fiber);
        var nextRootContext = getRootHostContext(nextRootInstance);
        pop(contextStackCursor$1, fiber);
        push(contextStackCursor$1, nextRootContext, fiber);
    }
    function popHostContainer(fiber) {
        pop(contextStackCursor$1, fiber);
        pop(contextFiberStackCursor, fiber);
        pop(rootInstanceStackCursor, fiber);
    }
    function getHostContext() {
        var context = requiredContext(contextStackCursor$1.current);
        return context;
    }
    function pushHostContext(fiber) {
        requiredContext(rootInstanceStackCursor.current);
        var context = requiredContext(contextStackCursor$1.current);
        var nextContext = getChildHostContext(context, fiber.type);
        if (context === nextContext) {
            return;
        }
        push(contextFiberStackCursor, fiber, fiber);
        push(contextStackCursor$1, nextContext, fiber);
    }
    function popHostContext(fiber) {
        if (contextFiberStackCursor.current !== fiber) {
            return;
        }
        pop(contextStackCursor$1, fiber);
        pop(contextFiberStackCursor, fiber);
    }
    var DefaultSuspenseContext = 0;
    var SubtreeSuspenseContextMask = 1;
    var InvisibleParentSuspenseContext = 1;
    var ForceSuspenseFallback = 2;
    var suspenseStackCursor = createCursor(DefaultSuspenseContext);
    function hasSuspenseContext(parentContext, flag) {
        return (parentContext & flag) !== 0;
    }
    function setDefaultShallowSuspenseContext(parentContext) {
        return parentContext & SubtreeSuspenseContextMask;
    }
    function setShallowSuspenseContext(parentContext, shallowContext) {
        return parentContext & SubtreeSuspenseContextMask | shallowContext;
    }
    function addSubtreeSuspenseContext(parentContext, subtreeContext) {
        return parentContext | subtreeContext;
    }
    function pushSuspenseContext(fiber, newContext) {
        push(suspenseStackCursor, newContext, fiber);
    }
    function popSuspenseContext(fiber) {
        pop(suspenseStackCursor, fiber);
    }
    function shouldCaptureSuspense(workInProgress, hasInvisibleParent) {
        var nextState = workInProgress.memoizedState;
        if (nextState !== null) {
            if (nextState.dehydrated !== null) {
                return true;
            }
            return false;
        }
        var props = workInProgress.memoizedProps;
        if (props.fallback === undefined) {
            return false;
        }
        if (props.unstable_avoidThisFallback !== true) {
            return true;
        }
        if (hasInvisibleParent) {
            return false;
        }
        return true;
    }
    function findFirstSuspended(row) {
        var node = row;
        while(node !== null){
            if (node.tag === SuspenseComponent) {
                var state = node.memoizedState;
                if (state !== null) {
                    var dehydrated = state.dehydrated;
                    if (dehydrated === null || isSuspenseInstancePending(dehydrated) || isSuspenseInstanceFallback(dehydrated)) {
                        return node;
                    }
                }
            } else if (node.tag === SuspenseListComponent && node.memoizedProps.revealOrder !== undefined) {
                var didSuspend = (node.flags & DidCapture) !== NoFlags;
                if (didSuspend) {
                    return node;
                }
            } else if (node.child !== null) {
                node.child.return = node;
                node = node.child;
                continue;
            }
            if (node === row) {
                return null;
            }
            while(node.sibling === null){
                if (node.return === null || node.return === row) {
                    return null;
                }
                node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
        }
        return null;
    }
    var NoFlags$1 = 0;
    var HasEffect = 1;
    var Layout = 2;
    var Passive$1 = 4;
    var hydrationParentFiber = null;
    var nextHydratableInstance = null;
    var isHydrating1 = false;
    function enterHydrationState(fiber) {
        var parentInstance = fiber.stateNode.containerInfo;
        nextHydratableInstance = getFirstHydratableChild(parentInstance);
        hydrationParentFiber = fiber;
        isHydrating1 = true;
        return true;
    }
    function deleteHydratableInstance(returnFiber, instance) {
        {
            switch(returnFiber.tag){
                case HostRoot:
                    didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo, instance);
                    break;
                case HostComponent:
                    didNotHydrateInstance(returnFiber.type, returnFiber.memoizedProps, returnFiber.stateNode, instance);
                    break;
            }
        }
        var childToDelete = createFiberFromHostInstanceForDeletion();
        childToDelete.stateNode = instance;
        childToDelete.return = returnFiber;
        childToDelete.flags = Deletion;
        if (returnFiber.lastEffect !== null) {
            returnFiber.lastEffect.nextEffect = childToDelete;
            returnFiber.lastEffect = childToDelete;
        } else {
            returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
        }
    }
    function insertNonHydratedInstance(returnFiber, fiber) {
        fiber.flags = fiber.flags & ~Hydrating | Placement;
        {
            switch(returnFiber.tag){
                case HostRoot:
                    {
                        var parentContainer = returnFiber.stateNode.containerInfo;
                        switch(fiber.tag){
                            case HostComponent:
                                var type = fiber.type;
                                fiber.pendingProps;
                                didNotFindHydratableContainerInstance(parentContainer, type);
                                break;
                            case HostText:
                                var text = fiber.pendingProps;
                                didNotFindHydratableContainerTextInstance(parentContainer, text);
                                break;
                        }
                        break;
                    }
                case HostComponent:
                    {
                        var parentType = returnFiber.type;
                        var parentProps = returnFiber.memoizedProps;
                        var parentInstance = returnFiber.stateNode;
                        switch(fiber.tag){
                            case HostComponent:
                                var _type = fiber.type;
                                fiber.pendingProps;
                                didNotFindHydratableInstance(parentType, parentProps, parentInstance, _type);
                                break;
                            case HostText:
                                var _text = fiber.pendingProps;
                                didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, _text);
                                break;
                            case SuspenseComponent:
                                didNotFindHydratableSuspenseInstance(parentType, parentProps);
                                break;
                        }
                        break;
                    }
                default:
                    return;
            }
        }
    }
    function tryHydrate(fiber, nextInstance) {
        switch(fiber.tag){
            case HostComponent:
                {
                    var type = fiber.type;
                    fiber.pendingProps;
                    var instance = canHydrateInstance(nextInstance, type);
                    if (instance !== null) {
                        fiber.stateNode = instance;
                        return true;
                    }
                    return false;
                }
            case HostText:
                {
                    var text = fiber.pendingProps;
                    var textInstance = canHydrateTextInstance(nextInstance, text);
                    if (textInstance !== null) {
                        fiber.stateNode = textInstance;
                        return true;
                    }
                    return false;
                }
            case SuspenseComponent:
                {
                    return false;
                }
            default:
                return false;
        }
    }
    function tryToClaimNextHydratableInstance(fiber) {
        if (!isHydrating1) {
            return;
        }
        var nextInstance = nextHydratableInstance;
        if (!nextInstance) {
            insertNonHydratedInstance(hydrationParentFiber, fiber);
            isHydrating1 = false;
            hydrationParentFiber = fiber;
            return;
        }
        var firstAttemptedInstance = nextInstance;
        if (!tryHydrate(fiber, nextInstance)) {
            nextInstance = getNextHydratableSibling(firstAttemptedInstance);
            if (!nextInstance || !tryHydrate(fiber, nextInstance)) {
                insertNonHydratedInstance(hydrationParentFiber, fiber);
                isHydrating1 = false;
                hydrationParentFiber = fiber;
                return;
            }
            deleteHydratableInstance(hydrationParentFiber, firstAttemptedInstance);
        }
        hydrationParentFiber = fiber;
        nextHydratableInstance = getFirstHydratableChild(nextInstance);
    }
    function prepareToHydrateHostInstance(fiber, rootContainerInstance, hostContext) {
        var instance = fiber.stateNode;
        var updatePayload = hydrateInstance(instance, fiber.type, fiber.memoizedProps, rootContainerInstance, hostContext, fiber);
        fiber.updateQueue = updatePayload;
        if (updatePayload !== null) {
            return true;
        }
        return false;
    }
    function prepareToHydrateHostTextInstance(fiber) {
        var textInstance = fiber.stateNode;
        var textContent = fiber.memoizedProps;
        var shouldUpdate = hydrateTextInstance(textInstance, textContent, fiber);
        {
            if (shouldUpdate) {
                var returnFiber = hydrationParentFiber;
                if (returnFiber !== null) {
                    switch(returnFiber.tag){
                        case HostRoot:
                            {
                                var parentContainer = returnFiber.stateNode.containerInfo;
                                didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, textContent);
                                break;
                            }
                        case HostComponent:
                            {
                                var parentType = returnFiber.type;
                                var parentProps = returnFiber.memoizedProps;
                                var parentInstance = returnFiber.stateNode;
                                didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, textContent);
                                break;
                            }
                    }
                }
            }
        }
        return shouldUpdate;
    }
    function skipPastDehydratedSuspenseInstance(fiber) {
        var suspenseState = fiber.memoizedState;
        var suspenseInstance = suspenseState !== null ? suspenseState.dehydrated : null;
        if (!suspenseInstance) {
            {
                throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
            }
        }
        return getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance);
    }
    function popToNextHostParent(fiber) {
        var parent = fiber.return;
        while(parent !== null && parent.tag !== HostComponent && parent.tag !== HostRoot && parent.tag !== SuspenseComponent){
            parent = parent.return;
        }
        hydrationParentFiber = parent;
    }
    function popHydrationState(fiber) {
        if (fiber !== hydrationParentFiber) {
            return false;
        }
        if (!isHydrating1) {
            popToNextHostParent(fiber);
            isHydrating1 = true;
            return false;
        }
        var type = fiber.type;
        if (fiber.tag !== HostComponent || type !== "head" && type !== "body" && !shouldSetTextContent(type, fiber.memoizedProps)) {
            var nextInstance = nextHydratableInstance;
            while(nextInstance){
                deleteHydratableInstance(fiber, nextInstance);
                nextInstance = getNextHydratableSibling(nextInstance);
            }
        }
        popToNextHostParent(fiber);
        if (fiber.tag === SuspenseComponent) {
            nextHydratableInstance = skipPastDehydratedSuspenseInstance(fiber);
        } else {
            nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null;
        }
        return true;
    }
    function resetHydrationState() {
        hydrationParentFiber = null;
        nextHydratableInstance = null;
        isHydrating1 = false;
    }
    function getIsHydrating() {
        return isHydrating1;
    }
    var workInProgressSources = [];
    var rendererSigil$1;
    {
        rendererSigil$1 = {};
    }
    function markSourceAsDirty(mutableSource) {
        workInProgressSources.push(mutableSource);
    }
    function resetWorkInProgressVersions() {
        for(var i = 0; i < workInProgressSources.length; i++){
            var mutableSource = workInProgressSources[i];
            {
                mutableSource._workInProgressVersionPrimary = null;
            }
        }
        workInProgressSources.length = 0;
    }
    function getWorkInProgressVersion(mutableSource) {
        {
            return mutableSource._workInProgressVersionPrimary;
        }
    }
    function setWorkInProgressVersion(mutableSource, version1) {
        {
            mutableSource._workInProgressVersionPrimary = version1;
        }
        workInProgressSources.push(mutableSource);
    }
    function warnAboutMultipleRenderersDEV(mutableSource) {
        {
            {
                if (mutableSource._currentPrimaryRenderer == null) {
                    mutableSource._currentPrimaryRenderer = rendererSigil$1;
                } else if (mutableSource._currentPrimaryRenderer !== rendererSigil$1) {
                    error1("Detected multiple renderers concurrently rendering the " + "same mutable source. This is currently unsupported.");
                }
            }
        }
    }
    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher, ReactCurrentBatchConfig$1 = ReactSharedInternals.ReactCurrentBatchConfig;
    var didWarnAboutMismatchedHooksForComponent;
    var didWarnAboutUseOpaqueIdentifier;
    {
        didWarnAboutUseOpaqueIdentifier = {};
        didWarnAboutMismatchedHooksForComponent = new Set();
    }
    var renderLanes1 = NoLanes;
    var currentlyRenderingFiber$1 = null;
    var currentHook1 = null;
    var workInProgressHook = null;
    var didScheduleRenderPhaseUpdate = false;
    var didScheduleRenderPhaseUpdateDuringThisPass = false;
    var RE_RENDER_LIMIT = 25;
    var currentHookNameInDev = null;
    var hookTypesDev = null;
    var hookTypesUpdateIndexDev = -1;
    var ignorePreviousDependencies = false;
    function mountHookTypesDev() {
        {
            var hookName = currentHookNameInDev;
            if (hookTypesDev === null) {
                hookTypesDev = [
                    hookName
                ];
            } else {
                hookTypesDev.push(hookName);
            }
        }
    }
    function updateHookTypesDev() {
        {
            var hookName = currentHookNameInDev;
            if (hookTypesDev !== null) {
                hookTypesUpdateIndexDev++;
                if (hookTypesDev[hookTypesUpdateIndexDev] !== hookName) {
                    warnOnHookMismatchInDev(hookName);
                }
            }
        }
    }
    function checkDepsAreArrayDev(deps) {
        {
            if (deps !== undefined && deps !== null && !Array.isArray(deps)) {
                error1("%s received a final argument that is not an array (instead, received `%s`). When " + "specified, the final argument must be an array.", currentHookNameInDev, typeof deps);
            }
        }
    }
    function warnOnHookMismatchInDev(currentHookName) {
        {
            var componentName = getComponentName(currentlyRenderingFiber$1.type);
            if (!didWarnAboutMismatchedHooksForComponent.has(componentName)) {
                didWarnAboutMismatchedHooksForComponent.add(componentName);
                if (hookTypesDev !== null) {
                    var table = "";
                    var secondColumnStart = 30;
                    for(var i = 0; i <= hookTypesUpdateIndexDev; i++){
                        var oldHookName = hookTypesDev[i];
                        var newHookName = i === hookTypesUpdateIndexDev ? currentHookName : oldHookName;
                        var row = i + 1 + ". " + oldHookName;
                        while(row.length < secondColumnStart){
                            row += " ";
                        }
                        row += newHookName + "\n";
                        table += row;
                    }
                    error1("React has detected a change in the order of Hooks called by %s. " + "This will lead to bugs and errors if not fixed. " + "For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks\n\n" + "   Previous render            Next render\n" + "   ------------------------------------------------------\n" + "%s" + "   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n", componentName, table);
                }
            }
        }
    }
    function throwInvalidHookError() {
        {
            {
                throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
        }
    }
    function areHookInputsEqual(nextDeps, prevDeps) {
        {
            if (ignorePreviousDependencies) {
                return false;
            }
        }
        if (prevDeps === null) {
            {
                error1("%s received a final argument during this render, but not during " + "the previous render. Even though the final argument is optional, " + "its type cannot change between renders.", currentHookNameInDev);
            }
            return false;
        }
        {
            if (nextDeps.length !== prevDeps.length) {
                error1("The final argument passed to %s changed size between renders. The " + "order and size of this array must remain constant.\n\n" + "Previous: %s\n" + "Incoming: %s", currentHookNameInDev, "[" + prevDeps.join(", ") + "]", "[" + nextDeps.join(", ") + "]");
            }
        }
        for(var i = 0; i < prevDeps.length && i < nextDeps.length; i++){
            if (objectIs(nextDeps[i], prevDeps[i])) {
                continue;
            }
            return false;
        }
        return true;
    }
    function renderWithHooks(current, workInProgress, Component5, props, secondArg, nextRenderLanes) {
        renderLanes1 = nextRenderLanes;
        currentlyRenderingFiber$1 = workInProgress;
        {
            hookTypesDev = current !== null ? current._debugHookTypes : null;
            hookTypesUpdateIndexDev = -1;
            ignorePreviousDependencies = current !== null && current.type !== workInProgress.type;
        }
        workInProgress.memoizedState = null;
        workInProgress.updateQueue = null;
        workInProgress.lanes = NoLanes;
        {
            if (current !== null && current.memoizedState !== null) {
                ReactCurrentDispatcher$1.current = HooksDispatcherOnUpdateInDEV;
            } else if (hookTypesDev !== null) {
                ReactCurrentDispatcher$1.current = HooksDispatcherOnMountWithHookTypesInDEV;
            } else {
                ReactCurrentDispatcher$1.current = HooksDispatcherOnMountInDEV;
            }
        }
        var children = Component5(props, secondArg);
        if (didScheduleRenderPhaseUpdateDuringThisPass) {
            var numberOfReRenders = 0;
            do {
                didScheduleRenderPhaseUpdateDuringThisPass = false;
                if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
                    {
                        throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
                    }
                }
                numberOfReRenders += 1;
                {
                    ignorePreviousDependencies = false;
                }
                currentHook1 = null;
                workInProgressHook = null;
                workInProgress.updateQueue = null;
                {
                    hookTypesUpdateIndexDev = -1;
                }
                ReactCurrentDispatcher$1.current = HooksDispatcherOnRerenderInDEV;
                children = Component5(props, secondArg);
            }while (didScheduleRenderPhaseUpdateDuringThisPass)
        }
        ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
        {
            workInProgress._debugHookTypes = hookTypesDev;
        }
        var didRenderTooFewHooks = currentHook1 !== null && currentHook1.next !== null;
        renderLanes1 = NoLanes;
        currentlyRenderingFiber$1 = null;
        currentHook1 = null;
        workInProgressHook = null;
        {
            currentHookNameInDev = null;
            hookTypesDev = null;
            hookTypesUpdateIndexDev = -1;
        }
        didScheduleRenderPhaseUpdate = false;
        if (!!didRenderTooFewHooks) {
            {
                throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
            }
        }
        return children;
    }
    function bailoutHooks(current, workInProgress, lanes) {
        workInProgress.updateQueue = current.updateQueue;
        workInProgress.flags &= ~(Passive | Update);
        current.lanes = removeLanes(current.lanes, lanes);
    }
    function resetHooksAfterThrow() {
        ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
        if (didScheduleRenderPhaseUpdate) {
            var hook = currentlyRenderingFiber$1.memoizedState;
            while(hook !== null){
                var queue = hook.queue;
                if (queue !== null) {
                    queue.pending = null;
                }
                hook = hook.next;
            }
            didScheduleRenderPhaseUpdate = false;
        }
        renderLanes1 = NoLanes;
        currentlyRenderingFiber$1 = null;
        currentHook1 = null;
        workInProgressHook = null;
        {
            hookTypesDev = null;
            hookTypesUpdateIndexDev = -1;
            currentHookNameInDev = null;
            isUpdatingOpaqueValueInRenderPhase = false;
        }
        didScheduleRenderPhaseUpdateDuringThisPass = false;
    }
    function mountWorkInProgressHook() {
        var hook = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        if (workInProgressHook === null) {
            currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook;
        } else {
            workInProgressHook = workInProgressHook.next = hook;
        }
        return workInProgressHook;
    }
    function updateWorkInProgressHook() {
        var nextCurrentHook;
        if (currentHook1 === null) {
            var current = currentlyRenderingFiber$1.alternate;
            if (current !== null) {
                nextCurrentHook = current.memoizedState;
            } else {
                nextCurrentHook = null;
            }
        } else {
            nextCurrentHook = currentHook1.next;
        }
        var nextWorkInProgressHook;
        if (workInProgressHook === null) {
            nextWorkInProgressHook = currentlyRenderingFiber$1.memoizedState;
        } else {
            nextWorkInProgressHook = workInProgressHook.next;
        }
        if (nextWorkInProgressHook !== null) {
            workInProgressHook = nextWorkInProgressHook;
            nextWorkInProgressHook = workInProgressHook.next;
            currentHook1 = nextCurrentHook;
        } else {
            if (!(nextCurrentHook !== null)) {
                {
                    throw Error("Rendered more hooks than during the previous render.");
                }
            }
            currentHook1 = nextCurrentHook;
            var newHook = {
                memoizedState: currentHook1.memoizedState,
                baseState: currentHook1.baseState,
                baseQueue: currentHook1.baseQueue,
                queue: currentHook1.queue,
                next: null
            };
            if (workInProgressHook === null) {
                currentlyRenderingFiber$1.memoizedState = workInProgressHook = newHook;
            } else {
                workInProgressHook = workInProgressHook.next = newHook;
            }
        }
        return workInProgressHook;
    }
    function createFunctionComponentUpdateQueue() {
        return {
            lastEffect: null
        };
    }
    function basicStateReducer(state, action) {
        return typeof action === "function" ? action(state) : action;
    }
    function mountReducer(reducer, initialArg, init) {
        var hook = mountWorkInProgressHook();
        var initialState;
        if (init !== undefined) {
            initialState = init(initialArg);
        } else {
            initialState = initialArg;
        }
        hook.memoizedState = hook.baseState = initialState;
        var queue = hook.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: reducer,
            lastRenderedState: initialState
        };
        var dispatch = queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue);
        return [
            hook.memoizedState,
            dispatch
        ];
    }
    function updateReducer(reducer, initialArg, init) {
        var hook = updateWorkInProgressHook();
        var queue = hook.queue;
        if (!(queue !== null)) {
            {
                throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
            }
        }
        queue.lastRenderedReducer = reducer;
        var current = currentHook1;
        var baseQueue = current.baseQueue;
        var pendingQueue = queue.pending;
        if (pendingQueue !== null) {
            if (baseQueue !== null) {
                var baseFirst = baseQueue.next;
                var pendingFirst = pendingQueue.next;
                baseQueue.next = pendingFirst;
                pendingQueue.next = baseFirst;
            }
            {
                if (current.baseQueue !== baseQueue) {
                    error1("Internal error: Expected work-in-progress queue to be a clone. " + "This is a bug in React.");
                }
            }
            current.baseQueue = baseQueue = pendingQueue;
            queue.pending = null;
        }
        if (baseQueue !== null) {
            var first = baseQueue.next;
            var newState = current.baseState;
            var newBaseState = null;
            var newBaseQueueFirst = null;
            var newBaseQueueLast = null;
            var update = first;
            do {
                var updateLane = update.lane;
                if (!isSubsetOfLanes(renderLanes1, updateLane)) {
                    var clone = {
                        lane: updateLane,
                        action: update.action,
                        eagerReducer: update.eagerReducer,
                        eagerState: update.eagerState,
                        next: null
                    };
                    if (newBaseQueueLast === null) {
                        newBaseQueueFirst = newBaseQueueLast = clone;
                        newBaseState = newState;
                    } else {
                        newBaseQueueLast = newBaseQueueLast.next = clone;
                    }
                    currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, updateLane);
                    markSkippedUpdateLanes(updateLane);
                } else {
                    if (newBaseQueueLast !== null) {
                        var _clone = {
                            lane: NoLane,
                            action: update.action,
                            eagerReducer: update.eagerReducer,
                            eagerState: update.eagerState,
                            next: null
                        };
                        newBaseQueueLast = newBaseQueueLast.next = _clone;
                    }
                    if (update.eagerReducer === reducer) {
                        newState = update.eagerState;
                    } else {
                        var action = update.action;
                        newState = reducer(newState, action);
                    }
                }
                update = update.next;
            }while (update !== null && update !== first)
            if (newBaseQueueLast === null) {
                newBaseState = newState;
            } else {
                newBaseQueueLast.next = newBaseQueueFirst;
            }
            if (!objectIs(newState, hook.memoizedState)) {
                markWorkInProgressReceivedUpdate();
            }
            hook.memoizedState = newState;
            hook.baseState = newBaseState;
            hook.baseQueue = newBaseQueueLast;
            queue.lastRenderedState = newState;
        }
        var dispatch = queue.dispatch;
        return [
            hook.memoizedState,
            dispatch
        ];
    }
    function rerenderReducer(reducer, initialArg, init) {
        var hook = updateWorkInProgressHook();
        var queue = hook.queue;
        if (!(queue !== null)) {
            {
                throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
            }
        }
        queue.lastRenderedReducer = reducer;
        var dispatch = queue.dispatch;
        var lastRenderPhaseUpdate = queue.pending;
        var newState = hook.memoizedState;
        if (lastRenderPhaseUpdate !== null) {
            queue.pending = null;
            var firstRenderPhaseUpdate = lastRenderPhaseUpdate.next;
            var update = firstRenderPhaseUpdate;
            do {
                var action = update.action;
                newState = reducer(newState, action);
                update = update.next;
            }while (update !== firstRenderPhaseUpdate)
            if (!objectIs(newState, hook.memoizedState)) {
                markWorkInProgressReceivedUpdate();
            }
            hook.memoizedState = newState;
            if (hook.baseQueue === null) {
                hook.baseState = newState;
            }
            queue.lastRenderedState = newState;
        }
        return [
            newState,
            dispatch
        ];
    }
    function readFromUnsubcribedMutableSource(root, source, getSnapshot) {
        {
            warnAboutMultipleRenderersDEV(source);
        }
        var getVersion = source._getVersion;
        var version2 = getVersion(source._source);
        var isSafeToReadFromSource = false;
        var currentRenderVersion = getWorkInProgressVersion(source);
        if (currentRenderVersion !== null) {
            isSafeToReadFromSource = currentRenderVersion === version2;
        } else {
            isSafeToReadFromSource = isSubsetOfLanes(renderLanes1, root.mutableReadLanes);
            if (isSafeToReadFromSource) {
                setWorkInProgressVersion(source, version2);
            }
        }
        if (isSafeToReadFromSource) {
            var snapshot = getSnapshot(source._source);
            {
                if (typeof snapshot === "function") {
                    error1("Mutable source should not return a function as the snapshot value. " + "Functions may close over mutable values and cause tearing.");
                }
            }
            return snapshot;
        } else {
            markSourceAsDirty(source);
            {
                {
                    throw Error("Cannot read from mutable source during the current render without tearing. This is a bug in React. Please file an issue.");
                }
            }
        }
    }
    function useMutableSource(hook, source, getSnapshot, subscribe) {
        var root = getWorkInProgressRoot();
        if (!(root !== null)) {
            {
                throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
            }
        }
        var getVersion = source._getVersion;
        var version3 = getVersion(source._source);
        var dispatcher = ReactCurrentDispatcher$1.current;
        var _dispatcher$useState = dispatcher.useState(function() {
            return readFromUnsubcribedMutableSource(root, source, getSnapshot);
        }), currentSnapshot = _dispatcher$useState[0], setSnapshot = _dispatcher$useState[1];
        var snapshot = currentSnapshot;
        var stateHook = workInProgressHook;
        var memoizedState = hook.memoizedState;
        var refs = memoizedState.refs;
        var prevGetSnapshot = refs.getSnapshot;
        var prevSource = memoizedState.source;
        var prevSubscribe = memoizedState.subscribe;
        var fiber = currentlyRenderingFiber$1;
        hook.memoizedState = {
            refs: refs,
            source: source,
            subscribe: subscribe
        };
        dispatcher.useEffect(function() {
            refs.getSnapshot = getSnapshot;
            refs.setSnapshot = setSnapshot;
            var maybeNewVersion = getVersion(source._source);
            if (!objectIs(version3, maybeNewVersion)) {
                var maybeNewSnapshot = getSnapshot(source._source);
                {
                    if (typeof maybeNewSnapshot === "function") {
                        error1("Mutable source should not return a function as the snapshot value. " + "Functions may close over mutable values and cause tearing.");
                    }
                }
                if (!objectIs(snapshot, maybeNewSnapshot)) {
                    setSnapshot(maybeNewSnapshot);
                    var lane = requestUpdateLane(fiber);
                    markRootMutableRead(root, lane);
                }
                markRootEntangled(root, root.mutableReadLanes);
            }
        }, [
            getSnapshot,
            source,
            subscribe
        ]);
        dispatcher.useEffect(function() {
            var handleChange = function() {
                var latestGetSnapshot = refs.getSnapshot;
                var latestSetSnapshot = refs.setSnapshot;
                try {
                    latestSetSnapshot(latestGetSnapshot(source._source));
                    var lane = requestUpdateLane(fiber);
                    markRootMutableRead(root, lane);
                } catch (error) {
                    latestSetSnapshot(function() {
                        throw error;
                    });
                }
            };
            var unsubscribe = subscribe(source._source, handleChange);
            {
                if (typeof unsubscribe !== "function") {
                    error1("Mutable source subscribe function must return an unsubscribe function.");
                }
            }
            return unsubscribe;
        }, [
            source,
            subscribe
        ]);
        if (!objectIs(prevGetSnapshot, getSnapshot) || !objectIs(prevSource, source) || !objectIs(prevSubscribe, subscribe)) {
            var newQueue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: basicStateReducer,
                lastRenderedState: snapshot
            };
            newQueue.dispatch = setSnapshot = dispatchAction.bind(null, currentlyRenderingFiber$1, newQueue);
            stateHook.queue = newQueue;
            stateHook.baseQueue = null;
            snapshot = readFromUnsubcribedMutableSource(root, source, getSnapshot);
            stateHook.memoizedState = stateHook.baseState = snapshot;
        }
        return snapshot;
    }
    function mountMutableSource(source, getSnapshot, subscribe) {
        var hook = mountWorkInProgressHook();
        hook.memoizedState = {
            refs: {
                getSnapshot: getSnapshot,
                setSnapshot: null
            },
            source: source,
            subscribe: subscribe
        };
        return useMutableSource(hook, source, getSnapshot, subscribe);
    }
    function updateMutableSource(source, getSnapshot, subscribe) {
        var hook = updateWorkInProgressHook();
        return useMutableSource(hook, source, getSnapshot, subscribe);
    }
    function mountState(initialState) {
        var hook = mountWorkInProgressHook();
        if (typeof initialState === "function") {
            initialState = initialState();
        }
        hook.memoizedState = hook.baseState = initialState;
        var queue = hook.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: basicStateReducer,
            lastRenderedState: initialState
        };
        var dispatch = queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue);
        return [
            hook.memoizedState,
            dispatch
        ];
    }
    function updateState(initialState) {
        return updateReducer(basicStateReducer);
    }
    function rerenderState(initialState) {
        return rerenderReducer(basicStateReducer);
    }
    function pushEffect(tag, create, destroy, deps) {
        var effect = {
            tag: tag,
            create: create,
            destroy: destroy,
            deps: deps,
            next: null
        };
        var componentUpdateQueue = currentlyRenderingFiber$1.updateQueue;
        if (componentUpdateQueue === null) {
            componentUpdateQueue = createFunctionComponentUpdateQueue();
            currentlyRenderingFiber$1.updateQueue = componentUpdateQueue;
            componentUpdateQueue.lastEffect = effect.next = effect;
        } else {
            var lastEffect = componentUpdateQueue.lastEffect;
            if (lastEffect === null) {
                componentUpdateQueue.lastEffect = effect.next = effect;
            } else {
                var firstEffect = lastEffect.next;
                lastEffect.next = effect;
                effect.next = firstEffect;
                componentUpdateQueue.lastEffect = effect;
            }
        }
        return effect;
    }
    function mountRef(initialValue) {
        var hook = mountWorkInProgressHook();
        var ref = {
            current: initialValue
        };
        {
            Object.seal(ref);
        }
        hook.memoizedState = ref;
        return ref;
    }
    function updateRef(initialValue) {
        var hook = updateWorkInProgressHook();
        return hook.memoizedState;
    }
    function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
        var hook = mountWorkInProgressHook();
        var nextDeps = deps === undefined ? null : deps;
        currentlyRenderingFiber$1.flags |= fiberFlags;
        hook.memoizedState = pushEffect(HasEffect | hookFlags, create, undefined, nextDeps);
    }
    function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
        var hook = updateWorkInProgressHook();
        var nextDeps = deps === undefined ? null : deps;
        var destroy = undefined;
        if (currentHook1 !== null) {
            var prevEffect = currentHook1.memoizedState;
            destroy = prevEffect.destroy;
            if (nextDeps !== null) {
                var prevDeps = prevEffect.deps;
                if (areHookInputsEqual(nextDeps, prevDeps)) {
                    pushEffect(hookFlags, create, destroy, nextDeps);
                    return;
                }
            }
        }
        currentlyRenderingFiber$1.flags |= fiberFlags;
        hook.memoizedState = pushEffect(HasEffect | hookFlags, create, destroy, nextDeps);
    }
    function mountEffect(create, deps) {
        {
            if ("undefined" !== typeof jest) {
                warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);
            }
        }
        return mountEffectImpl(Update | Passive, Passive$1, create, deps);
    }
    function updateEffect(create, deps) {
        {
            if ("undefined" !== typeof jest) {
                warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);
            }
        }
        return updateEffectImpl(Update | Passive, Passive$1, create, deps);
    }
    function mountLayoutEffect(create, deps) {
        return mountEffectImpl(Update, Layout, create, deps);
    }
    function updateLayoutEffect(create, deps) {
        return updateEffectImpl(Update, Layout, create, deps);
    }
    function imperativeHandleEffect(create, ref) {
        if (typeof ref === "function") {
            var refCallback = ref;
            var _inst = create();
            refCallback(_inst);
            return function() {
                refCallback(null);
            };
        } else if (ref !== null && ref !== undefined) {
            var refObject = ref;
            {
                if (!refObject.hasOwnProperty("current")) {
                    error1("Expected useImperativeHandle() first argument to either be a " + "ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(refObject).join(", ") + "}");
                }
            }
            var _inst2 = create();
            refObject.current = _inst2;
            return function() {
                refObject.current = null;
            };
        }
    }
    function mountImperativeHandle(ref, create, deps) {
        {
            if (typeof create !== "function") {
                error1("Expected useImperativeHandle() second argument to be a function " + "that creates a handle. Instead received: %s.", create !== null ? typeof create : "null");
            }
        }
        var effectDeps = deps !== null && deps !== undefined ? deps.concat([
            ref
        ]) : null;
        return mountEffectImpl(Update, Layout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
    }
    function updateImperativeHandle(ref, create, deps) {
        {
            if (typeof create !== "function") {
                error1("Expected useImperativeHandle() second argument to be a function " + "that creates a handle. Instead received: %s.", create !== null ? typeof create : "null");
            }
        }
        var effectDeps = deps !== null && deps !== undefined ? deps.concat([
            ref
        ]) : null;
        return updateEffectImpl(Update, Layout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
    }
    function mountDebugValue(value, formatterFn) {}
    var updateDebugValue = mountDebugValue;
    function mountCallback(callback, deps) {
        var hook = mountWorkInProgressHook();
        var nextDeps = deps === undefined ? null : deps;
        hook.memoizedState = [
            callback,
            nextDeps
        ];
        return callback;
    }
    function updateCallback(callback, deps) {
        var hook = updateWorkInProgressHook();
        var nextDeps = deps === undefined ? null : deps;
        var prevState = hook.memoizedState;
        if (prevState !== null) {
            if (nextDeps !== null) {
                var prevDeps = prevState[1];
                if (areHookInputsEqual(nextDeps, prevDeps)) {
                    return prevState[0];
                }
            }
        }
        hook.memoizedState = [
            callback,
            nextDeps
        ];
        return callback;
    }
    function mountMemo(nextCreate, deps) {
        var hook = mountWorkInProgressHook();
        var nextDeps = deps === undefined ? null : deps;
        var nextValue = nextCreate();
        hook.memoizedState = [
            nextValue,
            nextDeps
        ];
        return nextValue;
    }
    function updateMemo(nextCreate, deps) {
        var hook = updateWorkInProgressHook();
        var nextDeps = deps === undefined ? null : deps;
        var prevState = hook.memoizedState;
        if (prevState !== null) {
            if (nextDeps !== null) {
                var prevDeps = prevState[1];
                if (areHookInputsEqual(nextDeps, prevDeps)) {
                    return prevState[0];
                }
            }
        }
        var nextValue = nextCreate();
        hook.memoizedState = [
            nextValue,
            nextDeps
        ];
        return nextValue;
    }
    function mountDeferredValue(value) {
        var _mountState = mountState(value), prevValue = _mountState[0], setValue = _mountState[1];
        mountEffect(function() {
            var prevTransition = ReactCurrentBatchConfig$1.transition;
            ReactCurrentBatchConfig$1.transition = 1;
            try {
                setValue(value);
            } finally{
                ReactCurrentBatchConfig$1.transition = prevTransition;
            }
        }, [
            value
        ]);
        return prevValue;
    }
    function updateDeferredValue(value) {
        var _updateState = updateState(), prevValue = _updateState[0], setValue = _updateState[1];
        updateEffect(function() {
            var prevTransition = ReactCurrentBatchConfig$1.transition;
            ReactCurrentBatchConfig$1.transition = 1;
            try {
                setValue(value);
            } finally{
                ReactCurrentBatchConfig$1.transition = prevTransition;
            }
        }, [
            value
        ]);
        return prevValue;
    }
    function rerenderDeferredValue(value) {
        var _rerenderState = rerenderState(), prevValue = _rerenderState[0], setValue = _rerenderState[1];
        updateEffect(function() {
            var prevTransition = ReactCurrentBatchConfig$1.transition;
            ReactCurrentBatchConfig$1.transition = 1;
            try {
                setValue(value);
            } finally{
                ReactCurrentBatchConfig$1.transition = prevTransition;
            }
        }, [
            value
        ]);
        return prevValue;
    }
    function startTransition(setPending, callback) {
        var priorityLevel = getCurrentPriorityLevel();
        {
            runWithPriority$1(priorityLevel < UserBlockingPriority$2 ? UserBlockingPriority$2 : priorityLevel, function() {
                setPending(true);
            });
            runWithPriority$1(priorityLevel > NormalPriority$1 ? NormalPriority$1 : priorityLevel, function() {
                var prevTransition = ReactCurrentBatchConfig$1.transition;
                ReactCurrentBatchConfig$1.transition = 1;
                try {
                    setPending(false);
                    callback();
                } finally{
                    ReactCurrentBatchConfig$1.transition = prevTransition;
                }
            });
        }
    }
    function mountTransition() {
        var _mountState2 = mountState(false), isPending = _mountState2[0], setPending = _mountState2[1];
        var start = startTransition.bind(null, setPending);
        mountRef(start);
        return [
            start,
            isPending
        ];
    }
    function updateTransition() {
        var _updateState2 = updateState(), isPending = _updateState2[0];
        var startRef = updateRef();
        var start = startRef.current;
        return [
            start,
            isPending
        ];
    }
    function rerenderTransition() {
        var _rerenderState2 = rerenderState(), isPending = _rerenderState2[0];
        var startRef = updateRef();
        var start = startRef.current;
        return [
            start,
            isPending
        ];
    }
    var isUpdatingOpaqueValueInRenderPhase = false;
    function getIsUpdatingOpaqueValueInRenderPhaseInDEV() {
        {
            return isUpdatingOpaqueValueInRenderPhase;
        }
    }
    function warnOnOpaqueIdentifierAccessInDEV(fiber) {
        {
            var name = getComponentName(fiber.type) || "Unknown";
            if (getIsRendering() && !didWarnAboutUseOpaqueIdentifier[name]) {
                error1("The object passed back from useOpaqueIdentifier is meant to be " + "passed through to attributes only. Do not read the " + "value directly.");
                didWarnAboutUseOpaqueIdentifier[name] = true;
            }
        }
    }
    function mountOpaqueIdentifier() {
        var makeId = makeClientIdInDEV.bind(null, warnOnOpaqueIdentifierAccessInDEV.bind(null, currentlyRenderingFiber$1));
        if (getIsHydrating()) {
            var didUpgrade = false;
            var fiber = currentlyRenderingFiber$1;
            var readValue = function() {
                if (!didUpgrade) {
                    didUpgrade = true;
                    {
                        isUpdatingOpaqueValueInRenderPhase = true;
                        setId(makeId());
                        isUpdatingOpaqueValueInRenderPhase = false;
                        warnOnOpaqueIdentifierAccessInDEV(fiber);
                    }
                }
                {
                    {
                        throw Error("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly.");
                    }
                }
            };
            var id = makeOpaqueHydratingObject(readValue);
            var setId = mountState(id)[1];
            if ((currentlyRenderingFiber$1.mode & BlockingMode) === NoMode) {
                currentlyRenderingFiber$1.flags |= Update | Passive;
                pushEffect(HasEffect | Passive$1, function() {
                    setId(makeId());
                }, undefined, null);
            }
            return id;
        } else {
            var _id = makeId();
            mountState(_id);
            return _id;
        }
    }
    function updateOpaqueIdentifier() {
        var id = updateState()[0];
        return id;
    }
    function rerenderOpaqueIdentifier() {
        var id = rerenderState()[0];
        return id;
    }
    function dispatchAction(fiber, queue, action) {
        {
            if (typeof arguments[3] === "function") {
                error1("State updates from the useState() and useReducer() Hooks don't support the " + "second callback argument. To execute a side effect after " + "rendering, declare it in the component body with useEffect().");
            }
        }
        var eventTime = requestEventTime();
        var lane = requestUpdateLane(fiber);
        var update = {
            lane: lane,
            action: action,
            eagerReducer: null,
            eagerState: null,
            next: null
        };
        var pending = queue.pending;
        if (pending === null) {
            update.next = update;
        } else {
            update.next = pending.next;
            pending.next = update;
        }
        queue.pending = update;
        var alternate = fiber.alternate;
        if (fiber === currentlyRenderingFiber$1 || alternate !== null && alternate === currentlyRenderingFiber$1) {
            didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = true;
        } else {
            if (fiber.lanes === NoLanes && (alternate === null || alternate.lanes === NoLanes)) {
                var lastRenderedReducer = queue.lastRenderedReducer;
                if (lastRenderedReducer !== null) {
                    var prevDispatcher;
                    {
                        prevDispatcher = ReactCurrentDispatcher$1.current;
                        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                    }
                    try {
                        var currentState = queue.lastRenderedState;
                        var eagerState = lastRenderedReducer(currentState, action);
                        update.eagerReducer = lastRenderedReducer;
                        update.eagerState = eagerState;
                        if (objectIs(eagerState, currentState)) {
                            return;
                        }
                    } catch (error) {} finally{
                        {
                            ReactCurrentDispatcher$1.current = prevDispatcher;
                        }
                    }
                }
            }
            {
                if ("undefined" !== typeof jest) {
                    warnIfNotScopedWithMatchingAct(fiber);
                    warnIfNotCurrentlyActingUpdatesInDev(fiber);
                }
            }
            scheduleUpdateOnFiber(fiber, lane, eventTime);
        }
    }
    var ContextOnlyDispatcher = {
        readContext: readContext,
        useCallback: throwInvalidHookError,
        useContext: throwInvalidHookError,
        useEffect: throwInvalidHookError,
        useImperativeHandle: throwInvalidHookError,
        useLayoutEffect: throwInvalidHookError,
        useMemo: throwInvalidHookError,
        useReducer: throwInvalidHookError,
        useRef: throwInvalidHookError,
        useState: throwInvalidHookError,
        useDebugValue: throwInvalidHookError,
        useDeferredValue: throwInvalidHookError,
        useTransition: throwInvalidHookError,
        useMutableSource: throwInvalidHookError,
        useOpaqueIdentifier: throwInvalidHookError,
        unstable_isNewReconciler: enableNewReconciler
    };
    var HooksDispatcherOnMountInDEV = null;
    var HooksDispatcherOnMountWithHookTypesInDEV = null;
    var HooksDispatcherOnUpdateInDEV = null;
    var HooksDispatcherOnRerenderInDEV = null;
    var InvalidNestedHooksDispatcherOnMountInDEV = null;
    var InvalidNestedHooksDispatcherOnUpdateInDEV = null;
    var InvalidNestedHooksDispatcherOnRerenderInDEV = null;
    {
        var warnInvalidContextAccess = function() {
            error1("Context can only be read while React is rendering. " + "In classes, you can read it in the render method or getDerivedStateFromProps. " + "In function components, you can read it directly in the function body, but not " + "inside Hooks like useReducer() or useMemo().");
        };
        var warnInvalidHookAccess = function() {
            error1("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. " + "You can only call Hooks at the top level of your React function. " + "For more information, see " + "https://reactjs.org/link/rules-of-hooks");
        };
        HooksDispatcherOnMountInDEV = {
            readContext: function(context, observedBits) {
                return readContext(context, observedBits);
            },
            useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                mountHookTypesDev();
                checkDepsAreArrayDev(deps);
                return mountCallback(callback, deps);
            },
            useContext: function(context, observedBits) {
                currentHookNameInDev = "useContext";
                mountHookTypesDev();
                return readContext(context, observedBits);
            },
            useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                mountHookTypesDev();
                checkDepsAreArrayDev(deps);
                return mountEffect(create, deps);
            },
            useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                mountHookTypesDev();
                checkDepsAreArrayDev(deps);
                return mountImperativeHandle(ref, create, deps);
            },
            useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                mountHookTypesDev();
                checkDepsAreArrayDev(deps);
                return mountLayoutEffect(create, deps);
            },
            useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                mountHookTypesDev();
                checkDepsAreArrayDev(deps);
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                    return mountMemo(create, deps);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                mountHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                    return mountReducer(reducer, initialArg, init);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                mountHookTypesDev();
                return mountRef(initialValue);
            },
            useState: function(initialState) {
                currentHookNameInDev = "useState";
                mountHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                    return mountState(initialState);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                mountHookTypesDev();
                return mountDebugValue();
            },
            useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                mountHookTypesDev();
                return mountDeferredValue(value);
            },
            useTransition: function() {
                currentHookNameInDev = "useTransition";
                mountHookTypesDev();
                return mountTransition();
            },
            useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                mountHookTypesDev();
                return mountMutableSource(source, getSnapshot, subscribe);
            },
            useOpaqueIdentifier: function() {
                currentHookNameInDev = "useOpaqueIdentifier";
                mountHookTypesDev();
                return mountOpaqueIdentifier();
            },
            unstable_isNewReconciler: enableNewReconciler
        };
        HooksDispatcherOnMountWithHookTypesInDEV = {
            readContext: function(context, observedBits) {
                return readContext(context, observedBits);
            },
            useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                updateHookTypesDev();
                return mountCallback(callback, deps);
            },
            useContext: function(context, observedBits) {
                currentHookNameInDev = "useContext";
                updateHookTypesDev();
                return readContext(context, observedBits);
            },
            useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                updateHookTypesDev();
                return mountEffect(create, deps);
            },
            useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                updateHookTypesDev();
                return mountImperativeHandle(ref, create, deps);
            },
            useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                updateHookTypesDev();
                return mountLayoutEffect(create, deps);
            },
            useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                    return mountMemo(create, deps);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                    return mountReducer(reducer, initialArg, init);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                updateHookTypesDev();
                return mountRef(initialValue);
            },
            useState: function(initialState) {
                currentHookNameInDev = "useState";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                    return mountState(initialState);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                updateHookTypesDev();
                return mountDebugValue();
            },
            useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                updateHookTypesDev();
                return mountDeferredValue(value);
            },
            useTransition: function() {
                currentHookNameInDev = "useTransition";
                updateHookTypesDev();
                return mountTransition();
            },
            useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                updateHookTypesDev();
                return mountMutableSource(source, getSnapshot, subscribe);
            },
            useOpaqueIdentifier: function() {
                currentHookNameInDev = "useOpaqueIdentifier";
                updateHookTypesDev();
                return mountOpaqueIdentifier();
            },
            unstable_isNewReconciler: enableNewReconciler
        };
        HooksDispatcherOnUpdateInDEV = {
            readContext: function(context, observedBits) {
                return readContext(context, observedBits);
            },
            useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                updateHookTypesDev();
                return updateCallback(callback, deps);
            },
            useContext: function(context, observedBits) {
                currentHookNameInDev = "useContext";
                updateHookTypesDev();
                return readContext(context, observedBits);
            },
            useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                updateHookTypesDev();
                return updateEffect(create, deps);
            },
            useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                updateHookTypesDev();
                return updateImperativeHandle(ref, create, deps);
            },
            useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                updateHookTypesDev();
                return updateLayoutEffect(create, deps);
            },
            useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                    return updateMemo(create, deps);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                    return updateReducer(reducer, initialArg, init);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                updateHookTypesDev();
                return updateRef();
            },
            useState: function(initialState) {
                currentHookNameInDev = "useState";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                    return updateState(initialState);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                updateHookTypesDev();
                return updateDebugValue();
            },
            useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                updateHookTypesDev();
                return updateDeferredValue(value);
            },
            useTransition: function() {
                currentHookNameInDev = "useTransition";
                updateHookTypesDev();
                return updateTransition();
            },
            useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                updateHookTypesDev();
                return updateMutableSource(source, getSnapshot, subscribe);
            },
            useOpaqueIdentifier: function() {
                currentHookNameInDev = "useOpaqueIdentifier";
                updateHookTypesDev();
                return updateOpaqueIdentifier();
            },
            unstable_isNewReconciler: enableNewReconciler
        };
        HooksDispatcherOnRerenderInDEV = {
            readContext: function(context, observedBits) {
                return readContext(context, observedBits);
            },
            useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                updateHookTypesDev();
                return updateCallback(callback, deps);
            },
            useContext: function(context, observedBits) {
                currentHookNameInDev = "useContext";
                updateHookTypesDev();
                return readContext(context, observedBits);
            },
            useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                updateHookTypesDev();
                return updateEffect(create, deps);
            },
            useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                updateHookTypesDev();
                return updateImperativeHandle(ref, create, deps);
            },
            useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                updateHookTypesDev();
                return updateLayoutEffect(create, deps);
            },
            useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
                try {
                    return updateMemo(create, deps);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
                try {
                    return rerenderReducer(reducer, initialArg, init);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                updateHookTypesDev();
                return updateRef();
            },
            useState: function(initialState) {
                currentHookNameInDev = "useState";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
                try {
                    return rerenderState(initialState);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                updateHookTypesDev();
                return updateDebugValue();
            },
            useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                updateHookTypesDev();
                return rerenderDeferredValue(value);
            },
            useTransition: function() {
                currentHookNameInDev = "useTransition";
                updateHookTypesDev();
                return rerenderTransition();
            },
            useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                updateHookTypesDev();
                return updateMutableSource(source, getSnapshot, subscribe);
            },
            useOpaqueIdentifier: function() {
                currentHookNameInDev = "useOpaqueIdentifier";
                updateHookTypesDev();
                return rerenderOpaqueIdentifier();
            },
            unstable_isNewReconciler: enableNewReconciler
        };
        InvalidNestedHooksDispatcherOnMountInDEV = {
            readContext: function(context, observedBits) {
                warnInvalidContextAccess();
                return readContext(context, observedBits);
            },
            useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountCallback(callback, deps);
            },
            useContext: function(context, observedBits) {
                currentHookNameInDev = "useContext";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return readContext(context, observedBits);
            },
            useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountEffect(create, deps);
            },
            useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountImperativeHandle(ref, create, deps);
            },
            useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountLayoutEffect(create, deps);
            },
            useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                warnInvalidHookAccess();
                mountHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                    return mountMemo(create, deps);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                warnInvalidHookAccess();
                mountHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                    return mountReducer(reducer, initialArg, init);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountRef(initialValue);
            },
            useState: function(initialState) {
                currentHookNameInDev = "useState";
                warnInvalidHookAccess();
                mountHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                    return mountState(initialState);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountDebugValue();
            },
            useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountDeferredValue(value);
            },
            useTransition: function() {
                currentHookNameInDev = "useTransition";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountTransition();
            },
            useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountMutableSource(source, getSnapshot, subscribe);
            },
            useOpaqueIdentifier: function() {
                currentHookNameInDev = "useOpaqueIdentifier";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountOpaqueIdentifier();
            },
            unstable_isNewReconciler: enableNewReconciler
        };
        InvalidNestedHooksDispatcherOnUpdateInDEV = {
            readContext: function(context, observedBits) {
                warnInvalidContextAccess();
                return readContext(context, observedBits);
            },
            useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateCallback(callback, deps);
            },
            useContext: function(context, observedBits) {
                currentHookNameInDev = "useContext";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return readContext(context, observedBits);
            },
            useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateEffect(create, deps);
            },
            useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateImperativeHandle(ref, create, deps);
            },
            useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateLayoutEffect(create, deps);
            },
            useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                warnInvalidHookAccess();
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                    return updateMemo(create, deps);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                warnInvalidHookAccess();
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                    return updateReducer(reducer, initialArg, init);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateRef();
            },
            useState: function(initialState) {
                currentHookNameInDev = "useState";
                warnInvalidHookAccess();
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                    return updateState(initialState);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateDebugValue();
            },
            useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateDeferredValue(value);
            },
            useTransition: function() {
                currentHookNameInDev = "useTransition";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateTransition();
            },
            useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateMutableSource(source, getSnapshot, subscribe);
            },
            useOpaqueIdentifier: function() {
                currentHookNameInDev = "useOpaqueIdentifier";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateOpaqueIdentifier();
            },
            unstable_isNewReconciler: enableNewReconciler
        };
        InvalidNestedHooksDispatcherOnRerenderInDEV = {
            readContext: function(context, observedBits) {
                warnInvalidContextAccess();
                return readContext(context, observedBits);
            },
            useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateCallback(callback, deps);
            },
            useContext: function(context, observedBits) {
                currentHookNameInDev = "useContext";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return readContext(context, observedBits);
            },
            useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateEffect(create, deps);
            },
            useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateImperativeHandle(ref, create, deps);
            },
            useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateLayoutEffect(create, deps);
            },
            useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                warnInvalidHookAccess();
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                    return updateMemo(create, deps);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                warnInvalidHookAccess();
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                    return rerenderReducer(reducer, initialArg, init);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateRef();
            },
            useState: function(initialState) {
                currentHookNameInDev = "useState";
                warnInvalidHookAccess();
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                    return rerenderState(initialState);
                } finally{
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                }
            },
            useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateDebugValue();
            },
            useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return rerenderDeferredValue(value);
            },
            useTransition: function() {
                currentHookNameInDev = "useTransition";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return rerenderTransition();
            },
            useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateMutableSource(source, getSnapshot, subscribe);
            },
            useOpaqueIdentifier: function() {
                currentHookNameInDev = "useOpaqueIdentifier";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return rerenderOpaqueIdentifier();
            },
            unstable_isNewReconciler: enableNewReconciler
        };
    }
    var now$1 = Scheduler.unstable_now;
    var commitTime1 = 0;
    var profilerStartTime = -1;
    function getCommitTime() {
        return commitTime1;
    }
    function recordCommitTime() {
        commitTime1 = now$1();
    }
    function startProfilerTimer(fiber) {
        profilerStartTime = now$1();
        if (fiber.actualStartTime < 0) {
            fiber.actualStartTime = now$1();
        }
    }
    function stopProfilerTimerIfRunning(fiber) {
        profilerStartTime = -1;
    }
    function stopProfilerTimerIfRunningAndRecordDelta(fiber, overrideBaseTime) {
        if (profilerStartTime >= 0) {
            var elapsedTime = now$1() - profilerStartTime;
            fiber.actualDuration += elapsedTime;
            if (overrideBaseTime) {
                fiber.selfBaseDuration = elapsedTime;
            }
            profilerStartTime = -1;
        }
    }
    function transferActualDuration(fiber) {
        var child = fiber.child;
        while(child){
            fiber.actualDuration += child.actualDuration;
            child = child.sibling;
        }
    }
    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
    var didReceiveUpdate = false;
    var didWarnAboutBadClass;
    var didWarnAboutModulePatternComponent;
    var didWarnAboutContextTypeOnFunctionComponent;
    var didWarnAboutGetDerivedStateOnFunctionComponent;
    var didWarnAboutFunctionRefs;
    var didWarnAboutReassigningProps;
    var didWarnAboutRevealOrder;
    var didWarnAboutTailOptions;
    {
        didWarnAboutBadClass = {};
        didWarnAboutModulePatternComponent = {};
        didWarnAboutContextTypeOnFunctionComponent = {};
        didWarnAboutGetDerivedStateOnFunctionComponent = {};
        didWarnAboutFunctionRefs = {};
        didWarnAboutReassigningProps = false;
        didWarnAboutRevealOrder = {};
        didWarnAboutTailOptions = {};
    }
    function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
        if (current === null) {
            workInProgress.child = mountChildFibers(workInProgress, null, nextChildren, renderLanes);
        } else {
            workInProgress.child = reconcileChildFibers1(workInProgress, current.child, nextChildren, renderLanes);
        }
    }
    function forceUnmountCurrentAndReconcile(current, workInProgress, nextChildren, renderLanes) {
        workInProgress.child = reconcileChildFibers1(workInProgress, current.child, null, renderLanes);
        workInProgress.child = reconcileChildFibers1(workInProgress, null, nextChildren, renderLanes);
    }
    function updateForwardRef(current, workInProgress, Component6, nextProps, renderLanes) {
        {
            if (workInProgress.type !== workInProgress.elementType) {
                var innerPropTypes = Component6.propTypes;
                if (innerPropTypes) {
                    checkPropTypes(innerPropTypes, nextProps, "prop", getComponentName(Component6));
                }
            }
        }
        var render2 = Component6.render;
        var ref = workInProgress.ref;
        var nextChildren;
        prepareToReadContext(workInProgress, renderLanes);
        {
            ReactCurrentOwner$1.current = workInProgress;
            setIsRendering(true);
            nextChildren = renderWithHooks(current, workInProgress, render2, nextProps, ref, renderLanes);
            if (workInProgress.mode & StrictMode1) {
                disableLogs();
                try {
                    nextChildren = renderWithHooks(current, workInProgress, render2, nextProps, ref, renderLanes);
                } finally{
                    reenableLogs();
                }
            }
            setIsRendering(false);
        }
        if (current !== null && !didReceiveUpdate) {
            bailoutHooks(current, workInProgress, renderLanes);
            return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
        }
        workInProgress.flags |= PerformedWork;
        reconcileChildren(current, workInProgress, nextChildren, renderLanes);
        return workInProgress.child;
    }
    function updateMemoComponent(current, workInProgress, Component7, nextProps, updateLanes, renderLanes) {
        if (current === null) {
            var type = Component7.type;
            if (isSimpleFunctionComponent(type) && Component7.compare === null && Component7.defaultProps === undefined) {
                var resolvedType = type;
                {
                    resolvedType = resolveFunctionForHotReloading(type);
                }
                workInProgress.tag = SimpleMemoComponent;
                workInProgress.type = resolvedType;
                {
                    validateFunctionComponentInDev(workInProgress, type);
                }
                return updateSimpleMemoComponent(current, workInProgress, resolvedType, nextProps, updateLanes, renderLanes);
            }
            {
                var innerPropTypes = type.propTypes;
                if (innerPropTypes) {
                    checkPropTypes(innerPropTypes, nextProps, "prop", getComponentName(type));
                }
            }
            var child = createFiberFromTypeAndProps(Component7.type, null, nextProps, workInProgress, workInProgress.mode, renderLanes);
            child.ref = workInProgress.ref;
            child.return = workInProgress;
            workInProgress.child = child;
            return child;
        }
        {
            var _type = Component7.type;
            var _innerPropTypes = _type.propTypes;
            if (_innerPropTypes) {
                checkPropTypes(_innerPropTypes, nextProps, "prop", getComponentName(_type));
            }
        }
        var currentChild = current.child;
        if (!includesSomeLane(updateLanes, renderLanes)) {
            var prevProps = currentChild.memoizedProps;
            var compare = Component7.compare;
            compare = compare !== null ? compare : shallowEqual;
            if (compare(prevProps, nextProps) && current.ref === workInProgress.ref) {
                return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
            }
        }
        workInProgress.flags |= PerformedWork;
        var newChild = createWorkInProgress(currentChild, nextProps);
        newChild.ref = workInProgress.ref;
        newChild.return = workInProgress;
        workInProgress.child = newChild;
        return newChild;
    }
    function updateSimpleMemoComponent(current, workInProgress, Component8, nextProps, updateLanes, renderLanes) {
        {
            if (workInProgress.type !== workInProgress.elementType) {
                var outerMemoType = workInProgress.elementType;
                if (outerMemoType.$$typeof === REACT_LAZY_TYPE) {
                    var lazyComponent = outerMemoType;
                    var payload = lazyComponent._payload;
                    var init = lazyComponent._init;
                    try {
                        outerMemoType = init(payload);
                    } catch (x) {
                        outerMemoType = null;
                    }
                    var outerPropTypes = outerMemoType && outerMemoType.propTypes;
                    if (outerPropTypes) {
                        checkPropTypes(outerPropTypes, nextProps, "prop", getComponentName(outerMemoType));
                    }
                }
            }
        }
        if (current !== null) {
            var prevProps = current.memoizedProps;
            if (shallowEqual(prevProps, nextProps) && current.ref === workInProgress.ref && workInProgress.type === current.type) {
                didReceiveUpdate = false;
                if (!includesSomeLane(renderLanes, updateLanes)) {
                    workInProgress.lanes = current.lanes;
                    return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
                } else if ((current.flags & ForceUpdateForLegacySuspense) !== NoFlags) {
                    didReceiveUpdate = true;
                }
            }
        }
        return updateFunctionComponent(current, workInProgress, Component8, nextProps, renderLanes);
    }
    function updateOffscreenComponent(current, workInProgress, renderLanes) {
        var nextProps = workInProgress.pendingProps;
        var nextChildren = nextProps.children;
        var prevState = current !== null ? current.memoizedState : null;
        if (nextProps.mode === "hidden" || nextProps.mode === "unstable-defer-without-hiding") {
            if ((workInProgress.mode & ConcurrentMode) === NoMode) {
                var nextState = {
                    baseLanes: NoLanes
                };
                workInProgress.memoizedState = nextState;
                pushRenderLanes(workInProgress, renderLanes);
            } else if (!includesSomeLane(renderLanes, OffscreenLane)) {
                var nextBaseLanes;
                if (prevState !== null) {
                    var prevBaseLanes = prevState.baseLanes;
                    nextBaseLanes = mergeLanes(prevBaseLanes, renderLanes);
                } else {
                    nextBaseLanes = renderLanes;
                }
                {
                    markSpawnedWork(OffscreenLane);
                }
                workInProgress.lanes = workInProgress.childLanes = laneToLanes(OffscreenLane);
                var _nextState = {
                    baseLanes: nextBaseLanes
                };
                workInProgress.memoizedState = _nextState;
                pushRenderLanes(workInProgress, nextBaseLanes);
                return null;
            } else {
                var _nextState2 = {
                    baseLanes: NoLanes
                };
                workInProgress.memoizedState = _nextState2;
                var subtreeRenderLanes = prevState !== null ? prevState.baseLanes : renderLanes;
                pushRenderLanes(workInProgress, subtreeRenderLanes);
            }
        } else {
            var _subtreeRenderLanes;
            if (prevState !== null) {
                _subtreeRenderLanes = mergeLanes(prevState.baseLanes, renderLanes);
                workInProgress.memoizedState = null;
            } else {
                _subtreeRenderLanes = renderLanes;
            }
            pushRenderLanes(workInProgress, _subtreeRenderLanes);
        }
        reconcileChildren(current, workInProgress, nextChildren, renderLanes);
        return workInProgress.child;
    }
    var updateLegacyHiddenComponent = updateOffscreenComponent;
    function updateFragment1(current, workInProgress, renderLanes) {
        var nextChildren = workInProgress.pendingProps;
        reconcileChildren(current, workInProgress, nextChildren, renderLanes);
        return workInProgress.child;
    }
    function updateMode(current, workInProgress, renderLanes) {
        var nextChildren = workInProgress.pendingProps.children;
        reconcileChildren(current, workInProgress, nextChildren, renderLanes);
        return workInProgress.child;
    }
    function updateProfiler(current, workInProgress, renderLanes) {
        {
            workInProgress.flags |= Update;
            var stateNode = workInProgress.stateNode;
            stateNode.effectDuration = 0;
            stateNode.passiveEffectDuration = 0;
        }
        var nextProps = workInProgress.pendingProps;
        var nextChildren = nextProps.children;
        reconcileChildren(current, workInProgress, nextChildren, renderLanes);
        return workInProgress.child;
    }
    function markRef(current, workInProgress) {
        var ref = workInProgress.ref;
        if (current === null && ref !== null || current !== null && current.ref !== ref) {
            workInProgress.flags |= Ref;
        }
    }
    function updateFunctionComponent(current, workInProgress, Component9, nextProps, renderLanes) {
        {
            if (workInProgress.type !== workInProgress.elementType) {
                var innerPropTypes = Component9.propTypes;
                if (innerPropTypes) {
                    checkPropTypes(innerPropTypes, nextProps, "prop", getComponentName(Component9));
                }
            }
        }
        var context;
        {
            var unmaskedContext = getUnmaskedContext(workInProgress, Component9, true);
            context = getMaskedContext(workInProgress, unmaskedContext);
        }
        var nextChildren;
        prepareToReadContext(workInProgress, renderLanes);
        {
            ReactCurrentOwner$1.current = workInProgress;
            setIsRendering(true);
            nextChildren = renderWithHooks(current, workInProgress, Component9, nextProps, context, renderLanes);
            if (workInProgress.mode & StrictMode1) {
                disableLogs();
                try {
                    nextChildren = renderWithHooks(current, workInProgress, Component9, nextProps, context, renderLanes);
                } finally{
                    reenableLogs();
                }
            }
            setIsRendering(false);
        }
        if (current !== null && !didReceiveUpdate) {
            bailoutHooks(current, workInProgress, renderLanes);
            return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
        }
        workInProgress.flags |= PerformedWork;
        reconcileChildren(current, workInProgress, nextChildren, renderLanes);
        return workInProgress.child;
    }
    function updateClassComponent(current, workInProgress, Component10, nextProps, renderLanes) {
        {
            if (workInProgress.type !== workInProgress.elementType) {
                var innerPropTypes = Component10.propTypes;
                if (innerPropTypes) {
                    checkPropTypes(innerPropTypes, nextProps, "prop", getComponentName(Component10));
                }
            }
        }
        var hasContext;
        if (isContextProvider(Component10)) {
            hasContext = true;
            pushContextProvider(workInProgress);
        } else {
            hasContext = false;
        }
        prepareToReadContext(workInProgress, renderLanes);
        var instance = workInProgress.stateNode;
        var shouldUpdate;
        if (instance === null) {
            if (current !== null) {
                current.alternate = null;
                workInProgress.alternate = null;
                workInProgress.flags |= Placement;
            }
            constructClassInstance(workInProgress, Component10, nextProps);
            mountClassInstance(workInProgress, Component10, nextProps, renderLanes);
            shouldUpdate = true;
        } else if (current === null) {
            shouldUpdate = resumeMountClassInstance(workInProgress, Component10, nextProps, renderLanes);
        } else {
            shouldUpdate = updateClassInstance(current, workInProgress, Component10, nextProps, renderLanes);
        }
        var nextUnitOfWork = finishClassComponent(current, workInProgress, Component10, shouldUpdate, hasContext, renderLanes);
        {
            var inst = workInProgress.stateNode;
            if (shouldUpdate && inst.props !== nextProps) {
                if (!didWarnAboutReassigningProps) {
                    error1("It looks like %s is reassigning its own `this.props` while rendering. " + "This is not supported and can lead to confusing bugs.", getComponentName(workInProgress.type) || "a component");
                }
                didWarnAboutReassigningProps = true;
            }
        }
        return nextUnitOfWork;
    }
    function finishClassComponent(current, workInProgress, Component11, shouldUpdate, hasContext, renderLanes) {
        markRef(current, workInProgress);
        var didCaptureError = (workInProgress.flags & DidCapture) !== NoFlags;
        if (!shouldUpdate && !didCaptureError) {
            if (hasContext) {
                invalidateContextProvider(workInProgress, Component11, false);
            }
            return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
        }
        var instance = workInProgress.stateNode;
        ReactCurrentOwner$1.current = workInProgress;
        var nextChildren;
        if (didCaptureError && typeof Component11.getDerivedStateFromError !== "function") {
            nextChildren = null;
            {
                stopProfilerTimerIfRunning();
            }
        } else {
            {
                setIsRendering(true);
                nextChildren = instance.render();
                if (workInProgress.mode & StrictMode1) {
                    disableLogs();
                    try {
                        instance.render();
                    } finally{
                        reenableLogs();
                    }
                }
                setIsRendering(false);
            }
        }
        workInProgress.flags |= PerformedWork;
        if (current !== null && didCaptureError) {
            forceUnmountCurrentAndReconcile(current, workInProgress, nextChildren, renderLanes);
        } else {
            reconcileChildren(current, workInProgress, nextChildren, renderLanes);
        }
        workInProgress.memoizedState = instance.state;
        if (hasContext) {
            invalidateContextProvider(workInProgress, Component11, true);
        }
        return workInProgress.child;
    }
    function pushHostRootContext(workInProgress) {
        var root = workInProgress.stateNode;
        if (root.pendingContext) {
            pushTopLevelContextObject(workInProgress, root.pendingContext, root.pendingContext !== root.context);
        } else if (root.context) {
            pushTopLevelContextObject(workInProgress, root.context, false);
        }
        pushHostContainer(workInProgress, root.containerInfo);
    }
    function updateHostRoot(current, workInProgress, renderLanes) {
        pushHostRootContext(workInProgress);
        var updateQueue = workInProgress.updateQueue;
        if (!(current !== null && updateQueue !== null)) {
            {
                throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");
            }
        }
        var nextProps = workInProgress.pendingProps;
        var prevState = workInProgress.memoizedState;
        var prevChildren = prevState !== null ? prevState.element : null;
        cloneUpdateQueue(current, workInProgress);
        processUpdateQueue(workInProgress, nextProps, null, renderLanes);
        var nextState = workInProgress.memoizedState;
        var nextChildren = nextState.element;
        if (nextChildren === prevChildren) {
            resetHydrationState();
            return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
        }
        var root = workInProgress.stateNode;
        if (root.hydrate && enterHydrationState(workInProgress)) {
            {
                var mutableSourceEagerHydrationData = root.mutableSourceEagerHydrationData;
                if (mutableSourceEagerHydrationData != null) {
                    for(var i = 0; i < mutableSourceEagerHydrationData.length; i += 2){
                        var mutableSource = mutableSourceEagerHydrationData[i];
                        var version4 = mutableSourceEagerHydrationData[i + 1];
                        setWorkInProgressVersion(mutableSource, version4);
                    }
                }
            }
            var child = mountChildFibers(workInProgress, null, nextChildren, renderLanes);
            workInProgress.child = child;
            var node = child;
            while(node){
                node.flags = node.flags & ~Placement | Hydrating;
                node = node.sibling;
            }
        } else {
            reconcileChildren(current, workInProgress, nextChildren, renderLanes);
            resetHydrationState();
        }
        return workInProgress.child;
    }
    function updateHostComponent(current, workInProgress, renderLanes) {
        pushHostContext(workInProgress);
        if (current === null) {
            tryToClaimNextHydratableInstance(workInProgress);
        }
        var type = workInProgress.type;
        var nextProps = workInProgress.pendingProps;
        var prevProps = current !== null ? current.memoizedProps : null;
        var nextChildren = nextProps.children;
        var isDirectTextChild = shouldSetTextContent(type, nextProps);
        if (isDirectTextChild) {
            nextChildren = null;
        } else if (prevProps !== null && shouldSetTextContent(type, prevProps)) {
            workInProgress.flags |= ContentReset;
        }
        markRef(current, workInProgress);
        reconcileChildren(current, workInProgress, nextChildren, renderLanes);
        return workInProgress.child;
    }
    function updateHostText(current, workInProgress) {
        if (current === null) {
            tryToClaimNextHydratableInstance(workInProgress);
        }
        return null;
    }
    function mountLazyComponent(_current, workInProgress, elementType, updateLanes, renderLanes) {
        if (_current !== null) {
            _current.alternate = null;
            workInProgress.alternate = null;
            workInProgress.flags |= Placement;
        }
        var props = workInProgress.pendingProps;
        var lazyComponent = elementType;
        var payload = lazyComponent._payload;
        var init = lazyComponent._init;
        var Component12 = init(payload);
        workInProgress.type = Component12;
        var resolvedTag = workInProgress.tag = resolveLazyComponentTag(Component12);
        var resolvedProps = resolveDefaultProps(Component12, props);
        var child;
        switch(resolvedTag){
            case FunctionComponent:
                {
                    {
                        validateFunctionComponentInDev(workInProgress, Component12);
                        workInProgress.type = Component12 = resolveFunctionForHotReloading(Component12);
                    }
                    child = updateFunctionComponent(null, workInProgress, Component12, resolvedProps, renderLanes);
                    return child;
                }
            case ClassComponent:
                {
                    {
                        workInProgress.type = Component12 = resolveClassForHotReloading(Component12);
                    }
                    child = updateClassComponent(null, workInProgress, Component12, resolvedProps, renderLanes);
                    return child;
                }
            case ForwardRef:
                {
                    {
                        workInProgress.type = Component12 = resolveForwardRefForHotReloading(Component12);
                    }
                    child = updateForwardRef(null, workInProgress, Component12, resolvedProps, renderLanes);
                    return child;
                }
            case MemoComponent:
                {
                    {
                        if (workInProgress.type !== workInProgress.elementType) {
                            var outerPropTypes = Component12.propTypes;
                            if (outerPropTypes) {
                                checkPropTypes(outerPropTypes, resolvedProps, "prop", getComponentName(Component12));
                            }
                        }
                    }
                    child = updateMemoComponent(null, workInProgress, Component12, resolveDefaultProps(Component12.type, resolvedProps), updateLanes, renderLanes);
                    return child;
                }
        }
        var hint = "";
        {
            if (Component12 !== null && typeof Component12 === "object" && Component12.$$typeof === REACT_LAZY_TYPE) {
                hint = " Did you wrap a component in React.lazy() more than once?";
            }
        }
        {
            {
                throw Error("Element type is invalid. Received a promise that resolves to: " + Component12 + ". Lazy element type must resolve to a class or function." + hint);
            }
        }
    }
    function mountIncompleteClassComponent(_current, workInProgress, Component13, nextProps, renderLanes) {
        if (_current !== null) {
            _current.alternate = null;
            workInProgress.alternate = null;
            workInProgress.flags |= Placement;
        }
        workInProgress.tag = ClassComponent;
        var hasContext;
        if (isContextProvider(Component13)) {
            hasContext = true;
            pushContextProvider(workInProgress);
        } else {
            hasContext = false;
        }
        prepareToReadContext(workInProgress, renderLanes);
        constructClassInstance(workInProgress, Component13, nextProps);
        mountClassInstance(workInProgress, Component13, nextProps, renderLanes);
        return finishClassComponent(null, workInProgress, Component13, true, hasContext, renderLanes);
    }
    function mountIndeterminateComponent(_current, workInProgress, Component14, renderLanes) {
        if (_current !== null) {
            _current.alternate = null;
            workInProgress.alternate = null;
            workInProgress.flags |= Placement;
        }
        var props = workInProgress.pendingProps;
        var context;
        {
            var unmaskedContext = getUnmaskedContext(workInProgress, Component14, false);
            context = getMaskedContext(workInProgress, unmaskedContext);
        }
        prepareToReadContext(workInProgress, renderLanes);
        var value;
        {
            if (Component14.prototype && typeof Component14.prototype.render === "function") {
                var componentName = getComponentName(Component14) || "Unknown";
                if (!didWarnAboutBadClass[componentName]) {
                    error1("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + "This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName);
                    didWarnAboutBadClass[componentName] = true;
                }
            }
            if (workInProgress.mode & StrictMode1) {
                ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, null);
            }
            setIsRendering(true);
            ReactCurrentOwner$1.current = workInProgress;
            value = renderWithHooks(null, workInProgress, Component14, props, context, renderLanes);
            setIsRendering(false);
        }
        workInProgress.flags |= PerformedWork;
        {
            if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === undefined) {
                var _componentName = getComponentName(Component14) || "Unknown";
                if (!didWarnAboutModulePatternComponent[_componentName]) {
                    error1("The <%s /> component appears to be a function component that returns a class instance. " + "Change %s to a class that extends React.Component instead. " + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + "cannot be called with `new` by React.", _componentName, _componentName, _componentName);
                    didWarnAboutModulePatternComponent[_componentName] = true;
                }
            }
        }
        if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === undefined) {
            {
                var _componentName2 = getComponentName(Component14) || "Unknown";
                if (!didWarnAboutModulePatternComponent[_componentName2]) {
                    error1("The <%s /> component appears to be a function component that returns a class instance. " + "Change %s to a class that extends React.Component instead. " + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + "cannot be called with `new` by React.", _componentName2, _componentName2, _componentName2);
                    didWarnAboutModulePatternComponent[_componentName2] = true;
                }
            }
            workInProgress.tag = ClassComponent;
            workInProgress.memoizedState = null;
            workInProgress.updateQueue = null;
            var hasContext = false;
            if (isContextProvider(Component14)) {
                hasContext = true;
                pushContextProvider(workInProgress);
            } else {
                hasContext = false;
            }
            workInProgress.memoizedState = value.state !== null && value.state !== undefined ? value.state : null;
            initializeUpdateQueue(workInProgress);
            var getDerivedStateFromProps = Component14.getDerivedStateFromProps;
            if (typeof getDerivedStateFromProps === "function") {
                applyDerivedStateFromProps(workInProgress, Component14, getDerivedStateFromProps, props);
            }
            adoptClassInstance(workInProgress, value);
            mountClassInstance(workInProgress, Component14, props, renderLanes);
            return finishClassComponent(null, workInProgress, Component14, true, hasContext, renderLanes);
        } else {
            workInProgress.tag = FunctionComponent;
            {
                if (workInProgress.mode & StrictMode1) {
                    disableLogs();
                    try {
                        value = renderWithHooks(null, workInProgress, Component14, props, context, renderLanes);
                    } finally{
                        reenableLogs();
                    }
                }
            }
            reconcileChildren(null, workInProgress, value, renderLanes);
            {
                validateFunctionComponentInDev(workInProgress, Component14);
            }
            return workInProgress.child;
        }
    }
    function validateFunctionComponentInDev(workInProgress, Component15) {
        {
            if (Component15) {
                if (Component15.childContextTypes) {
                    error1("%s(...): childContextTypes cannot be defined on a function component.", Component15.displayName || Component15.name || "Component");
                }
            }
            if (workInProgress.ref !== null) {
                var info = "";
                var ownerName = getCurrentFiberOwnerNameInDevOrNull();
                if (ownerName) {
                    info += "\n\nCheck the render method of `" + ownerName + "`.";
                }
                var warningKey = ownerName || workInProgress._debugID || "";
                var debugSource = workInProgress._debugSource;
                if (debugSource) {
                    warningKey = debugSource.fileName + ":" + debugSource.lineNumber;
                }
                if (!didWarnAboutFunctionRefs[warningKey]) {
                    didWarnAboutFunctionRefs[warningKey] = true;
                    error1("Function components cannot be given refs. " + "Attempts to access this ref will fail. " + "Did you mean to use React.forwardRef()?%s", info);
                }
            }
            if (typeof Component15.getDerivedStateFromProps === "function") {
                var _componentName3 = getComponentName(Component15) || "Unknown";
                if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
                    error1("%s: Function components do not support getDerivedStateFromProps.", _componentName3);
                    didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
                }
            }
            if (typeof Component15.contextType === "object" && Component15.contextType !== null) {
                var _componentName4 = getComponentName(Component15) || "Unknown";
                if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
                    error1("%s: Function components do not support contextType.", _componentName4);
                    didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
                }
            }
        }
    }
    var SUSPENDED_MARKER = {
        dehydrated: null,
        retryLane: NoLane
    };
    function mountSuspenseOffscreenState(renderLanes) {
        return {
            baseLanes: renderLanes
        };
    }
    function updateSuspenseOffscreenState(prevOffscreenState, renderLanes) {
        return {
            baseLanes: mergeLanes(prevOffscreenState.baseLanes, renderLanes)
        };
    }
    function shouldRemainOnFallback(suspenseContext, current, workInProgress, renderLanes) {
        if (current !== null) {
            var suspenseState = current.memoizedState;
            if (suspenseState === null) {
                return false;
            }
        }
        return hasSuspenseContext(suspenseContext, ForceSuspenseFallback);
    }
    function getRemainingWorkInPrimaryTree(current, renderLanes) {
        return removeLanes(current.childLanes, renderLanes);
    }
    function updateSuspenseComponent(current, workInProgress, renderLanes) {
        var nextProps = workInProgress.pendingProps;
        {
            if (shouldSuspend(workInProgress)) {
                workInProgress.flags |= DidCapture;
            }
        }
        var suspenseContext = suspenseStackCursor.current;
        var showFallback = false;
        var didSuspend = (workInProgress.flags & DidCapture) !== NoFlags;
        if (didSuspend || shouldRemainOnFallback(suspenseContext, current)) {
            showFallback = true;
            workInProgress.flags &= ~DidCapture;
        } else {
            if (current === null || current.memoizedState !== null) {
                if (nextProps.fallback !== undefined && nextProps.unstable_avoidThisFallback !== true) {
                    suspenseContext = addSubtreeSuspenseContext(suspenseContext, InvisibleParentSuspenseContext);
                }
            }
        }
        suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
        pushSuspenseContext(workInProgress, suspenseContext);
        if (current === null) {
            if (nextProps.fallback !== undefined) {
                tryToClaimNextHydratableInstance(workInProgress);
            }
            var nextPrimaryChildren = nextProps.children;
            var nextFallbackChildren = nextProps.fallback;
            if (showFallback) {
                var fallbackFragment = mountSuspenseFallbackChildren(workInProgress, nextPrimaryChildren, nextFallbackChildren, renderLanes);
                var primaryChildFragment = workInProgress.child;
                primaryChildFragment.memoizedState = mountSuspenseOffscreenState(renderLanes);
                workInProgress.memoizedState = SUSPENDED_MARKER;
                return fallbackFragment;
            } else if (typeof nextProps.unstable_expectedLoadTime === "number") {
                var _fallbackFragment = mountSuspenseFallbackChildren(workInProgress, nextPrimaryChildren, nextFallbackChildren, renderLanes);
                var _primaryChildFragment = workInProgress.child;
                _primaryChildFragment.memoizedState = mountSuspenseOffscreenState(renderLanes);
                workInProgress.memoizedState = SUSPENDED_MARKER;
                workInProgress.lanes = SomeRetryLane;
                {
                    markSpawnedWork(SomeRetryLane);
                }
                return _fallbackFragment;
            } else {
                return mountSuspensePrimaryChildren(workInProgress, nextPrimaryChildren, renderLanes);
            }
        } else {
            var prevState = current.memoizedState;
            if (prevState !== null) {
                if (showFallback) {
                    var _nextFallbackChildren2 = nextProps.fallback;
                    var _nextPrimaryChildren2 = nextProps.children;
                    var _fallbackChildFragment = updateSuspenseFallbackChildren(current, workInProgress, _nextPrimaryChildren2, _nextFallbackChildren2, renderLanes);
                    var _primaryChildFragment3 = workInProgress.child;
                    var prevOffscreenState = current.child.memoizedState;
                    _primaryChildFragment3.memoizedState = prevOffscreenState === null ? mountSuspenseOffscreenState(renderLanes) : updateSuspenseOffscreenState(prevOffscreenState, renderLanes);
                    _primaryChildFragment3.childLanes = getRemainingWorkInPrimaryTree(current, renderLanes);
                    workInProgress.memoizedState = SUSPENDED_MARKER;
                    return _fallbackChildFragment;
                } else {
                    var _nextPrimaryChildren3 = nextProps.children;
                    var _primaryChildFragment4 = updateSuspensePrimaryChildren(current, workInProgress, _nextPrimaryChildren3, renderLanes);
                    workInProgress.memoizedState = null;
                    return _primaryChildFragment4;
                }
            } else {
                if (showFallback) {
                    var _nextFallbackChildren3 = nextProps.fallback;
                    var _nextPrimaryChildren4 = nextProps.children;
                    var _fallbackChildFragment2 = updateSuspenseFallbackChildren(current, workInProgress, _nextPrimaryChildren4, _nextFallbackChildren3, renderLanes);
                    var _primaryChildFragment5 = workInProgress.child;
                    var _prevOffscreenState = current.child.memoizedState;
                    _primaryChildFragment5.memoizedState = _prevOffscreenState === null ? mountSuspenseOffscreenState(renderLanes) : updateSuspenseOffscreenState(_prevOffscreenState, renderLanes);
                    _primaryChildFragment5.childLanes = getRemainingWorkInPrimaryTree(current, renderLanes);
                    workInProgress.memoizedState = SUSPENDED_MARKER;
                    return _fallbackChildFragment2;
                } else {
                    var _nextPrimaryChildren5 = nextProps.children;
                    var _primaryChildFragment6 = updateSuspensePrimaryChildren(current, workInProgress, _nextPrimaryChildren5, renderLanes);
                    workInProgress.memoizedState = null;
                    return _primaryChildFragment6;
                }
            }
        }
    }
    function mountSuspensePrimaryChildren(workInProgress, primaryChildren, renderLanes) {
        var mode = workInProgress.mode;
        var primaryChildProps = {
            mode: "visible",
            children: primaryChildren
        };
        var primaryChildFragment = createFiberFromOffscreen(primaryChildProps, mode, renderLanes, null);
        primaryChildFragment.return = workInProgress;
        workInProgress.child = primaryChildFragment;
        return primaryChildFragment;
    }
    function mountSuspenseFallbackChildren(workInProgress, primaryChildren, fallbackChildren, renderLanes) {
        var mode = workInProgress.mode;
        var progressedPrimaryFragment = workInProgress.child;
        var primaryChildProps = {
            mode: "hidden",
            children: primaryChildren
        };
        var primaryChildFragment;
        var fallbackChildFragment;
        if ((mode & BlockingMode) === NoMode && progressedPrimaryFragment !== null) {
            primaryChildFragment = progressedPrimaryFragment;
            primaryChildFragment.childLanes = NoLanes;
            primaryChildFragment.pendingProps = primaryChildProps;
            if (workInProgress.mode & ProfileMode) {
                primaryChildFragment.actualDuration = 0;
                primaryChildFragment.actualStartTime = -1;
                primaryChildFragment.selfBaseDuration = 0;
                primaryChildFragment.treeBaseDuration = 0;
            }
            fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes, null);
        } else {
            primaryChildFragment = createFiberFromOffscreen(primaryChildProps, mode, NoLanes, null);
            fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes, null);
        }
        primaryChildFragment.return = workInProgress;
        fallbackChildFragment.return = workInProgress;
        primaryChildFragment.sibling = fallbackChildFragment;
        workInProgress.child = primaryChildFragment;
        return fallbackChildFragment;
    }
    function createWorkInProgressOffscreenFiber(current, offscreenProps) {
        return createWorkInProgress(current, offscreenProps);
    }
    function updateSuspensePrimaryChildren(current, workInProgress, primaryChildren, renderLanes) {
        var currentPrimaryChildFragment = current.child;
        var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;
        var primaryChildFragment = createWorkInProgressOffscreenFiber(currentPrimaryChildFragment, {
            mode: "visible",
            children: primaryChildren
        });
        if ((workInProgress.mode & BlockingMode) === NoMode) {
            primaryChildFragment.lanes = renderLanes;
        }
        primaryChildFragment.return = workInProgress;
        primaryChildFragment.sibling = null;
        if (currentFallbackChildFragment !== null) {
            currentFallbackChildFragment.nextEffect = null;
            currentFallbackChildFragment.flags = Deletion;
            workInProgress.firstEffect = workInProgress.lastEffect = currentFallbackChildFragment;
        }
        workInProgress.child = primaryChildFragment;
        return primaryChildFragment;
    }
    function updateSuspenseFallbackChildren(current, workInProgress, primaryChildren, fallbackChildren, renderLanes) {
        var mode = workInProgress.mode;
        var currentPrimaryChildFragment = current.child;
        var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;
        var primaryChildProps = {
            mode: "hidden",
            children: primaryChildren
        };
        var primaryChildFragment;
        if ((mode & BlockingMode) === NoMode && workInProgress.child !== currentPrimaryChildFragment) {
            var progressedPrimaryFragment = workInProgress.child;
            primaryChildFragment = progressedPrimaryFragment;
            primaryChildFragment.childLanes = NoLanes;
            primaryChildFragment.pendingProps = primaryChildProps;
            if (workInProgress.mode & ProfileMode) {
                primaryChildFragment.actualDuration = 0;
                primaryChildFragment.actualStartTime = -1;
                primaryChildFragment.selfBaseDuration = currentPrimaryChildFragment.selfBaseDuration;
                primaryChildFragment.treeBaseDuration = currentPrimaryChildFragment.treeBaseDuration;
            }
            var progressedLastEffect = primaryChildFragment.lastEffect;
            if (progressedLastEffect !== null) {
                workInProgress.firstEffect = primaryChildFragment.firstEffect;
                workInProgress.lastEffect = progressedLastEffect;
                progressedLastEffect.nextEffect = null;
            } else {
                workInProgress.firstEffect = workInProgress.lastEffect = null;
            }
        } else {
            primaryChildFragment = createWorkInProgressOffscreenFiber(currentPrimaryChildFragment, primaryChildProps);
        }
        var fallbackChildFragment;
        if (currentFallbackChildFragment !== null) {
            fallbackChildFragment = createWorkInProgress(currentFallbackChildFragment, fallbackChildren);
        } else {
            fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes, null);
            fallbackChildFragment.flags |= Placement;
        }
        fallbackChildFragment.return = workInProgress;
        primaryChildFragment.return = workInProgress;
        primaryChildFragment.sibling = fallbackChildFragment;
        workInProgress.child = primaryChildFragment;
        return fallbackChildFragment;
    }
    function scheduleWorkOnFiber(fiber, renderLanes) {
        fiber.lanes = mergeLanes(fiber.lanes, renderLanes);
        var alternate = fiber.alternate;
        if (alternate !== null) {
            alternate.lanes = mergeLanes(alternate.lanes, renderLanes);
        }
        scheduleWorkOnParentPath(fiber.return, renderLanes);
    }
    function propagateSuspenseContextChange(workInProgress, firstChild, renderLanes) {
        var node = firstChild;
        while(node !== null){
            if (node.tag === SuspenseComponent) {
                var state = node.memoizedState;
                if (state !== null) {
                    scheduleWorkOnFiber(node, renderLanes);
                }
            } else if (node.tag === SuspenseListComponent) {
                scheduleWorkOnFiber(node, renderLanes);
            } else if (node.child !== null) {
                node.child.return = node;
                node = node.child;
                continue;
            }
            if (node === workInProgress) {
                return;
            }
            while(node.sibling === null){
                if (node.return === null || node.return === workInProgress) {
                    return;
                }
                node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
        }
    }
    function findLastContentRow(firstChild) {
        var row = firstChild;
        var lastContentRow = null;
        while(row !== null){
            var currentRow = row.alternate;
            if (currentRow !== null && findFirstSuspended(currentRow) === null) {
                lastContentRow = row;
            }
            row = row.sibling;
        }
        return lastContentRow;
    }
    function validateRevealOrder(revealOrder) {
        {
            if (revealOrder !== undefined && revealOrder !== "forwards" && revealOrder !== "backwards" && revealOrder !== "together" && !didWarnAboutRevealOrder[revealOrder]) {
                didWarnAboutRevealOrder[revealOrder] = true;
                if (typeof revealOrder === "string") {
                    switch(revealOrder.toLowerCase()){
                        case "together":
                        case "forwards":
                        case "backwards":
                            {
                                error1("\"%s\" is not a valid value for revealOrder on <SuspenseList />. " + "Use lowercase \"%s\" instead.", revealOrder, revealOrder.toLowerCase());
                                break;
                            }
                        case "forward":
                        case "backward":
                            {
                                error1("\"%s\" is not a valid value for revealOrder on <SuspenseList />. " + "React uses the -s suffix in the spelling. Use \"%ss\" instead.", revealOrder, revealOrder.toLowerCase());
                                break;
                            }
                        default:
                            error1("\"%s\" is not a supported revealOrder on <SuspenseList />. " + "Did you mean \"together\", \"forwards\" or \"backwards\"?", revealOrder);
                            break;
                    }
                } else {
                    error1("%s is not a supported value for revealOrder on <SuspenseList />. " + "Did you mean \"together\", \"forwards\" or \"backwards\"?", revealOrder);
                }
            }
        }
    }
    function validateTailOptions(tailMode, revealOrder) {
        {
            if (tailMode !== undefined && !didWarnAboutTailOptions[tailMode]) {
                if (tailMode !== "collapsed" && tailMode !== "hidden") {
                    didWarnAboutTailOptions[tailMode] = true;
                    error1("\"%s\" is not a supported value for tail on <SuspenseList />. " + "Did you mean \"collapsed\" or \"hidden\"?", tailMode);
                } else if (revealOrder !== "forwards" && revealOrder !== "backwards") {
                    didWarnAboutTailOptions[tailMode] = true;
                    error1("<SuspenseList tail=\"%s\" /> is only valid if revealOrder is " + "\"forwards\" or \"backwards\". " + "Did you mean to specify revealOrder=\"forwards\"?", tailMode);
                }
            }
        }
    }
    function validateSuspenseListNestedChild(childSlot, index) {
        {
            var isArray = Array.isArray(childSlot);
            var isIterable = !isArray && typeof getIteratorFn(childSlot) === "function";
            if (isArray || isIterable) {
                var type = isArray ? "array" : "iterable";
                error1("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in " + "an additional SuspenseList to configure its revealOrder: " + "<SuspenseList revealOrder=...> ... " + "<SuspenseList revealOrder=...>{%s}</SuspenseList> ... " + "</SuspenseList>", type, index, type);
                return false;
            }
        }
        return true;
    }
    function validateSuspenseListChildren(children, revealOrder) {
        {
            if ((revealOrder === "forwards" || revealOrder === "backwards") && children !== undefined && children !== null && children !== false) {
                if (Array.isArray(children)) {
                    for(var i = 0; i < children.length; i++){
                        if (!validateSuspenseListNestedChild(children[i], i)) {
                            return;
                        }
                    }
                } else {
                    var iteratorFn = getIteratorFn(children);
                    if (typeof iteratorFn === "function") {
                        var childrenIterator = iteratorFn.call(children);
                        if (childrenIterator) {
                            var step = childrenIterator.next();
                            var _i = 0;
                            for(; !step.done; step = childrenIterator.next()){
                                if (!validateSuspenseListNestedChild(step.value, _i)) {
                                    return;
                                }
                                _i++;
                            }
                        }
                    } else {
                        error1("A single row was passed to a <SuspenseList revealOrder=\"%s\" />. " + "This is not useful since it needs multiple rows. " + "Did you mean to pass multiple children or an array?", revealOrder);
                    }
                }
            }
        }
    }
    function initSuspenseListRenderState(workInProgress, isBackwards, tail, lastContentRow, tailMode, lastEffectBeforeRendering) {
        var renderState = workInProgress.memoizedState;
        if (renderState === null) {
            workInProgress.memoizedState = {
                isBackwards: isBackwards,
                rendering: null,
                renderingStartTime: 0,
                last: lastContentRow,
                tail: tail,
                tailMode: tailMode,
                lastEffect: lastEffectBeforeRendering
            };
        } else {
            renderState.isBackwards = isBackwards;
            renderState.rendering = null;
            renderState.renderingStartTime = 0;
            renderState.last = lastContentRow;
            renderState.tail = tail;
            renderState.tailMode = tailMode;
            renderState.lastEffect = lastEffectBeforeRendering;
        }
    }
    function updateSuspenseListComponent(current, workInProgress, renderLanes) {
        var nextProps = workInProgress.pendingProps;
        var revealOrder = nextProps.revealOrder;
        var tailMode = nextProps.tail;
        var newChildren = nextProps.children;
        validateRevealOrder(revealOrder);
        validateTailOptions(tailMode, revealOrder);
        validateSuspenseListChildren(newChildren, revealOrder);
        reconcileChildren(current, workInProgress, newChildren, renderLanes);
        var suspenseContext = suspenseStackCursor.current;
        var shouldForceFallback = hasSuspenseContext(suspenseContext, ForceSuspenseFallback);
        if (shouldForceFallback) {
            suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
            workInProgress.flags |= DidCapture;
        } else {
            var didSuspendBefore = current !== null && (current.flags & DidCapture) !== NoFlags;
            if (didSuspendBefore) {
                propagateSuspenseContextChange(workInProgress, workInProgress.child, renderLanes);
            }
            suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
        }
        pushSuspenseContext(workInProgress, suspenseContext);
        if ((workInProgress.mode & BlockingMode) === NoMode) {
            workInProgress.memoizedState = null;
        } else {
            switch(revealOrder){
                case "forwards":
                    {
                        var lastContentRow = findLastContentRow(workInProgress.child);
                        var tail;
                        if (lastContentRow === null) {
                            tail = workInProgress.child;
                            workInProgress.child = null;
                        } else {
                            tail = lastContentRow.sibling;
                            lastContentRow.sibling = null;
                        }
                        initSuspenseListRenderState(workInProgress, false, tail, lastContentRow, tailMode, workInProgress.lastEffect);
                        break;
                    }
                case "backwards":
                    {
                        var _tail = null;
                        var row = workInProgress.child;
                        workInProgress.child = null;
                        while(row !== null){
                            var currentRow = row.alternate;
                            if (currentRow !== null && findFirstSuspended(currentRow) === null) {
                                workInProgress.child = row;
                                break;
                            }
                            var nextRow = row.sibling;
                            row.sibling = _tail;
                            _tail = row;
                            row = nextRow;
                        }
                        initSuspenseListRenderState(workInProgress, true, _tail, null, tailMode, workInProgress.lastEffect);
                        break;
                    }
                case "together":
                    {
                        initSuspenseListRenderState(workInProgress, false, null, null, undefined, workInProgress.lastEffect);
                        break;
                    }
                default:
                    {
                        workInProgress.memoizedState = null;
                    }
            }
        }
        return workInProgress.child;
    }
    function updatePortalComponent(current, workInProgress, renderLanes) {
        pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
        var nextChildren = workInProgress.pendingProps;
        if (current === null) {
            workInProgress.child = reconcileChildFibers1(workInProgress, null, nextChildren, renderLanes);
        } else {
            reconcileChildren(current, workInProgress, nextChildren, renderLanes);
        }
        return workInProgress.child;
    }
    var hasWarnedAboutUsingNoValuePropOnContextProvider = false;
    function updateContextProvider(current, workInProgress, renderLanes) {
        var providerType = workInProgress.type;
        var context = providerType._context;
        var newProps = workInProgress.pendingProps;
        var oldProps = workInProgress.memoizedProps;
        var newValue = newProps.value;
        {
            if (!("value" in newProps)) {
                if (!hasWarnedAboutUsingNoValuePropOnContextProvider) {
                    hasWarnedAboutUsingNoValuePropOnContextProvider = true;
                    error1("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?");
                }
            }
            var providerPropTypes = workInProgress.type.propTypes;
            if (providerPropTypes) {
                checkPropTypes(providerPropTypes, newProps, "prop", "Context.Provider");
            }
        }
        pushProvider(workInProgress, newValue);
        if (oldProps !== null) {
            var oldValue = oldProps.value;
            var changedBits = calculateChangedBits(context, newValue, oldValue);
            if (changedBits === 0) {
                if (oldProps.children === newProps.children && !hasContextChanged()) {
                    return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
                }
            } else {
                propagateContextChange(workInProgress, context, changedBits, renderLanes);
            }
        }
        var newChildren = newProps.children;
        reconcileChildren(current, workInProgress, newChildren, renderLanes);
        return workInProgress.child;
    }
    var hasWarnedAboutUsingContextAsConsumer = false;
    function updateContextConsumer(current, workInProgress, renderLanes) {
        var context = workInProgress.type;
        {
            if (context._context === undefined) {
                if (context !== context.Consumer) {
                    if (!hasWarnedAboutUsingContextAsConsumer) {
                        hasWarnedAboutUsingContextAsConsumer = true;
                        error1("Rendering <Context> directly is not supported and will be removed in " + "a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                }
            } else {
                context = context._context;
            }
        }
        var newProps = workInProgress.pendingProps;
        var render3 = newProps.children;
        {
            if (typeof render3 !== "function") {
                error1("A context consumer was rendered with multiple children, or a child " + "that isn't a function. A context consumer expects a single child " + "that is a function. If you did pass a function, make sure there " + "is no trailing or leading whitespace around it.");
            }
        }
        prepareToReadContext(workInProgress, renderLanes);
        var newValue = readContext(context, newProps.unstable_observedBits);
        var newChildren;
        {
            ReactCurrentOwner$1.current = workInProgress;
            setIsRendering(true);
            newChildren = render3(newValue);
            setIsRendering(false);
        }
        workInProgress.flags |= PerformedWork;
        reconcileChildren(current, workInProgress, newChildren, renderLanes);
        return workInProgress.child;
    }
    function markWorkInProgressReceivedUpdate() {
        didReceiveUpdate = true;
    }
    function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
        if (current !== null) {
            workInProgress.dependencies = current.dependencies;
        }
        {
            stopProfilerTimerIfRunning();
        }
        markSkippedUpdateLanes(workInProgress.lanes);
        if (!includesSomeLane(renderLanes, workInProgress.childLanes)) {
            return null;
        } else {
            cloneChildFibers(current, workInProgress);
            return workInProgress.child;
        }
    }
    function remountFiber(current, oldWorkInProgress, newWorkInProgress) {
        {
            var returnFiber = oldWorkInProgress.return;
            if (returnFiber === null) {
                throw new Error("Cannot swap the root fiber.");
            }
            current.alternate = null;
            oldWorkInProgress.alternate = null;
            newWorkInProgress.index = oldWorkInProgress.index;
            newWorkInProgress.sibling = oldWorkInProgress.sibling;
            newWorkInProgress.return = oldWorkInProgress.return;
            newWorkInProgress.ref = oldWorkInProgress.ref;
            if (oldWorkInProgress === returnFiber.child) {
                returnFiber.child = newWorkInProgress;
            } else {
                var prevSibling = returnFiber.child;
                if (prevSibling === null) {
                    throw new Error("Expected parent to have a child.");
                }
                while(prevSibling.sibling !== oldWorkInProgress){
                    prevSibling = prevSibling.sibling;
                    if (prevSibling === null) {
                        throw new Error("Expected to find the previous sibling.");
                    }
                }
                prevSibling.sibling = newWorkInProgress;
            }
            var last = returnFiber.lastEffect;
            if (last !== null) {
                last.nextEffect = current;
                returnFiber.lastEffect = current;
            } else {
                returnFiber.firstEffect = returnFiber.lastEffect = current;
            }
            current.nextEffect = null;
            current.flags = Deletion;
            newWorkInProgress.flags |= Placement;
            return newWorkInProgress;
        }
    }
    function beginWork(current, workInProgress, renderLanes) {
        var updateLanes = workInProgress.lanes;
        {
            if (workInProgress._debugNeedsRemount && current !== null) {
                return remountFiber(current, workInProgress, createFiberFromTypeAndProps(workInProgress.type, workInProgress.key, workInProgress.pendingProps, workInProgress._debugOwner || null, workInProgress.mode, workInProgress.lanes));
            }
        }
        if (current !== null) {
            var oldProps = current.memoizedProps;
            var newProps = workInProgress.pendingProps;
            if (oldProps !== newProps || hasContextChanged() || workInProgress.type !== current.type) {
                didReceiveUpdate = true;
            } else if (!includesSomeLane(renderLanes, updateLanes)) {
                didReceiveUpdate = false;
                switch(workInProgress.tag){
                    case HostRoot:
                        pushHostRootContext(workInProgress);
                        resetHydrationState();
                        break;
                    case HostComponent:
                        pushHostContext(workInProgress);
                        break;
                    case ClassComponent:
                        {
                            var Component16 = workInProgress.type;
                            if (isContextProvider(Component16)) {
                                pushContextProvider(workInProgress);
                            }
                            break;
                        }
                    case HostPortal:
                        pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
                        break;
                    case ContextProvider:
                        {
                            var newValue = workInProgress.memoizedProps.value;
                            pushProvider(workInProgress, newValue);
                            break;
                        }
                    case Profiler1:
                        {
                            var hasChildWork = includesSomeLane(renderLanes, workInProgress.childLanes);
                            if (hasChildWork) {
                                workInProgress.flags |= Update;
                            }
                            var stateNode = workInProgress.stateNode;
                            stateNode.effectDuration = 0;
                            stateNode.passiveEffectDuration = 0;
                        }
                        break;
                    case SuspenseComponent:
                        {
                            var state = workInProgress.memoizedState;
                            if (state !== null) {
                                var primaryChildFragment = workInProgress.child;
                                var primaryChildLanes = primaryChildFragment.childLanes;
                                if (includesSomeLane(renderLanes, primaryChildLanes)) {
                                    return updateSuspenseComponent(current, workInProgress, renderLanes);
                                } else {
                                    pushSuspenseContext(workInProgress, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
                                    var child = bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
                                    if (child !== null) {
                                        return child.sibling;
                                    } else {
                                        return null;
                                    }
                                }
                            } else {
                                pushSuspenseContext(workInProgress, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
                            }
                            break;
                        }
                    case SuspenseListComponent:
                        {
                            var didSuspendBefore = (current.flags & DidCapture) !== NoFlags;
                            var _hasChildWork = includesSomeLane(renderLanes, workInProgress.childLanes);
                            if (didSuspendBefore) {
                                if (_hasChildWork) {
                                    return updateSuspenseListComponent(current, workInProgress, renderLanes);
                                }
                                workInProgress.flags |= DidCapture;
                            }
                            var renderState = workInProgress.memoizedState;
                            if (renderState !== null) {
                                renderState.rendering = null;
                                renderState.tail = null;
                                renderState.lastEffect = null;
                            }
                            pushSuspenseContext(workInProgress, suspenseStackCursor.current);
                            if (_hasChildWork) {
                                break;
                            } else {
                                return null;
                            }
                        }
                    case OffscreenComponent:
                    case LegacyHiddenComponent:
                        {
                            workInProgress.lanes = NoLanes;
                            return updateOffscreenComponent(current, workInProgress, renderLanes);
                        }
                }
                return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
            } else {
                if ((current.flags & ForceUpdateForLegacySuspense) !== NoFlags) {
                    didReceiveUpdate = true;
                } else {
                    didReceiveUpdate = false;
                }
            }
        } else {
            didReceiveUpdate = false;
        }
        workInProgress.lanes = NoLanes;
        switch(workInProgress.tag){
            case IndeterminateComponent:
                {
                    return mountIndeterminateComponent(current, workInProgress, workInProgress.type, renderLanes);
                }
            case LazyComponent:
                {
                    var elementType = workInProgress.elementType;
                    return mountLazyComponent(current, workInProgress, elementType, updateLanes, renderLanes);
                }
            case FunctionComponent:
                {
                    var _Component = workInProgress.type;
                    var unresolvedProps = workInProgress.pendingProps;
                    var resolvedProps = workInProgress.elementType === _Component ? unresolvedProps : resolveDefaultProps(_Component, unresolvedProps);
                    return updateFunctionComponent(current, workInProgress, _Component, resolvedProps, renderLanes);
                }
            case ClassComponent:
                {
                    var _Component2 = workInProgress.type;
                    var _unresolvedProps = workInProgress.pendingProps;
                    var _resolvedProps = workInProgress.elementType === _Component2 ? _unresolvedProps : resolveDefaultProps(_Component2, _unresolvedProps);
                    return updateClassComponent(current, workInProgress, _Component2, _resolvedProps, renderLanes);
                }
            case HostRoot:
                return updateHostRoot(current, workInProgress, renderLanes);
            case HostComponent:
                return updateHostComponent(current, workInProgress, renderLanes);
            case HostText:
                return updateHostText(current, workInProgress);
            case SuspenseComponent:
                return updateSuspenseComponent(current, workInProgress, renderLanes);
            case HostPortal:
                return updatePortalComponent(current, workInProgress, renderLanes);
            case ForwardRef:
                {
                    var type = workInProgress.type;
                    var _unresolvedProps2 = workInProgress.pendingProps;
                    var _resolvedProps2 = workInProgress.elementType === type ? _unresolvedProps2 : resolveDefaultProps(type, _unresolvedProps2);
                    return updateForwardRef(current, workInProgress, type, _resolvedProps2, renderLanes);
                }
            case Fragment1:
                return updateFragment1(current, workInProgress, renderLanes);
            case Mode:
                return updateMode(current, workInProgress, renderLanes);
            case Profiler1:
                return updateProfiler(current, workInProgress, renderLanes);
            case ContextProvider:
                return updateContextProvider(current, workInProgress, renderLanes);
            case ContextConsumer:
                return updateContextConsumer(current, workInProgress, renderLanes);
            case MemoComponent:
                {
                    var _type2 = workInProgress.type;
                    var _unresolvedProps3 = workInProgress.pendingProps;
                    var _resolvedProps3 = resolveDefaultProps(_type2, _unresolvedProps3);
                    {
                        if (workInProgress.type !== workInProgress.elementType) {
                            var outerPropTypes = _type2.propTypes;
                            if (outerPropTypes) {
                                checkPropTypes(outerPropTypes, _resolvedProps3, "prop", getComponentName(_type2));
                            }
                        }
                    }
                    _resolvedProps3 = resolveDefaultProps(_type2.type, _resolvedProps3);
                    return updateMemoComponent(current, workInProgress, _type2, _resolvedProps3, updateLanes, renderLanes);
                }
            case SimpleMemoComponent:
                {
                    return updateSimpleMemoComponent(current, workInProgress, workInProgress.type, workInProgress.pendingProps, updateLanes, renderLanes);
                }
            case IncompleteClassComponent:
                {
                    var _Component3 = workInProgress.type;
                    var _unresolvedProps4 = workInProgress.pendingProps;
                    var _resolvedProps4 = workInProgress.elementType === _Component3 ? _unresolvedProps4 : resolveDefaultProps(_Component3, _unresolvedProps4);
                    return mountIncompleteClassComponent(current, workInProgress, _Component3, _resolvedProps4, renderLanes);
                }
            case SuspenseListComponent:
                {
                    return updateSuspenseListComponent(current, workInProgress, renderLanes);
                }
            case FundamentalComponent:
                {
                    break;
                }
            case ScopeComponent:
                {
                    break;
                }
            case Block:
                {
                    break;
                }
            case OffscreenComponent:
                {
                    return updateOffscreenComponent(current, workInProgress, renderLanes);
                }
            case LegacyHiddenComponent:
                {
                    return updateLegacyHiddenComponent(current, workInProgress, renderLanes);
                }
        }
        {
            {
                throw Error("Unknown unit of work tag (" + workInProgress.tag + "). This error is likely caused by a bug in React. Please file an issue.");
            }
        }
    }
    function markUpdate(workInProgress) {
        workInProgress.flags |= Update;
    }
    function markRef$1(workInProgress) {
        workInProgress.flags |= Ref;
    }
    var appendAllChildren;
    var updateHostContainer;
    var updateHostComponent$1;
    var updateHostText$1;
    {
        appendAllChildren = function(parent, workInProgress, needsVisibilityToggle, isHidden) {
            var node = workInProgress.child;
            while(node !== null){
                if (node.tag === HostComponent || node.tag === HostText) {
                    appendInitialChild(parent, node.stateNode);
                } else if (node.tag === HostPortal) ;
                else if (node.child !== null) {
                    node.child.return = node;
                    node = node.child;
                    continue;
                }
                if (node === workInProgress) {
                    return;
                }
                while(node.sibling === null){
                    if (node.return === null || node.return === workInProgress) {
                        return;
                    }
                    node = node.return;
                }
                node.sibling.return = node.return;
                node = node.sibling;
            }
        };
        updateHostContainer = function(workInProgress) {};
        updateHostComponent$1 = function(current, workInProgress, type, newProps, rootContainerInstance) {
            var oldProps = current.memoizedProps;
            if (oldProps === newProps) {
                return;
            }
            var instance = workInProgress.stateNode;
            var currentHostContext = getHostContext();
            var updatePayload = prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, currentHostContext);
            workInProgress.updateQueue = updatePayload;
            if (updatePayload) {
                markUpdate(workInProgress);
            }
        };
        updateHostText$1 = function(current, workInProgress, oldText, newText) {
            if (oldText !== newText) {
                markUpdate(workInProgress);
            }
        };
    }
    function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
        if (getIsHydrating()) {
            return;
        }
        switch(renderState.tailMode){
            case "hidden":
                {
                    var tailNode = renderState.tail;
                    var lastTailNode = null;
                    while(tailNode !== null){
                        if (tailNode.alternate !== null) {
                            lastTailNode = tailNode;
                        }
                        tailNode = tailNode.sibling;
                    }
                    if (lastTailNode === null) {
                        renderState.tail = null;
                    } else {
                        lastTailNode.sibling = null;
                    }
                    break;
                }
            case "collapsed":
                {
                    var _tailNode = renderState.tail;
                    var _lastTailNode = null;
                    while(_tailNode !== null){
                        if (_tailNode.alternate !== null) {
                            _lastTailNode = _tailNode;
                        }
                        _tailNode = _tailNode.sibling;
                    }
                    if (_lastTailNode === null) {
                        if (!hasRenderedATailFallback && renderState.tail !== null) {
                            renderState.tail.sibling = null;
                        } else {
                            renderState.tail = null;
                        }
                    } else {
                        _lastTailNode.sibling = null;
                    }
                    break;
                }
        }
    }
    function completeWork(current, workInProgress, renderLanes) {
        var newProps = workInProgress.pendingProps;
        switch(workInProgress.tag){
            case IndeterminateComponent:
            case LazyComponent:
            case SimpleMemoComponent:
            case FunctionComponent:
            case ForwardRef:
            case Fragment1:
            case Mode:
            case Profiler1:
            case ContextConsumer:
            case MemoComponent:
                return null;
            case ClassComponent:
                {
                    var Component17 = workInProgress.type;
                    if (isContextProvider(Component17)) {
                        popContext(workInProgress);
                    }
                    return null;
                }
            case HostRoot:
                {
                    popHostContainer(workInProgress);
                    popTopLevelContextObject(workInProgress);
                    resetWorkInProgressVersions();
                    var fiberRoot = workInProgress.stateNode;
                    if (fiberRoot.pendingContext) {
                        fiberRoot.context = fiberRoot.pendingContext;
                        fiberRoot.pendingContext = null;
                    }
                    if (current === null || current.child === null) {
                        var wasHydrated = popHydrationState(workInProgress);
                        if (wasHydrated) {
                            markUpdate(workInProgress);
                        } else if (!fiberRoot.hydrate) {
                            workInProgress.flags |= Snapshot;
                        }
                    }
                    updateHostContainer(workInProgress);
                    return null;
                }
            case HostComponent:
                {
                    popHostContext(workInProgress);
                    var rootContainerInstance = getRootHostContainer();
                    var type = workInProgress.type;
                    if (current !== null && workInProgress.stateNode != null) {
                        updateHostComponent$1(current, workInProgress, type, newProps, rootContainerInstance);
                        if (current.ref !== workInProgress.ref) {
                            markRef$1(workInProgress);
                        }
                    } else {
                        if (!newProps) {
                            if (!(workInProgress.stateNode !== null)) {
                                {
                                    throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
                                }
                            }
                            return null;
                        }
                        var currentHostContext = getHostContext();
                        var _wasHydrated = popHydrationState(workInProgress);
                        if (_wasHydrated) {
                            if (prepareToHydrateHostInstance(workInProgress, rootContainerInstance, currentHostContext)) {
                                markUpdate(workInProgress);
                            }
                        } else {
                            var instance = createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress);
                            appendAllChildren(instance, workInProgress, false, false);
                            workInProgress.stateNode = instance;
                            if (finalizeInitialChildren(instance, type, newProps, rootContainerInstance)) {
                                markUpdate(workInProgress);
                            }
                        }
                        if (workInProgress.ref !== null) {
                            markRef$1(workInProgress);
                        }
                    }
                    return null;
                }
            case HostText:
                {
                    var newText = newProps;
                    if (current && workInProgress.stateNode != null) {
                        var oldText = current.memoizedProps;
                        updateHostText$1(current, workInProgress, oldText, newText);
                    } else {
                        if (typeof newText !== "string") {
                            if (!(workInProgress.stateNode !== null)) {
                                {
                                    throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
                                }
                            }
                        }
                        var _rootContainerInstance = getRootHostContainer();
                        var _currentHostContext = getHostContext();
                        var _wasHydrated2 = popHydrationState(workInProgress);
                        if (_wasHydrated2) {
                            if (prepareToHydrateHostTextInstance(workInProgress)) {
                                markUpdate(workInProgress);
                            }
                        } else {
                            workInProgress.stateNode = createTextInstance(newText, _rootContainerInstance, _currentHostContext, workInProgress);
                        }
                    }
                    return null;
                }
            case SuspenseComponent:
                {
                    popSuspenseContext(workInProgress);
                    var nextState = workInProgress.memoizedState;
                    if ((workInProgress.flags & DidCapture) !== NoFlags) {
                        workInProgress.lanes = renderLanes;
                        if ((workInProgress.mode & ProfileMode) !== NoMode) {
                            transferActualDuration(workInProgress);
                        }
                        return workInProgress;
                    }
                    var nextDidTimeout = nextState !== null;
                    var prevDidTimeout = false;
                    if (current === null) {
                        if (workInProgress.memoizedProps.fallback !== undefined) {
                            popHydrationState(workInProgress);
                        }
                    } else {
                        var prevState = current.memoizedState;
                        prevDidTimeout = prevState !== null;
                    }
                    if (nextDidTimeout && !prevDidTimeout) {
                        if ((workInProgress.mode & BlockingMode) !== NoMode) {
                            var hasInvisibleChildContext = current === null && workInProgress.memoizedProps.unstable_avoidThisFallback !== true;
                            if (hasInvisibleChildContext || hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext)) {
                                renderDidSuspend();
                            } else {
                                renderDidSuspendDelayIfPossible();
                            }
                        }
                    }
                    {
                        if (nextDidTimeout || prevDidTimeout) {
                            workInProgress.flags |= Update;
                        }
                    }
                    return null;
                }
            case HostPortal:
                popHostContainer(workInProgress);
                updateHostContainer(workInProgress);
                if (current === null) {
                    preparePortalMount(workInProgress.stateNode.containerInfo);
                }
                return null;
            case ContextProvider:
                popProvider(workInProgress);
                return null;
            case IncompleteClassComponent:
                {
                    var _Component = workInProgress.type;
                    if (isContextProvider(_Component)) {
                        popContext(workInProgress);
                    }
                    return null;
                }
            case SuspenseListComponent:
                {
                    popSuspenseContext(workInProgress);
                    var renderState = workInProgress.memoizedState;
                    if (renderState === null) {
                        return null;
                    }
                    var didSuspendAlready = (workInProgress.flags & DidCapture) !== NoFlags;
                    var renderedTail = renderState.rendering;
                    if (renderedTail === null) {
                        if (!didSuspendAlready) {
                            var cannotBeSuspended = renderHasNotSuspendedYet() && (current === null || (current.flags & DidCapture) === NoFlags);
                            if (!cannotBeSuspended) {
                                var row = workInProgress.child;
                                while(row !== null){
                                    var suspended = findFirstSuspended(row);
                                    if (suspended !== null) {
                                        didSuspendAlready = true;
                                        workInProgress.flags |= DidCapture;
                                        cutOffTailIfNeeded(renderState, false);
                                        var newThennables = suspended.updateQueue;
                                        if (newThennables !== null) {
                                            workInProgress.updateQueue = newThennables;
                                            workInProgress.flags |= Update;
                                        }
                                        if (renderState.lastEffect === null) {
                                            workInProgress.firstEffect = null;
                                        }
                                        workInProgress.lastEffect = renderState.lastEffect;
                                        resetChildFibers(workInProgress, renderLanes);
                                        pushSuspenseContext(workInProgress, setShallowSuspenseContext(suspenseStackCursor.current, ForceSuspenseFallback));
                                        return workInProgress.child;
                                    }
                                    row = row.sibling;
                                }
                            }
                            if (renderState.tail !== null && now() > getRenderTargetTime()) {
                                workInProgress.flags |= DidCapture;
                                didSuspendAlready = true;
                                cutOffTailIfNeeded(renderState, false);
                                workInProgress.lanes = SomeRetryLane;
                                {
                                    markSpawnedWork(SomeRetryLane);
                                }
                            }
                        } else {
                            cutOffTailIfNeeded(renderState, false);
                        }
                    } else {
                        if (!didSuspendAlready) {
                            var _suspended = findFirstSuspended(renderedTail);
                            if (_suspended !== null) {
                                workInProgress.flags |= DidCapture;
                                didSuspendAlready = true;
                                var _newThennables = _suspended.updateQueue;
                                if (_newThennables !== null) {
                                    workInProgress.updateQueue = _newThennables;
                                    workInProgress.flags |= Update;
                                }
                                cutOffTailIfNeeded(renderState, true);
                                if (renderState.tail === null && renderState.tailMode === "hidden" && !renderedTail.alternate && !getIsHydrating()) {
                                    var lastEffect = workInProgress.lastEffect = renderState.lastEffect;
                                    if (lastEffect !== null) {
                                        lastEffect.nextEffect = null;
                                    }
                                    return null;
                                }
                            } else if (now() * 2 - renderState.renderingStartTime > getRenderTargetTime() && renderLanes !== OffscreenLane) {
                                workInProgress.flags |= DidCapture;
                                didSuspendAlready = true;
                                cutOffTailIfNeeded(renderState, false);
                                workInProgress.lanes = SomeRetryLane;
                                {
                                    markSpawnedWork(SomeRetryLane);
                                }
                            }
                        }
                        if (renderState.isBackwards) {
                            renderedTail.sibling = workInProgress.child;
                            workInProgress.child = renderedTail;
                        } else {
                            var previousSibling = renderState.last;
                            if (previousSibling !== null) {
                                previousSibling.sibling = renderedTail;
                            } else {
                                workInProgress.child = renderedTail;
                            }
                            renderState.last = renderedTail;
                        }
                    }
                    if (renderState.tail !== null) {
                        var next = renderState.tail;
                        renderState.rendering = next;
                        renderState.tail = next.sibling;
                        renderState.lastEffect = workInProgress.lastEffect;
                        renderState.renderingStartTime = now();
                        next.sibling = null;
                        var suspenseContext = suspenseStackCursor.current;
                        if (didSuspendAlready) {
                            suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
                        } else {
                            suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
                        }
                        pushSuspenseContext(workInProgress, suspenseContext);
                        return next;
                    }
                    return null;
                }
            case FundamentalComponent:
                {
                    break;
                }
            case ScopeComponent:
                {
                    break;
                }
            case Block:
                break;
            case OffscreenComponent:
            case LegacyHiddenComponent:
                {
                    popRenderLanes(workInProgress);
                    if (current !== null) {
                        var _nextState = workInProgress.memoizedState;
                        var _prevState = current.memoizedState;
                        var prevIsHidden = _prevState !== null;
                        var nextIsHidden = _nextState !== null;
                        if (prevIsHidden !== nextIsHidden && newProps.mode !== "unstable-defer-without-hiding") {
                            workInProgress.flags |= Update;
                        }
                    }
                    return null;
                }
        }
        {
            {
                throw Error("Unknown unit of work tag (" + workInProgress.tag + "). This error is likely caused by a bug in React. Please file an issue.");
            }
        }
    }
    function unwindWork(workInProgress, renderLanes) {
        switch(workInProgress.tag){
            case ClassComponent:
                {
                    var Component18 = workInProgress.type;
                    if (isContextProvider(Component18)) {
                        popContext(workInProgress);
                    }
                    var flags = workInProgress.flags;
                    if (flags & ShouldCapture) {
                        workInProgress.flags = flags & ~ShouldCapture | DidCapture;
                        if ((workInProgress.mode & ProfileMode) !== NoMode) {
                            transferActualDuration(workInProgress);
                        }
                        return workInProgress;
                    }
                    return null;
                }
            case HostRoot:
                {
                    popHostContainer(workInProgress);
                    popTopLevelContextObject(workInProgress);
                    resetWorkInProgressVersions();
                    var _flags = workInProgress.flags;
                    if (!((_flags & DidCapture) === NoFlags)) {
                        {
                            throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");
                        }
                    }
                    workInProgress.flags = _flags & ~ShouldCapture | DidCapture;
                    return workInProgress;
                }
            case HostComponent:
                {
                    popHostContext(workInProgress);
                    return null;
                }
            case SuspenseComponent:
                {
                    popSuspenseContext(workInProgress);
                    var _flags2 = workInProgress.flags;
                    if (_flags2 & ShouldCapture) {
                        workInProgress.flags = _flags2 & ~ShouldCapture | DidCapture;
                        if ((workInProgress.mode & ProfileMode) !== NoMode) {
                            transferActualDuration(workInProgress);
                        }
                        return workInProgress;
                    }
                    return null;
                }
            case SuspenseListComponent:
                {
                    popSuspenseContext(workInProgress);
                    return null;
                }
            case HostPortal:
                popHostContainer(workInProgress);
                return null;
            case ContextProvider:
                popProvider(workInProgress);
                return null;
            case OffscreenComponent:
            case LegacyHiddenComponent:
                popRenderLanes(workInProgress);
                return null;
            default:
                return null;
        }
    }
    function unwindInterruptedWork(interruptedWork) {
        switch(interruptedWork.tag){
            case ClassComponent:
                {
                    var childContextTypes = interruptedWork.type.childContextTypes;
                    if (childContextTypes !== null && childContextTypes !== undefined) {
                        popContext(interruptedWork);
                    }
                    break;
                }
            case HostRoot:
                {
                    popHostContainer(interruptedWork);
                    popTopLevelContextObject(interruptedWork);
                    resetWorkInProgressVersions();
                    break;
                }
            case HostComponent:
                {
                    popHostContext(interruptedWork);
                    break;
                }
            case HostPortal:
                popHostContainer(interruptedWork);
                break;
            case SuspenseComponent:
                popSuspenseContext(interruptedWork);
                break;
            case SuspenseListComponent:
                popSuspenseContext(interruptedWork);
                break;
            case ContextProvider:
                popProvider(interruptedWork);
                break;
            case OffscreenComponent:
            case LegacyHiddenComponent:
                popRenderLanes(interruptedWork);
                break;
        }
    }
    function createCapturedValue(value, source) {
        return {
            value: value,
            source: source,
            stack: getStackByFiberInDevAndProd(source)
        };
    }
    function showErrorDialog(boundary, errorInfo) {
        return true;
    }
    function logCapturedError(boundary, errorInfo) {
        try {
            var logError = showErrorDialog(boundary, errorInfo);
            if (logError === false) {
                return;
            }
            var error = errorInfo.value;
            if (true) {
                var source = errorInfo.source;
                var stack = errorInfo.stack;
                var componentStack = stack !== null ? stack : "";
                if (error != null && error._suppressLogging) {
                    if (boundary.tag === ClassComponent) {
                        return;
                    }
                    console["error"](error);
                }
                var componentName = source ? getComponentName(source.type) : null;
                var componentNameMessage = componentName ? "The above error occurred in the <" + componentName + "> component:" : "The above error occurred in one of your React components:";
                var errorBoundaryMessage;
                var errorBoundaryName = getComponentName(boundary.type);
                if (errorBoundaryName) {
                    errorBoundaryMessage = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + errorBoundaryName + ".");
                } else {
                    errorBoundaryMessage = "Consider adding an error boundary to your tree to customize error handling behavior.\n" + "Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.";
                }
                var combinedMessage = componentNameMessage + "\n" + componentStack + "\n\n" + ("" + errorBoundaryMessage);
                console["error"](combinedMessage);
            }
        } catch (e) {
            setTimeout(function() {
                throw e;
            });
        }
    }
    var PossiblyWeakMap$1 = typeof WeakMap === "function" ? WeakMap : Map;
    function createRootErrorUpdate(fiber, errorInfo, lane) {
        var update = createUpdate(NoTimestamp, lane);
        update.tag = CaptureUpdate;
        update.payload = {
            element: null
        };
        var error = errorInfo.value;
        update.callback = function() {
            onUncaughtError(error);
            logCapturedError(fiber, errorInfo);
        };
        return update;
    }
    function createClassErrorUpdate(fiber, errorInfo, lane) {
        var update = createUpdate(NoTimestamp, lane);
        update.tag = CaptureUpdate;
        var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
        if (typeof getDerivedStateFromError === "function") {
            var error$1 = errorInfo.value;
            update.payload = function() {
                logCapturedError(fiber, errorInfo);
                return getDerivedStateFromError(error$1);
            };
        }
        var inst = fiber.stateNode;
        if (inst !== null && typeof inst.componentDidCatch === "function") {
            update.callback = function callback() {
                {
                    markFailedErrorBoundaryForHotReloading(fiber);
                }
                if (typeof getDerivedStateFromError !== "function") {
                    markLegacyErrorBoundaryAsFailed(this);
                    logCapturedError(fiber, errorInfo);
                }
                var error$1 = errorInfo.value;
                var stack = errorInfo.stack;
                this.componentDidCatch(error$1, {
                    componentStack: stack !== null ? stack : ""
                });
                {
                    if (typeof getDerivedStateFromError !== "function") {
                        if (!includesSomeLane(fiber.lanes, SyncLane)) {
                            error1("%s: Error boundaries should implement getDerivedStateFromError(). " + "In that method, return a state update to display an error message or fallback UI.", getComponentName(fiber.type) || "Unknown");
                        }
                    }
                }
            };
        } else {
            update.callback = function() {
                markFailedErrorBoundaryForHotReloading(fiber);
            };
        }
        return update;
    }
    function attachPingListener(root, wakeable, lanes) {
        var pingCache = root.pingCache;
        var threadIDs;
        if (pingCache === null) {
            pingCache = root.pingCache = new PossiblyWeakMap$1();
            threadIDs = new Set();
            pingCache.set(wakeable, threadIDs);
        } else {
            threadIDs = pingCache.get(wakeable);
            if (threadIDs === undefined) {
                threadIDs = new Set();
                pingCache.set(wakeable, threadIDs);
            }
        }
        if (!threadIDs.has(lanes)) {
            threadIDs.add(lanes);
            var ping = pingSuspendedRoot.bind(null, root, wakeable, lanes);
            wakeable.then(ping, ping);
        }
    }
    function throwException(root, returnFiber, sourceFiber, value, rootRenderLanes) {
        sourceFiber.flags |= Incomplete;
        sourceFiber.firstEffect = sourceFiber.lastEffect = null;
        if (value !== null && typeof value === "object" && typeof value.then === "function") {
            var wakeable = value;
            if ((sourceFiber.mode & BlockingMode) === NoMode) {
                var currentSource = sourceFiber.alternate;
                if (currentSource) {
                    sourceFiber.updateQueue = currentSource.updateQueue;
                    sourceFiber.memoizedState = currentSource.memoizedState;
                    sourceFiber.lanes = currentSource.lanes;
                } else {
                    sourceFiber.updateQueue = null;
                    sourceFiber.memoizedState = null;
                }
            }
            var hasInvisibleParentBoundary = hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext);
            var _workInProgress = returnFiber;
            do {
                if (_workInProgress.tag === SuspenseComponent && shouldCaptureSuspense(_workInProgress, hasInvisibleParentBoundary)) {
                    var wakeables = _workInProgress.updateQueue;
                    if (wakeables === null) {
                        var updateQueue = new Set();
                        updateQueue.add(wakeable);
                        _workInProgress.updateQueue = updateQueue;
                    } else {
                        wakeables.add(wakeable);
                    }
                    if ((_workInProgress.mode & BlockingMode) === NoMode) {
                        _workInProgress.flags |= DidCapture;
                        sourceFiber.flags |= ForceUpdateForLegacySuspense;
                        sourceFiber.flags &= ~(LifecycleEffectMask | Incomplete);
                        if (sourceFiber.tag === ClassComponent) {
                            var currentSourceFiber = sourceFiber.alternate;
                            if (currentSourceFiber === null) {
                                sourceFiber.tag = IncompleteClassComponent;
                            } else {
                                var update = createUpdate(NoTimestamp, SyncLane);
                                update.tag = ForceUpdate;
                                enqueueUpdate(sourceFiber, update);
                            }
                        }
                        sourceFiber.lanes = mergeLanes(sourceFiber.lanes, SyncLane);
                        return;
                    }
                    attachPingListener(root, wakeable, rootRenderLanes);
                    _workInProgress.flags |= ShouldCapture;
                    _workInProgress.lanes = rootRenderLanes;
                    return;
                }
                _workInProgress = _workInProgress.return;
            }while (_workInProgress !== null)
            value = new Error((getComponentName(sourceFiber.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n" + "\n" + "Add a <Suspense fallback=...> component higher in the tree to " + "provide a loading indicator or placeholder to display.");
        }
        renderDidError();
        value = createCapturedValue(value, sourceFiber);
        var workInProgress = returnFiber;
        do {
            switch(workInProgress.tag){
                case HostRoot:
                    {
                        var _errorInfo = value;
                        workInProgress.flags |= ShouldCapture;
                        var lane = pickArbitraryLane(rootRenderLanes);
                        workInProgress.lanes = mergeLanes(workInProgress.lanes, lane);
                        var _update = createRootErrorUpdate(workInProgress, _errorInfo, lane);
                        enqueueCapturedUpdate(workInProgress, _update);
                        return;
                    }
                case ClassComponent:
                    var errorInfo = value;
                    var ctor = workInProgress.type;
                    var instance = workInProgress.stateNode;
                    if ((workInProgress.flags & DidCapture) === NoFlags && (typeof ctor.getDerivedStateFromError === "function" || instance !== null && typeof instance.componentDidCatch === "function" && !isAlreadyFailedLegacyErrorBoundary(instance))) {
                        workInProgress.flags |= ShouldCapture;
                        var _lane = pickArbitraryLane(rootRenderLanes);
                        workInProgress.lanes = mergeLanes(workInProgress.lanes, _lane);
                        var _update2 = createClassErrorUpdate(workInProgress, errorInfo, _lane);
                        enqueueCapturedUpdate(workInProgress, _update2);
                        return;
                    }
                    break;
            }
            workInProgress = workInProgress.return;
        }while (workInProgress !== null)
    }
    var didWarnAboutUndefinedSnapshotBeforeUpdate = null;
    {
        didWarnAboutUndefinedSnapshotBeforeUpdate = new Set();
    }
    var PossiblyWeakSet = typeof WeakSet === "function" ? WeakSet : Set;
    var callComponentWillUnmountWithTimer = function(current, instance) {
        instance.props = current.memoizedProps;
        instance.state = current.memoizedState;
        {
            instance.componentWillUnmount();
        }
    };
    function safelyCallComponentWillUnmount(current, instance) {
        {
            invokeGuardedCallback(null, callComponentWillUnmountWithTimer, null, current, instance);
            if (hasCaughtError()) {
                var unmountError = clearCaughtError();
                captureCommitPhaseError(current, unmountError);
            }
        }
    }
    function safelyDetachRef(current) {
        var ref = current.ref;
        if (ref !== null) {
            if (typeof ref === "function") {
                {
                    invokeGuardedCallback(null, ref, null, null);
                    if (hasCaughtError()) {
                        var refError = clearCaughtError();
                        captureCommitPhaseError(current, refError);
                    }
                }
            } else {
                ref.current = null;
            }
        }
    }
    function safelyCallDestroy(current, destroy) {
        {
            invokeGuardedCallback(null, destroy, null);
            if (hasCaughtError()) {
                var error = clearCaughtError();
                captureCommitPhaseError(current, error);
            }
        }
    }
    function commitBeforeMutationLifeCycles(current, finishedWork) {
        switch(finishedWork.tag){
            case FunctionComponent:
            case ForwardRef:
            case SimpleMemoComponent:
            case Block:
                {
                    return;
                }
            case ClassComponent:
                {
                    if (finishedWork.flags & Snapshot) {
                        if (current !== null) {
                            var prevProps = current.memoizedProps;
                            var prevState = current.memoizedState;
                            var instance = finishedWork.stateNode;
                            {
                                if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                                    if (instance.props !== finishedWork.memoizedProps) {
                                        error1("Expected %s props to match memoized props before " + "getSnapshotBeforeUpdate. " + "This might either be because of a bug in React, or because " + "a component reassigns its own `this.props`. " + "Please file an issue.", getComponentName(finishedWork.type) || "instance");
                                    }
                                    if (instance.state !== finishedWork.memoizedState) {
                                        error1("Expected %s state to match memoized state before " + "getSnapshotBeforeUpdate. " + "This might either be because of a bug in React, or because " + "a component reassigns its own `this.state`. " + "Please file an issue.", getComponentName(finishedWork.type) || "instance");
                                    }
                                }
                            }
                            var snapshot = instance.getSnapshotBeforeUpdate(finishedWork.elementType === finishedWork.type ? prevProps : resolveDefaultProps(finishedWork.type, prevProps), prevState);
                            {
                                var didWarnSet = didWarnAboutUndefinedSnapshotBeforeUpdate;
                                if (snapshot === undefined && !didWarnSet.has(finishedWork.type)) {
                                    didWarnSet.add(finishedWork.type);
                                    error1("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) " + "must be returned. You have returned undefined.", getComponentName(finishedWork.type));
                                }
                            }
                            instance.__reactInternalSnapshotBeforeUpdate = snapshot;
                        }
                    }
                    return;
                }
            case HostRoot:
                {
                    {
                        if (finishedWork.flags & Snapshot) {
                            var root = finishedWork.stateNode;
                            clearContainer(root.containerInfo);
                        }
                    }
                    return;
                }
            case HostComponent:
            case HostText:
            case HostPortal:
            case IncompleteClassComponent:
                return;
        }
        {
            {
                throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
            }
        }
    }
    function commitHookEffectListUnmount(tag, finishedWork) {
        var updateQueue = finishedWork.updateQueue;
        var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
        if (lastEffect !== null) {
            var firstEffect = lastEffect.next;
            var effect = firstEffect;
            do {
                if ((effect.tag & tag) === tag) {
                    var destroy = effect.destroy;
                    effect.destroy = undefined;
                    if (destroy !== undefined) {
                        destroy();
                    }
                }
                effect = effect.next;
            }while (effect !== firstEffect)
        }
    }
    function commitHookEffectListMount(tag, finishedWork) {
        var updateQueue = finishedWork.updateQueue;
        var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
        if (lastEffect !== null) {
            var firstEffect = lastEffect.next;
            var effect = firstEffect;
            do {
                if ((effect.tag & tag) === tag) {
                    var create = effect.create;
                    effect.destroy = create();
                    {
                        var destroy = effect.destroy;
                        if (destroy !== undefined && typeof destroy !== "function") {
                            var addendum = void 0;
                            if (destroy === null) {
                                addendum = " You returned null. If your effect does not require clean " + "up, return undefined (or nothing).";
                            } else if (typeof destroy.then === "function") {
                                addendum = "\n\nIt looks like you wrote useEffect(async () => ...) or returned a Promise. " + "Instead, write the async function inside your effect " + "and call it immediately:\n\n" + "useEffect(() => {\n" + "  async function fetchData() {\n" + "    // You can await here\n" + "    const response = await MyAPI.getData(someId);\n" + "    // ...\n" + "  }\n" + "  fetchData();\n" + "}, [someId]); // Or [] if effect doesn't need props or state\n\n" + "Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching";
                            } else {
                                addendum = " You returned: " + destroy;
                            }
                            error1("An effect function must not return anything besides a function, " + "which is used for clean-up.%s", addendum);
                        }
                    }
                }
                effect = effect.next;
            }while (effect !== firstEffect)
        }
    }
    function schedulePassiveEffects(finishedWork) {
        var updateQueue = finishedWork.updateQueue;
        var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
        if (lastEffect !== null) {
            var firstEffect = lastEffect.next;
            var effect = firstEffect;
            do {
                var _effect = effect, next = _effect.next, tag = _effect.tag;
                if ((tag & Passive$1) !== NoFlags$1 && (tag & HasEffect) !== NoFlags$1) {
                    enqueuePendingPassiveHookEffectUnmount(finishedWork, effect);
                    enqueuePendingPassiveHookEffectMount(finishedWork, effect);
                }
                effect = next;
            }while (effect !== firstEffect)
        }
    }
    function commitLifeCycles(finishedRoot, current, finishedWork, committedLanes) {
        switch(finishedWork.tag){
            case FunctionComponent:
            case ForwardRef:
            case SimpleMemoComponent:
            case Block:
                {
                    {
                        commitHookEffectListMount(Layout | HasEffect, finishedWork);
                    }
                    schedulePassiveEffects(finishedWork);
                    return;
                }
            case ClassComponent:
                {
                    var instance = finishedWork.stateNode;
                    if (finishedWork.flags & Update) {
                        if (current === null) {
                            {
                                if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                                    if (instance.props !== finishedWork.memoizedProps) {
                                        error1("Expected %s props to match memoized props before " + "componentDidMount. " + "This might either be because of a bug in React, or because " + "a component reassigns its own `this.props`. " + "Please file an issue.", getComponentName(finishedWork.type) || "instance");
                                    }
                                    if (instance.state !== finishedWork.memoizedState) {
                                        error1("Expected %s state to match memoized state before " + "componentDidMount. " + "This might either be because of a bug in React, or because " + "a component reassigns its own `this.state`. " + "Please file an issue.", getComponentName(finishedWork.type) || "instance");
                                    }
                                }
                            }
                            {
                                instance.componentDidMount();
                            }
                        } else {
                            var prevProps = finishedWork.elementType === finishedWork.type ? current.memoizedProps : resolveDefaultProps(finishedWork.type, current.memoizedProps);
                            var prevState = current.memoizedState;
                            {
                                if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                                    if (instance.props !== finishedWork.memoizedProps) {
                                        error1("Expected %s props to match memoized props before " + "componentDidUpdate. " + "This might either be because of a bug in React, or because " + "a component reassigns its own `this.props`. " + "Please file an issue.", getComponentName(finishedWork.type) || "instance");
                                    }
                                    if (instance.state !== finishedWork.memoizedState) {
                                        error1("Expected %s state to match memoized state before " + "componentDidUpdate. " + "This might either be because of a bug in React, or because " + "a component reassigns its own `this.state`. " + "Please file an issue.", getComponentName(finishedWork.type) || "instance");
                                    }
                                }
                            }
                            {
                                instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
                            }
                        }
                    }
                    var updateQueue = finishedWork.updateQueue;
                    if (updateQueue !== null) {
                        {
                            if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                                if (instance.props !== finishedWork.memoizedProps) {
                                    error1("Expected %s props to match memoized props before " + "processing the update queue. " + "This might either be because of a bug in React, or because " + "a component reassigns its own `this.props`. " + "Please file an issue.", getComponentName(finishedWork.type) || "instance");
                                }
                                if (instance.state !== finishedWork.memoizedState) {
                                    error1("Expected %s state to match memoized state before " + "processing the update queue. " + "This might either be because of a bug in React, or because " + "a component reassigns its own `this.state`. " + "Please file an issue.", getComponentName(finishedWork.type) || "instance");
                                }
                            }
                        }
                        commitUpdateQueue(finishedWork, updateQueue, instance);
                    }
                    return;
                }
            case HostRoot:
                {
                    var _updateQueue = finishedWork.updateQueue;
                    if (_updateQueue !== null) {
                        var _instance = null;
                        if (finishedWork.child !== null) {
                            switch(finishedWork.child.tag){
                                case HostComponent:
                                    _instance = getPublicInstance(finishedWork.child.stateNode);
                                    break;
                                case ClassComponent:
                                    _instance = finishedWork.child.stateNode;
                                    break;
                            }
                        }
                        commitUpdateQueue(finishedWork, _updateQueue, _instance);
                    }
                    return;
                }
            case HostComponent:
                {
                    var _instance2 = finishedWork.stateNode;
                    if (current === null && finishedWork.flags & Update) {
                        var type = finishedWork.type;
                        var props = finishedWork.memoizedProps;
                        commitMount(_instance2, type, props);
                    }
                    return;
                }
            case HostText:
                {
                    return;
                }
            case HostPortal:
                {
                    return;
                }
            case Profiler1:
                {
                    {
                        var _finishedWork$memoize2 = finishedWork.memoizedProps, onCommit = _finishedWork$memoize2.onCommit, onRender = _finishedWork$memoize2.onRender;
                        finishedWork.stateNode.effectDuration;
                        var commitTime = getCommitTime();
                        if (typeof onRender === "function") {
                            {
                                onRender(finishedWork.memoizedProps.id, current === null ? "mount" : "update", finishedWork.actualDuration, finishedWork.treeBaseDuration, finishedWork.actualStartTime, commitTime, finishedRoot.memoizedInteractions);
                            }
                        }
                    }
                    return;
                }
            case SuspenseComponent:
                {
                    commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
                    return;
                }
            case SuspenseListComponent:
            case IncompleteClassComponent:
            case FundamentalComponent:
            case ScopeComponent:
            case OffscreenComponent:
            case LegacyHiddenComponent:
                return;
        }
        {
            {
                throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
            }
        }
    }
    function hideOrUnhideAllChildren(finishedWork, isHidden) {
        {
            var node = finishedWork;
            while(true){
                if (node.tag === HostComponent) {
                    var instance = node.stateNode;
                    if (isHidden) {
                        hideInstance(instance);
                    } else {
                        unhideInstance(node.stateNode, node.memoizedProps);
                    }
                } else if (node.tag === HostText) {
                    var _instance3 = node.stateNode;
                    if (isHidden) {
                        hideTextInstance(_instance3);
                    } else {
                        unhideTextInstance(_instance3, node.memoizedProps);
                    }
                } else if ((node.tag === OffscreenComponent || node.tag === LegacyHiddenComponent) && node.memoizedState !== null && node !== finishedWork) ;
                else if (node.child !== null) {
                    node.child.return = node;
                    node = node.child;
                    continue;
                }
                if (node === finishedWork) {
                    return;
                }
                while(node.sibling === null){
                    if (node.return === null || node.return === finishedWork) {
                        return;
                    }
                    node = node.return;
                }
                node.sibling.return = node.return;
                node = node.sibling;
            }
        }
    }
    function commitAttachRef(finishedWork) {
        var ref = finishedWork.ref;
        if (ref !== null) {
            var instance = finishedWork.stateNode;
            var instanceToUse;
            switch(finishedWork.tag){
                case HostComponent:
                    instanceToUse = getPublicInstance(instance);
                    break;
                default:
                    instanceToUse = instance;
            }
            if (typeof ref === "function") {
                ref(instanceToUse);
            } else {
                {
                    if (!ref.hasOwnProperty("current")) {
                        error1("Unexpected ref object provided for %s. " + "Use either a ref-setter function or React.createRef().", getComponentName(finishedWork.type));
                    }
                }
                ref.current = instanceToUse;
            }
        }
    }
    function commitDetachRef(current) {
        var currentRef = current.ref;
        if (currentRef !== null) {
            if (typeof currentRef === "function") {
                currentRef(null);
            } else {
                currentRef.current = null;
            }
        }
    }
    function commitUnmount(finishedRoot, current, renderPriorityLevel) {
        onCommitUnmount(current);
        switch(current.tag){
            case FunctionComponent:
            case ForwardRef:
            case MemoComponent:
            case SimpleMemoComponent:
            case Block:
                {
                    var updateQueue = current.updateQueue;
                    if (updateQueue !== null) {
                        var lastEffect = updateQueue.lastEffect;
                        if (lastEffect !== null) {
                            var firstEffect = lastEffect.next;
                            var effect = firstEffect;
                            do {
                                var _effect2 = effect, destroy = _effect2.destroy, tag = _effect2.tag;
                                if (destroy !== undefined) {
                                    if ((tag & Passive$1) !== NoFlags$1) {
                                        enqueuePendingPassiveHookEffectUnmount(current, effect);
                                    } else {
                                        {
                                            safelyCallDestroy(current, destroy);
                                        }
                                    }
                                }
                                effect = effect.next;
                            }while (effect !== firstEffect)
                        }
                    }
                    return;
                }
            case ClassComponent:
                {
                    safelyDetachRef(current);
                    var instance = current.stateNode;
                    if (typeof instance.componentWillUnmount === "function") {
                        safelyCallComponentWillUnmount(current, instance);
                    }
                    return;
                }
            case HostComponent:
                {
                    safelyDetachRef(current);
                    return;
                }
            case HostPortal:
                {
                    {
                        unmountHostComponents(finishedRoot, current);
                    }
                    return;
                }
            case FundamentalComponent:
                {
                    return;
                }
            case DehydratedFragment:
                {
                    return;
                }
            case ScopeComponent:
                {
                    return;
                }
        }
    }
    function commitNestedUnmounts(finishedRoot, root, renderPriorityLevel) {
        var node = root;
        while(true){
            commitUnmount(finishedRoot, node);
            if (node.child !== null && node.tag !== HostPortal) {
                node.child.return = node;
                node = node.child;
                continue;
            }
            if (node === root) {
                return;
            }
            while(node.sibling === null){
                if (node.return === null || node.return === root) {
                    return;
                }
                node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
        }
    }
    function detachFiberMutation(fiber) {
        fiber.alternate = null;
        fiber.child = null;
        fiber.dependencies = null;
        fiber.firstEffect = null;
        fiber.lastEffect = null;
        fiber.memoizedProps = null;
        fiber.memoizedState = null;
        fiber.pendingProps = null;
        fiber.return = null;
        fiber.updateQueue = null;
        {
            fiber._debugOwner = null;
        }
    }
    function getHostParentFiber(fiber) {
        var parent = fiber.return;
        while(parent !== null){
            if (isHostParent(parent)) {
                return parent;
            }
            parent = parent.return;
        }
        {
            {
                throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
            }
        }
    }
    function isHostParent(fiber) {
        return fiber.tag === HostComponent || fiber.tag === HostRoot || fiber.tag === HostPortal;
    }
    function getHostSibling(fiber) {
        var node = fiber;
        siblings: while(true){
            while(node.sibling === null){
                if (node.return === null || isHostParent(node.return)) {
                    return null;
                }
                node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
            while(node.tag !== HostComponent && node.tag !== HostText && node.tag !== DehydratedFragment){
                if (node.flags & Placement) {
                    continue siblings;
                }
                if (node.child === null || node.tag === HostPortal) {
                    continue siblings;
                } else {
                    node.child.return = node;
                    node = node.child;
                }
            }
            if (!(node.flags & Placement)) {
                return node.stateNode;
            }
        }
    }
    function commitPlacement(finishedWork) {
        var parentFiber = getHostParentFiber(finishedWork);
        var parent;
        var isContainer;
        var parentStateNode = parentFiber.stateNode;
        switch(parentFiber.tag){
            case HostComponent:
                parent = parentStateNode;
                isContainer = false;
                break;
            case HostRoot:
                parent = parentStateNode.containerInfo;
                isContainer = true;
                break;
            case HostPortal:
                parent = parentStateNode.containerInfo;
                isContainer = true;
                break;
            case FundamentalComponent:
            default:
                {
                    {
                        throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
                    }
                }
        }
        if (parentFiber.flags & ContentReset) {
            resetTextContent(parent);
            parentFiber.flags &= ~ContentReset;
        }
        var before = getHostSibling(finishedWork);
        if (isContainer) {
            insertOrAppendPlacementNodeIntoContainer(finishedWork, before, parent);
        } else {
            insertOrAppendPlacementNode(finishedWork, before, parent);
        }
    }
    function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
        var tag = node.tag;
        var isHost = tag === HostComponent || tag === HostText;
        if (isHost || enableFundamentalAPI) {
            var stateNode = isHost ? node.stateNode : node.stateNode.instance;
            if (before) {
                insertInContainerBefore(parent, stateNode, before);
            } else {
                appendChildToContainer(parent, stateNode);
            }
        } else if (tag === HostPortal) ;
        else {
            var child = node.child;
            if (child !== null) {
                insertOrAppendPlacementNodeIntoContainer(child, before, parent);
                var sibling = child.sibling;
                while(sibling !== null){
                    insertOrAppendPlacementNodeIntoContainer(sibling, before, parent);
                    sibling = sibling.sibling;
                }
            }
        }
    }
    function insertOrAppendPlacementNode(node, before, parent) {
        var tag = node.tag;
        var isHost = tag === HostComponent || tag === HostText;
        if (isHost || enableFundamentalAPI) {
            var stateNode = isHost ? node.stateNode : node.stateNode.instance;
            if (before) {
                insertBefore(parent, stateNode, before);
            } else {
                appendChild(parent, stateNode);
            }
        } else if (tag === HostPortal) ;
        else {
            var child = node.child;
            if (child !== null) {
                insertOrAppendPlacementNode(child, before, parent);
                var sibling = child.sibling;
                while(sibling !== null){
                    insertOrAppendPlacementNode(sibling, before, parent);
                    sibling = sibling.sibling;
                }
            }
        }
    }
    function unmountHostComponents(finishedRoot, current, renderPriorityLevel) {
        var node = current;
        var currentParentIsValid = false;
        var currentParent;
        var currentParentIsContainer;
        while(true){
            if (!currentParentIsValid) {
                var parent = node.return;
                findParent: while(true){
                    if (!(parent !== null)) {
                        {
                            throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
                        }
                    }
                    var parentStateNode = parent.stateNode;
                    switch(parent.tag){
                        case HostComponent:
                            currentParent = parentStateNode;
                            currentParentIsContainer = false;
                            break findParent;
                        case HostRoot:
                            currentParent = parentStateNode.containerInfo;
                            currentParentIsContainer = true;
                            break findParent;
                        case HostPortal:
                            currentParent = parentStateNode.containerInfo;
                            currentParentIsContainer = true;
                            break findParent;
                    }
                    parent = parent.return;
                }
                currentParentIsValid = true;
            }
            if (node.tag === HostComponent || node.tag === HostText) {
                commitNestedUnmounts(finishedRoot, node);
                if (currentParentIsContainer) {
                    removeChildFromContainer(currentParent, node.stateNode);
                } else {
                    removeChild(currentParent, node.stateNode);
                }
            } else if (node.tag === HostPortal) {
                if (node.child !== null) {
                    currentParent = node.stateNode.containerInfo;
                    currentParentIsContainer = true;
                    node.child.return = node;
                    node = node.child;
                    continue;
                }
            } else {
                commitUnmount(finishedRoot, node);
                if (node.child !== null) {
                    node.child.return = node;
                    node = node.child;
                    continue;
                }
            }
            if (node === current) {
                return;
            }
            while(node.sibling === null){
                if (node.return === null || node.return === current) {
                    return;
                }
                node = node.return;
                if (node.tag === HostPortal) {
                    currentParentIsValid = false;
                }
            }
            node.sibling.return = node.return;
            node = node.sibling;
        }
    }
    function commitDeletion(finishedRoot, current, renderPriorityLevel) {
        {
            unmountHostComponents(finishedRoot, current);
        }
        var alternate = current.alternate;
        detachFiberMutation(current);
        if (alternate !== null) {
            detachFiberMutation(alternate);
        }
    }
    function commitWork(current, finishedWork) {
        switch(finishedWork.tag){
            case FunctionComponent:
            case ForwardRef:
            case MemoComponent:
            case SimpleMemoComponent:
            case Block:
                {
                    {
                        commitHookEffectListUnmount(Layout | HasEffect, finishedWork);
                    }
                    return;
                }
            case ClassComponent:
                {
                    return;
                }
            case HostComponent:
                {
                    var instance = finishedWork.stateNode;
                    if (instance != null) {
                        var newProps = finishedWork.memoizedProps;
                        var oldProps = current !== null ? current.memoizedProps : newProps;
                        var type = finishedWork.type;
                        var updatePayload = finishedWork.updateQueue;
                        finishedWork.updateQueue = null;
                        if (updatePayload !== null) {
                            commitUpdate(instance, updatePayload, type, oldProps, newProps);
                        }
                    }
                    return;
                }
            case HostText:
                {
                    if (!(finishedWork.stateNode !== null)) {
                        {
                            throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
                        }
                    }
                    var textInstance = finishedWork.stateNode;
                    var newText = finishedWork.memoizedProps;
                    var oldText = current !== null ? current.memoizedProps : newText;
                    commitTextUpdate(textInstance, oldText, newText);
                    return;
                }
            case HostRoot:
                {
                    {
                        var _root = finishedWork.stateNode;
                        if (_root.hydrate) {
                            _root.hydrate = false;
                            commitHydratedContainer(_root.containerInfo);
                        }
                    }
                    return;
                }
            case Profiler1:
                {
                    return;
                }
            case SuspenseComponent:
                {
                    commitSuspenseComponent(finishedWork);
                    attachSuspenseRetryListeners(finishedWork);
                    return;
                }
            case SuspenseListComponent:
                {
                    attachSuspenseRetryListeners(finishedWork);
                    return;
                }
            case IncompleteClassComponent:
                {
                    return;
                }
            case FundamentalComponent:
                {
                    break;
                }
            case ScopeComponent:
                {
                    break;
                }
            case OffscreenComponent:
            case LegacyHiddenComponent:
                {
                    var newState = finishedWork.memoizedState;
                    var isHidden = newState !== null;
                    hideOrUnhideAllChildren(finishedWork, isHidden);
                    return;
                }
        }
        {
            {
                throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
            }
        }
    }
    function commitSuspenseComponent(finishedWork) {
        var newState = finishedWork.memoizedState;
        if (newState !== null) {
            markCommitTimeOfFallback();
            {
                var primaryChildParent = finishedWork.child;
                hideOrUnhideAllChildren(primaryChildParent, true);
            }
        }
    }
    function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
        var newState = finishedWork.memoizedState;
        if (newState === null) {
            var current = finishedWork.alternate;
            if (current !== null) {
                var prevState = current.memoizedState;
                if (prevState !== null) {
                    var suspenseInstance = prevState.dehydrated;
                    if (suspenseInstance !== null) {
                        commitHydratedSuspenseInstance(suspenseInstance);
                    }
                }
            }
        }
    }
    function attachSuspenseRetryListeners(finishedWork) {
        var wakeables = finishedWork.updateQueue;
        if (wakeables !== null) {
            finishedWork.updateQueue = null;
            var retryCache = finishedWork.stateNode;
            if (retryCache === null) {
                retryCache = finishedWork.stateNode = new PossiblyWeakSet();
            }
            wakeables.forEach(function(wakeable) {
                var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
                if (!retryCache.has(wakeable)) {
                    {
                        if (wakeable.__reactDoNotTraceInteractions !== true) {
                            retry = tracing.unstable_wrap(retry);
                        }
                    }
                    retryCache.add(wakeable);
                    wakeable.then(retry, retry);
                }
            });
        }
    }
    function isSuspenseBoundaryBeingHidden(current, finishedWork) {
        if (current !== null) {
            var oldState = current.memoizedState;
            if (oldState === null || oldState.dehydrated !== null) {
                var newState = finishedWork.memoizedState;
                return newState !== null && newState.dehydrated === null;
            }
        }
        return false;
    }
    function commitResetTextContent(current) {
        resetTextContent(current.stateNode);
    }
    var COMPONENT_TYPE = 0;
    var HAS_PSEUDO_CLASS_TYPE = 1;
    var ROLE_TYPE = 2;
    var TEST_NAME_TYPE = 3;
    var TEXT_TYPE = 4;
    if (typeof Symbol === "function" && Symbol.for) {
        var symbolFor$1 = Symbol.for;
        COMPONENT_TYPE = symbolFor$1("selector.component");
        HAS_PSEUDO_CLASS_TYPE = symbolFor$1("selector.has_pseudo_class");
        ROLE_TYPE = symbolFor$1("selector.role");
        TEST_NAME_TYPE = symbolFor$1("selector.test_id");
        TEXT_TYPE = symbolFor$1("selector.text");
    }
    var commitHooks = [];
    function onCommitRoot$1() {
        {
            commitHooks.forEach(function(commitHook) {
                return commitHook();
            });
        }
    }
    var ceil = Math.ceil;
    var ReactCurrentDispatcher$2 = ReactSharedInternals.ReactCurrentDispatcher, ReactCurrentOwner$2 = ReactSharedInternals.ReactCurrentOwner, IsSomeRendererActing = ReactSharedInternals.IsSomeRendererActing;
    var NoContext = 0;
    var BatchedContext = 1;
    var EventContext = 2;
    var DiscreteEventContext = 4;
    var LegacyUnbatchedContext = 8;
    var RenderContext = 16;
    var CommitContext = 32;
    var RetryAfterError = 64;
    var RootIncomplete = 0;
    var RootFatalErrored = 1;
    var RootErrored = 2;
    var RootSuspended = 3;
    var RootSuspendedWithDelay = 4;
    var RootCompleted = 5;
    var executionContext = NoContext;
    var workInProgressRoot = null;
    var workInProgress1 = null;
    var workInProgressRootRenderLanes = NoLanes;
    var subtreeRenderLanes1 = NoLanes;
    var subtreeRenderLanesCursor = createCursor(NoLanes);
    var workInProgressRootExitStatus = RootIncomplete;
    var workInProgressRootFatalError = null;
    var workInProgressRootIncludedLanes = NoLanes;
    var workInProgressRootSkippedLanes = NoLanes;
    var workInProgressRootUpdatedLanes = NoLanes;
    var workInProgressRootPingedLanes = NoLanes;
    var mostRecentlyUpdatedRoot = null;
    var globalMostRecentFallbackTime = 0;
    var FALLBACK_THROTTLE_MS = 500;
    var workInProgressRootRenderTargetTime = Infinity;
    var RENDER_TIMEOUT_MS = 500;
    function resetRenderTimer() {
        workInProgressRootRenderTargetTime = now() + RENDER_TIMEOUT_MS;
    }
    function getRenderTargetTime() {
        return workInProgressRootRenderTargetTime;
    }
    var nextEffect = null;
    var hasUncaughtError = false;
    var firstUncaughtError = null;
    var legacyErrorBoundariesThatAlreadyFailed = null;
    var rootDoesHavePassiveEffects = false;
    var rootWithPendingPassiveEffects = null;
    var pendingPassiveEffectsRenderPriority = NoPriority$1;
    var pendingPassiveEffectsLanes = NoLanes;
    var pendingPassiveHookEffectsMount = [];
    var pendingPassiveHookEffectsUnmount = [];
    var rootsWithPendingDiscreteUpdates = null;
    var NESTED_UPDATE_LIMIT = 50;
    var nestedUpdateCount = 0;
    var rootWithNestedUpdates = null;
    var NESTED_PASSIVE_UPDATE_LIMIT = 50;
    var nestedPassiveUpdateCount = 0;
    var spawnedWorkDuringRender = null;
    var currentEventTime = NoTimestamp;
    var currentEventWipLanes = NoLanes;
    var currentEventPendingLanes = NoLanes;
    var isFlushingPassiveEffects = false;
    var focusedInstanceHandle = null;
    var shouldFireAfterActiveInstanceBlur = false;
    function getWorkInProgressRoot() {
        return workInProgressRoot;
    }
    function requestEventTime() {
        if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
            return now();
        }
        if (currentEventTime !== NoTimestamp) {
            return currentEventTime;
        }
        currentEventTime = now();
        return currentEventTime;
    }
    function requestUpdateLane(fiber) {
        var mode = fiber.mode;
        if ((mode & BlockingMode) === NoMode) {
            return SyncLane;
        } else if ((mode & ConcurrentMode) === NoMode) {
            return getCurrentPriorityLevel() === ImmediatePriority$1 ? SyncLane : SyncBatchedLane;
        }
        if (currentEventWipLanes === NoLanes) {
            currentEventWipLanes = workInProgressRootIncludedLanes;
        }
        var isTransition = requestCurrentTransition() !== NoTransition;
        if (isTransition) {
            if (currentEventPendingLanes !== NoLanes) {
                currentEventPendingLanes = mostRecentlyUpdatedRoot !== null ? mostRecentlyUpdatedRoot.pendingLanes : NoLanes;
            }
            return findTransitionLane(currentEventWipLanes, currentEventPendingLanes);
        }
        var schedulerPriority = getCurrentPriorityLevel();
        var lane;
        if ((executionContext & DiscreteEventContext) !== NoContext && schedulerPriority === UserBlockingPriority$2) {
            lane = findUpdateLane(InputDiscreteLanePriority, currentEventWipLanes);
        } else {
            var schedulerLanePriority = schedulerPriorityToLanePriority(schedulerPriority);
            lane = findUpdateLane(schedulerLanePriority, currentEventWipLanes);
        }
        return lane;
    }
    function requestRetryLane(fiber) {
        var mode = fiber.mode;
        if ((mode & BlockingMode) === NoMode) {
            return SyncLane;
        } else if ((mode & ConcurrentMode) === NoMode) {
            return getCurrentPriorityLevel() === ImmediatePriority$1 ? SyncLane : SyncBatchedLane;
        }
        if (currentEventWipLanes === NoLanes) {
            currentEventWipLanes = workInProgressRootIncludedLanes;
        }
        return findRetryLane(currentEventWipLanes);
    }
    function scheduleUpdateOnFiber(fiber, lane, eventTime) {
        checkForNestedUpdates();
        warnAboutRenderPhaseUpdatesInDEV(fiber);
        var root = markUpdateLaneFromFiberToRoot(fiber, lane);
        if (root === null) {
            warnAboutUpdateOnUnmountedFiberInDEV(fiber);
            return null;
        }
        markRootUpdated(root, lane, eventTime);
        if (root === workInProgressRoot) {
            {
                workInProgressRootUpdatedLanes = mergeLanes(workInProgressRootUpdatedLanes, lane);
            }
            if (workInProgressRootExitStatus === RootSuspendedWithDelay) {
                markRootSuspended$1(root, workInProgressRootRenderLanes);
            }
        }
        var priorityLevel = getCurrentPriorityLevel();
        if (lane === SyncLane) {
            if ((executionContext & LegacyUnbatchedContext) !== NoContext && (executionContext & (RenderContext | CommitContext)) === NoContext) {
                schedulePendingInteractions(root, lane);
                performSyncWorkOnRoot(root);
            } else {
                ensureRootIsScheduled(root, eventTime);
                schedulePendingInteractions(root, lane);
                if (executionContext === NoContext) {
                    resetRenderTimer();
                    flushSyncCallbackQueue();
                }
            }
        } else {
            if ((executionContext & DiscreteEventContext) !== NoContext && (priorityLevel === UserBlockingPriority$2 || priorityLevel === ImmediatePriority$1)) {
                if (rootsWithPendingDiscreteUpdates === null) {
                    rootsWithPendingDiscreteUpdates = new Set([
                        root
                    ]);
                } else {
                    rootsWithPendingDiscreteUpdates.add(root);
                }
            }
            ensureRootIsScheduled(root, eventTime);
            schedulePendingInteractions(root, lane);
        }
        mostRecentlyUpdatedRoot = root;
    }
    function markUpdateLaneFromFiberToRoot(sourceFiber, lane) {
        sourceFiber.lanes = mergeLanes(sourceFiber.lanes, lane);
        var alternate = sourceFiber.alternate;
        if (alternate !== null) {
            alternate.lanes = mergeLanes(alternate.lanes, lane);
        }
        {
            if (alternate === null && (sourceFiber.flags & (Placement | Hydrating)) !== NoFlags) {
                warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);
            }
        }
        var node = sourceFiber;
        var parent = sourceFiber.return;
        while(parent !== null){
            parent.childLanes = mergeLanes(parent.childLanes, lane);
            alternate = parent.alternate;
            if (alternate !== null) {
                alternate.childLanes = mergeLanes(alternate.childLanes, lane);
            } else {
                {
                    if ((parent.flags & (Placement | Hydrating)) !== NoFlags) {
                        warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);
                    }
                }
            }
            node = parent;
            parent = parent.return;
        }
        if (node.tag === HostRoot) {
            var root = node.stateNode;
            return root;
        } else {
            return null;
        }
    }
    function ensureRootIsScheduled(root, currentTime) {
        var existingCallbackNode = root.callbackNode;
        markStarvedLanesAsExpired(root, currentTime);
        var nextLanes = getNextLanes(root, root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes);
        var newCallbackPriority = returnNextLanesPriority();
        if (nextLanes === NoLanes) {
            if (existingCallbackNode !== null) {
                cancelCallback(existingCallbackNode);
                root.callbackNode = null;
                root.callbackPriority = NoLanePriority;
            }
            return;
        }
        if (existingCallbackNode !== null) {
            var existingCallbackPriority = root.callbackPriority;
            if (existingCallbackPriority === newCallbackPriority) {
                return;
            }
            cancelCallback(existingCallbackNode);
        }
        var newCallbackNode;
        if (newCallbackPriority === SyncLanePriority) {
            newCallbackNode = scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root));
        } else if (newCallbackPriority === SyncBatchedLanePriority) {
            newCallbackNode = scheduleCallback(ImmediatePriority$1, performSyncWorkOnRoot.bind(null, root));
        } else {
            var schedulerPriorityLevel = lanePriorityToSchedulerPriority(newCallbackPriority);
            newCallbackNode = scheduleCallback(schedulerPriorityLevel, performConcurrentWorkOnRoot.bind(null, root));
        }
        root.callbackPriority = newCallbackPriority;
        root.callbackNode = newCallbackNode;
    }
    function performConcurrentWorkOnRoot(root) {
        currentEventTime = NoTimestamp;
        currentEventWipLanes = NoLanes;
        currentEventPendingLanes = NoLanes;
        if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
            {
                throw Error("Should not already be working.");
            }
        }
        var originalCallbackNode = root.callbackNode;
        var didFlushPassiveEffects = flushPassiveEffects();
        if (didFlushPassiveEffects) {
            if (root.callbackNode !== originalCallbackNode) {
                return null;
            }
        }
        var lanes = getNextLanes(root, root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes);
        if (lanes === NoLanes) {
            return null;
        }
        var exitStatus = renderRootConcurrent(root, lanes);
        if (includesSomeLane(workInProgressRootIncludedLanes, workInProgressRootUpdatedLanes)) {
            prepareFreshStack(root, NoLanes);
        } else if (exitStatus !== RootIncomplete) {
            if (exitStatus === RootErrored) {
                executionContext |= RetryAfterError;
                if (root.hydrate) {
                    root.hydrate = false;
                    clearContainer(root.containerInfo);
                }
                lanes = getLanesToRetrySynchronouslyOnError(root);
                if (lanes !== NoLanes) {
                    exitStatus = renderRootSync(root, lanes);
                }
            }
            if (exitStatus === RootFatalErrored) {
                var fatalError = workInProgressRootFatalError;
                prepareFreshStack(root, NoLanes);
                markRootSuspended$1(root, lanes);
                ensureRootIsScheduled(root, now());
                throw fatalError;
            }
            var finishedWork = root.current.alternate;
            root.finishedWork = finishedWork;
            root.finishedLanes = lanes;
            finishConcurrentRender(root, exitStatus, lanes);
        }
        ensureRootIsScheduled(root, now());
        if (root.callbackNode === originalCallbackNode) {
            return performConcurrentWorkOnRoot.bind(null, root);
        }
        return null;
    }
    function finishConcurrentRender(root, exitStatus, lanes) {
        switch(exitStatus){
            case RootIncomplete:
            case RootFatalErrored:
                {
                    {
                        {
                            throw Error("Root did not complete. This is a bug in React.");
                        }
                    }
                }
            case RootErrored:
                {
                    commitRoot(root);
                    break;
                }
            case RootSuspended:
                {
                    markRootSuspended$1(root, lanes);
                    if (includesOnlyRetries(lanes) && !shouldForceFlushFallbacksInDEV()) {
                        var msUntilTimeout = globalMostRecentFallbackTime + FALLBACK_THROTTLE_MS - now();
                        if (msUntilTimeout > 10) {
                            var nextLanes = getNextLanes(root, NoLanes);
                            if (nextLanes !== NoLanes) {
                                break;
                            }
                            var suspendedLanes = root.suspendedLanes;
                            if (!isSubsetOfLanes(suspendedLanes, lanes)) {
                                requestEventTime();
                                markRootPinged(root, suspendedLanes);
                                break;
                            }
                            root.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root), msUntilTimeout);
                            break;
                        }
                    }
                    commitRoot(root);
                    break;
                }
            case RootSuspendedWithDelay:
                {
                    markRootSuspended$1(root, lanes);
                    if (includesOnlyTransitions(lanes)) {
                        break;
                    }
                    if (!shouldForceFlushFallbacksInDEV()) {
                        var mostRecentEventTime = getMostRecentEventTime(root, lanes);
                        var eventTimeMs = mostRecentEventTime;
                        var timeElapsedMs = now() - eventTimeMs;
                        var _msUntilTimeout = jnd(timeElapsedMs) - timeElapsedMs;
                        if (_msUntilTimeout > 10) {
                            root.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root), _msUntilTimeout);
                            break;
                        }
                    }
                    commitRoot(root);
                    break;
                }
            case RootCompleted:
                {
                    commitRoot(root);
                    break;
                }
            default:
                {
                    {
                        {
                            throw Error("Unknown root exit status.");
                        }
                    }
                }
        }
    }
    function markRootSuspended$1(root, suspendedLanes) {
        suspendedLanes = removeLanes(suspendedLanes, workInProgressRootPingedLanes);
        suspendedLanes = removeLanes(suspendedLanes, workInProgressRootUpdatedLanes);
        markRootSuspended(root, suspendedLanes);
    }
    function performSyncWorkOnRoot(root) {
        if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
            {
                throw Error("Should not already be working.");
            }
        }
        flushPassiveEffects();
        var lanes;
        var exitStatus;
        if (root === workInProgressRoot && includesSomeLane(root.expiredLanes, workInProgressRootRenderLanes)) {
            lanes = workInProgressRootRenderLanes;
            exitStatus = renderRootSync(root, lanes);
            if (includesSomeLane(workInProgressRootIncludedLanes, workInProgressRootUpdatedLanes)) {
                lanes = getNextLanes(root, lanes);
                exitStatus = renderRootSync(root, lanes);
            }
        } else {
            lanes = getNextLanes(root, NoLanes);
            exitStatus = renderRootSync(root, lanes);
        }
        if (root.tag !== LegacyRoot && exitStatus === RootErrored) {
            executionContext |= RetryAfterError;
            if (root.hydrate) {
                root.hydrate = false;
                clearContainer(root.containerInfo);
            }
            lanes = getLanesToRetrySynchronouslyOnError(root);
            if (lanes !== NoLanes) {
                exitStatus = renderRootSync(root, lanes);
            }
        }
        if (exitStatus === RootFatalErrored) {
            var fatalError = workInProgressRootFatalError;
            prepareFreshStack(root, NoLanes);
            markRootSuspended$1(root, lanes);
            ensureRootIsScheduled(root, now());
            throw fatalError;
        }
        var finishedWork = root.current.alternate;
        root.finishedWork = finishedWork;
        root.finishedLanes = lanes;
        commitRoot(root);
        ensureRootIsScheduled(root, now());
        return null;
    }
    function flushDiscreteUpdates() {
        if ((executionContext & (BatchedContext | RenderContext | CommitContext)) !== NoContext) {
            {
                if ((executionContext & RenderContext) !== NoContext) {
                    error1("unstable_flushDiscreteUpdates: Cannot flush updates when React is " + "already rendering.");
                }
            }
            return;
        }
        flushPendingDiscreteUpdates();
        flushPassiveEffects();
    }
    function flushPendingDiscreteUpdates() {
        if (rootsWithPendingDiscreteUpdates !== null) {
            var roots = rootsWithPendingDiscreteUpdates;
            rootsWithPendingDiscreteUpdates = null;
            roots.forEach(function(root) {
                markDiscreteUpdatesExpired(root);
                ensureRootIsScheduled(root, now());
            });
        }
        flushSyncCallbackQueue();
    }
    function batchedUpdates$1(fn, a) {
        var prevExecutionContext = executionContext;
        executionContext |= BatchedContext;
        try {
            return fn(a);
        } finally{
            executionContext = prevExecutionContext;
            if (executionContext === NoContext) {
                resetRenderTimer();
                flushSyncCallbackQueue();
            }
        }
    }
    function batchedEventUpdates$1(fn, a) {
        var prevExecutionContext = executionContext;
        executionContext |= EventContext;
        try {
            return fn(a);
        } finally{
            executionContext = prevExecutionContext;
            if (executionContext === NoContext) {
                resetRenderTimer();
                flushSyncCallbackQueue();
            }
        }
    }
    function discreteUpdates$1(fn, a, b, c, d) {
        var prevExecutionContext = executionContext;
        executionContext |= DiscreteEventContext;
        {
            try {
                return runWithPriority$1(UserBlockingPriority$2, fn.bind(null, a, b, c, d));
            } finally{
                executionContext = prevExecutionContext;
                if (executionContext === NoContext) {
                    resetRenderTimer();
                    flushSyncCallbackQueue();
                }
            }
        }
    }
    function unbatchedUpdates(fn, a) {
        var prevExecutionContext = executionContext;
        executionContext &= ~BatchedContext;
        executionContext |= LegacyUnbatchedContext;
        try {
            return fn(a);
        } finally{
            executionContext = prevExecutionContext;
            if (executionContext === NoContext) {
                resetRenderTimer();
                flushSyncCallbackQueue();
            }
        }
    }
    function flushSync1(fn, a) {
        var prevExecutionContext = executionContext;
        if ((prevExecutionContext & (RenderContext | CommitContext)) !== NoContext) {
            {
                error1("flushSync was called from inside a lifecycle method. React cannot " + "flush when React is already rendering. Consider moving this call to " + "a scheduler task or micro task.");
            }
            return fn(a);
        }
        executionContext |= BatchedContext;
        {
            try {
                if (fn) {
                    return runWithPriority$1(ImmediatePriority$1, fn.bind(null, a));
                } else {
                    return undefined;
                }
            } finally{
                executionContext = prevExecutionContext;
                flushSyncCallbackQueue();
            }
        }
    }
    function pushRenderLanes(fiber, lanes) {
        push(subtreeRenderLanesCursor, subtreeRenderLanes1, fiber);
        subtreeRenderLanes1 = mergeLanes(subtreeRenderLanes1, lanes);
        workInProgressRootIncludedLanes = mergeLanes(workInProgressRootIncludedLanes, lanes);
    }
    function popRenderLanes(fiber) {
        subtreeRenderLanes1 = subtreeRenderLanesCursor.current;
        pop(subtreeRenderLanesCursor, fiber);
    }
    function prepareFreshStack(root, lanes) {
        root.finishedWork = null;
        root.finishedLanes = NoLanes;
        var timeoutHandle = root.timeoutHandle;
        if (timeoutHandle !== noTimeout) {
            root.timeoutHandle = noTimeout;
            cancelTimeout(timeoutHandle);
        }
        if (workInProgress1 !== null) {
            var interruptedWork = workInProgress1.return;
            while(interruptedWork !== null){
                unwindInterruptedWork(interruptedWork);
                interruptedWork = interruptedWork.return;
            }
        }
        workInProgressRoot = root;
        workInProgress1 = createWorkInProgress(root.current, null);
        workInProgressRootRenderLanes = subtreeRenderLanes1 = workInProgressRootIncludedLanes = lanes;
        workInProgressRootExitStatus = RootIncomplete;
        workInProgressRootFatalError = null;
        workInProgressRootSkippedLanes = NoLanes;
        workInProgressRootUpdatedLanes = NoLanes;
        workInProgressRootPingedLanes = NoLanes;
        {
            spawnedWorkDuringRender = null;
        }
        {
            ReactStrictModeWarnings.discardPendingWarnings();
        }
    }
    function handleError(root, thrownValue) {
        do {
            var erroredWork = workInProgress1;
            try {
                resetContextDependencies();
                resetHooksAfterThrow();
                resetCurrentFiber();
                ReactCurrentOwner$2.current = null;
                if (erroredWork === null || erroredWork.return === null) {
                    workInProgressRootExitStatus = RootFatalErrored;
                    workInProgressRootFatalError = thrownValue;
                    workInProgress1 = null;
                    return;
                }
                if (enableProfilerTimer && erroredWork.mode & ProfileMode) {
                    stopProfilerTimerIfRunningAndRecordDelta(erroredWork, true);
                }
                throwException(root, erroredWork.return, erroredWork, thrownValue, workInProgressRootRenderLanes);
                completeUnitOfWork(erroredWork);
            } catch (yetAnotherThrownValue) {
                thrownValue = yetAnotherThrownValue;
                if (workInProgress1 === erroredWork && erroredWork !== null) {
                    erroredWork = erroredWork.return;
                    workInProgress1 = erroredWork;
                } else {
                    erroredWork = workInProgress1;
                }
                continue;
            }
            return;
        }while (true)
    }
    function pushDispatcher() {
        var prevDispatcher = ReactCurrentDispatcher$2.current;
        ReactCurrentDispatcher$2.current = ContextOnlyDispatcher;
        if (prevDispatcher === null) {
            return ContextOnlyDispatcher;
        } else {
            return prevDispatcher;
        }
    }
    function popDispatcher(prevDispatcher) {
        ReactCurrentDispatcher$2.current = prevDispatcher;
    }
    function pushInteractions(root) {
        {
            var prevInteractions = tracing.__interactionsRef.current;
            tracing.__interactionsRef.current = root.memoizedInteractions;
            return prevInteractions;
        }
    }
    function popInteractions(prevInteractions) {
        {
            tracing.__interactionsRef.current = prevInteractions;
        }
    }
    function markCommitTimeOfFallback() {
        globalMostRecentFallbackTime = now();
    }
    function markSkippedUpdateLanes(lane) {
        workInProgressRootSkippedLanes = mergeLanes(lane, workInProgressRootSkippedLanes);
    }
    function renderDidSuspend() {
        if (workInProgressRootExitStatus === RootIncomplete) {
            workInProgressRootExitStatus = RootSuspended;
        }
    }
    function renderDidSuspendDelayIfPossible() {
        if (workInProgressRootExitStatus === RootIncomplete || workInProgressRootExitStatus === RootSuspended) {
            workInProgressRootExitStatus = RootSuspendedWithDelay;
        }
        if (workInProgressRoot !== null && (includesNonIdleWork(workInProgressRootSkippedLanes) || includesNonIdleWork(workInProgressRootUpdatedLanes))) {
            markRootSuspended$1(workInProgressRoot, workInProgressRootRenderLanes);
        }
    }
    function renderDidError() {
        if (workInProgressRootExitStatus !== RootCompleted) {
            workInProgressRootExitStatus = RootErrored;
        }
    }
    function renderHasNotSuspendedYet() {
        return workInProgressRootExitStatus === RootIncomplete;
    }
    function renderRootSync(root, lanes) {
        var prevExecutionContext = executionContext;
        executionContext |= RenderContext;
        var prevDispatcher = pushDispatcher();
        if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {
            prepareFreshStack(root, lanes);
            startWorkOnPendingInteractions(root, lanes);
        }
        var prevInteractions = pushInteractions(root);
        do {
            try {
                workLoopSync();
                break;
            } catch (thrownValue) {
                handleError(root, thrownValue);
            }
        }while (true)
        resetContextDependencies();
        {
            popInteractions(prevInteractions);
        }
        executionContext = prevExecutionContext;
        popDispatcher(prevDispatcher);
        if (workInProgress1 !== null) {
            {
                {
                    throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
                }
            }
        }
        workInProgressRoot = null;
        workInProgressRootRenderLanes = NoLanes;
        return workInProgressRootExitStatus;
    }
    function workLoopSync() {
        while(workInProgress1 !== null){
            performUnitOfWork(workInProgress1);
        }
    }
    function renderRootConcurrent(root, lanes) {
        var prevExecutionContext = executionContext;
        executionContext |= RenderContext;
        var prevDispatcher = pushDispatcher();
        if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {
            resetRenderTimer();
            prepareFreshStack(root, lanes);
            startWorkOnPendingInteractions(root, lanes);
        }
        var prevInteractions = pushInteractions(root);
        do {
            try {
                workLoopConcurrent();
                break;
            } catch (thrownValue) {
                handleError(root, thrownValue);
            }
        }while (true)
        resetContextDependencies();
        {
            popInteractions(prevInteractions);
        }
        popDispatcher(prevDispatcher);
        executionContext = prevExecutionContext;
        if (workInProgress1 !== null) {
            return RootIncomplete;
        } else {
            workInProgressRoot = null;
            workInProgressRootRenderLanes = NoLanes;
            return workInProgressRootExitStatus;
        }
    }
    function workLoopConcurrent() {
        while(workInProgress1 !== null && !shouldYield()){
            performUnitOfWork(workInProgress1);
        }
    }
    function performUnitOfWork(unitOfWork) {
        var current = unitOfWork.alternate;
        setCurrentFiber(unitOfWork);
        var next;
        if ((unitOfWork.mode & ProfileMode) !== NoMode) {
            startProfilerTimer(unitOfWork);
            next = beginWork$1(current, unitOfWork, subtreeRenderLanes1);
            stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, true);
        } else {
            next = beginWork$1(current, unitOfWork, subtreeRenderLanes1);
        }
        resetCurrentFiber();
        unitOfWork.memoizedProps = unitOfWork.pendingProps;
        if (next === null) {
            completeUnitOfWork(unitOfWork);
        } else {
            workInProgress1 = next;
        }
        ReactCurrentOwner$2.current = null;
    }
    function completeUnitOfWork(unitOfWork) {
        var completedWork = unitOfWork;
        do {
            var current = completedWork.alternate;
            var returnFiber = completedWork.return;
            if ((completedWork.flags & Incomplete) === NoFlags) {
                setCurrentFiber(completedWork);
                var next = void 0;
                if ((completedWork.mode & ProfileMode) === NoMode) {
                    next = completeWork(current, completedWork, subtreeRenderLanes1);
                } else {
                    startProfilerTimer(completedWork);
                    next = completeWork(current, completedWork, subtreeRenderLanes1);
                    stopProfilerTimerIfRunningAndRecordDelta(completedWork, false);
                }
                resetCurrentFiber();
                if (next !== null) {
                    workInProgress1 = next;
                    return;
                }
                resetChildLanes(completedWork);
                if (returnFiber !== null && (returnFiber.flags & Incomplete) === NoFlags) {
                    if (returnFiber.firstEffect === null) {
                        returnFiber.firstEffect = completedWork.firstEffect;
                    }
                    if (completedWork.lastEffect !== null) {
                        if (returnFiber.lastEffect !== null) {
                            returnFiber.lastEffect.nextEffect = completedWork.firstEffect;
                        }
                        returnFiber.lastEffect = completedWork.lastEffect;
                    }
                    var flags = completedWork.flags;
                    if (flags > PerformedWork) {
                        if (returnFiber.lastEffect !== null) {
                            returnFiber.lastEffect.nextEffect = completedWork;
                        } else {
                            returnFiber.firstEffect = completedWork;
                        }
                        returnFiber.lastEffect = completedWork;
                    }
                }
            } else {
                var _next = unwindWork(completedWork);
                if (_next !== null) {
                    _next.flags &= HostEffectMask;
                    workInProgress1 = _next;
                    return;
                }
                if ((completedWork.mode & ProfileMode) !== NoMode) {
                    stopProfilerTimerIfRunningAndRecordDelta(completedWork, false);
                    var actualDuration = completedWork.actualDuration;
                    var child = completedWork.child;
                    while(child !== null){
                        actualDuration += child.actualDuration;
                        child = child.sibling;
                    }
                    completedWork.actualDuration = actualDuration;
                }
                if (returnFiber !== null) {
                    returnFiber.firstEffect = returnFiber.lastEffect = null;
                    returnFiber.flags |= Incomplete;
                }
            }
            var siblingFiber = completedWork.sibling;
            if (siblingFiber !== null) {
                workInProgress1 = siblingFiber;
                return;
            }
            completedWork = returnFiber;
            workInProgress1 = completedWork;
        }while (completedWork !== null)
        if (workInProgressRootExitStatus === RootIncomplete) {
            workInProgressRootExitStatus = RootCompleted;
        }
    }
    function resetChildLanes(completedWork) {
        if ((completedWork.tag === LegacyHiddenComponent || completedWork.tag === OffscreenComponent) && completedWork.memoizedState !== null && !includesSomeLane(subtreeRenderLanes1, OffscreenLane) && (completedWork.mode & ConcurrentMode) !== NoLanes) {
            return;
        }
        var newChildLanes = NoLanes;
        if ((completedWork.mode & ProfileMode) !== NoMode) {
            var actualDuration = completedWork.actualDuration;
            var treeBaseDuration = completedWork.selfBaseDuration;
            var shouldBubbleActualDurations = completedWork.alternate === null || completedWork.child !== completedWork.alternate.child;
            var child = completedWork.child;
            while(child !== null){
                newChildLanes = mergeLanes(newChildLanes, mergeLanes(child.lanes, child.childLanes));
                if (shouldBubbleActualDurations) {
                    actualDuration += child.actualDuration;
                }
                treeBaseDuration += child.treeBaseDuration;
                child = child.sibling;
            }
            var isTimedOutSuspense = completedWork.tag === SuspenseComponent && completedWork.memoizedState !== null;
            if (isTimedOutSuspense) {
                var primaryChildFragment = completedWork.child;
                if (primaryChildFragment !== null) {
                    treeBaseDuration -= primaryChildFragment.treeBaseDuration;
                }
            }
            completedWork.actualDuration = actualDuration;
            completedWork.treeBaseDuration = treeBaseDuration;
        } else {
            var _child = completedWork.child;
            while(_child !== null){
                newChildLanes = mergeLanes(newChildLanes, mergeLanes(_child.lanes, _child.childLanes));
                _child = _child.sibling;
            }
        }
        completedWork.childLanes = newChildLanes;
    }
    function commitRoot(root) {
        var renderPriorityLevel = getCurrentPriorityLevel();
        runWithPriority$1(ImmediatePriority$1, commitRootImpl.bind(null, root, renderPriorityLevel));
        return null;
    }
    function commitRootImpl(root, renderPriorityLevel) {
        do {
            flushPassiveEffects();
        }while (rootWithPendingPassiveEffects !== null)
        flushRenderPhaseStrictModeWarningsInDEV();
        if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
            {
                throw Error("Should not already be working.");
            }
        }
        var finishedWork = root.finishedWork;
        var lanes = root.finishedLanes;
        if (finishedWork === null) {
            return null;
        }
        root.finishedWork = null;
        root.finishedLanes = NoLanes;
        if (!(finishedWork !== root.current)) {
            {
                throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
            }
        }
        root.callbackNode = null;
        var remainingLanes = mergeLanes(finishedWork.lanes, finishedWork.childLanes);
        markRootFinished(root, remainingLanes);
        if (rootsWithPendingDiscreteUpdates !== null) {
            if (!hasDiscreteLanes(remainingLanes) && rootsWithPendingDiscreteUpdates.has(root)) {
                rootsWithPendingDiscreteUpdates.delete(root);
            }
        }
        if (root === workInProgressRoot) {
            workInProgressRoot = null;
            workInProgress1 = null;
            workInProgressRootRenderLanes = NoLanes;
        }
        var firstEffect;
        if (finishedWork.flags > PerformedWork) {
            if (finishedWork.lastEffect !== null) {
                finishedWork.lastEffect.nextEffect = finishedWork;
                firstEffect = finishedWork.firstEffect;
            } else {
                firstEffect = finishedWork;
            }
        } else {
            firstEffect = finishedWork.firstEffect;
        }
        if (firstEffect !== null) {
            var prevExecutionContext = executionContext;
            executionContext |= CommitContext;
            var prevInteractions = pushInteractions(root);
            ReactCurrentOwner$2.current = null;
            focusedInstanceHandle = prepareForCommit(root.containerInfo);
            shouldFireAfterActiveInstanceBlur = false;
            nextEffect = firstEffect;
            do {
                {
                    invokeGuardedCallback(null, commitBeforeMutationEffects, null);
                    if (hasCaughtError()) {
                        if (!(nextEffect !== null)) {
                            {
                                throw Error("Should be working on an effect.");
                            }
                        }
                        var error = clearCaughtError();
                        captureCommitPhaseError(nextEffect, error);
                        nextEffect = nextEffect.nextEffect;
                    }
                }
            }while (nextEffect !== null)
            focusedInstanceHandle = null;
            {
                recordCommitTime();
            }
            nextEffect = firstEffect;
            do {
                {
                    invokeGuardedCallback(null, commitMutationEffects, null, root, renderPriorityLevel);
                    if (hasCaughtError()) {
                        if (!(nextEffect !== null)) {
                            {
                                throw Error("Should be working on an effect.");
                            }
                        }
                        var _error = clearCaughtError();
                        captureCommitPhaseError(nextEffect, _error);
                        nextEffect = nextEffect.nextEffect;
                    }
                }
            }while (nextEffect !== null)
            resetAfterCommit(root.containerInfo);
            root.current = finishedWork;
            nextEffect = firstEffect;
            do {
                {
                    invokeGuardedCallback(null, commitLayoutEffects, null, root, lanes);
                    if (hasCaughtError()) {
                        if (!(nextEffect !== null)) {
                            {
                                throw Error("Should be working on an effect.");
                            }
                        }
                        var _error2 = clearCaughtError();
                        captureCommitPhaseError(nextEffect, _error2);
                        nextEffect = nextEffect.nextEffect;
                    }
                }
            }while (nextEffect !== null)
            nextEffect = null;
            requestPaint();
            {
                popInteractions(prevInteractions);
            }
            executionContext = prevExecutionContext;
        } else {
            root.current = finishedWork;
            {
                recordCommitTime();
            }
        }
        var rootDidHavePassiveEffects = rootDoesHavePassiveEffects;
        if (rootDoesHavePassiveEffects) {
            rootDoesHavePassiveEffects = false;
            rootWithPendingPassiveEffects = root;
            pendingPassiveEffectsLanes = lanes;
            pendingPassiveEffectsRenderPriority = renderPriorityLevel;
        } else {
            nextEffect = firstEffect;
            while(nextEffect !== null){
                var nextNextEffect = nextEffect.nextEffect;
                nextEffect.nextEffect = null;
                if (nextEffect.flags & Deletion) {
                    detachFiberAfterEffects(nextEffect);
                }
                nextEffect = nextNextEffect;
            }
        }
        remainingLanes = root.pendingLanes;
        if (remainingLanes !== NoLanes) {
            {
                if (spawnedWorkDuringRender !== null) {
                    var expirationTimes = spawnedWorkDuringRender;
                    spawnedWorkDuringRender = null;
                    for(var i = 0; i < expirationTimes.length; i++){
                        scheduleInteractions(root, expirationTimes[i], root.memoizedInteractions);
                    }
                }
                schedulePendingInteractions(root, remainingLanes);
            }
        } else {
            legacyErrorBoundariesThatAlreadyFailed = null;
        }
        {
            if (!rootDidHavePassiveEffects) {
                finishPendingInteractions(root, lanes);
            }
        }
        if (remainingLanes === SyncLane) {
            if (root === rootWithNestedUpdates) {
                nestedUpdateCount++;
            } else {
                nestedUpdateCount = 0;
                rootWithNestedUpdates = root;
            }
        } else {
            nestedUpdateCount = 0;
        }
        onCommitRoot(finishedWork.stateNode, renderPriorityLevel);
        {
            onCommitRoot$1();
        }
        ensureRootIsScheduled(root, now());
        if (hasUncaughtError) {
            hasUncaughtError = false;
            var _error3 = firstUncaughtError;
            firstUncaughtError = null;
            throw _error3;
        }
        if ((executionContext & LegacyUnbatchedContext) !== NoContext) {
            return null;
        }
        flushSyncCallbackQueue();
        return null;
    }
    function commitBeforeMutationEffects() {
        while(nextEffect !== null){
            var current = nextEffect.alternate;
            if (!shouldFireAfterActiveInstanceBlur && focusedInstanceHandle !== null) {
                if ((nextEffect.flags & Deletion) !== NoFlags) {
                    if (doesFiberContain(nextEffect, focusedInstanceHandle)) {
                        shouldFireAfterActiveInstanceBlur = true;
                    }
                } else {
                    if (nextEffect.tag === SuspenseComponent && isSuspenseBoundaryBeingHidden(current, nextEffect) && doesFiberContain(nextEffect, focusedInstanceHandle)) {
                        shouldFireAfterActiveInstanceBlur = true;
                    }
                }
            }
            var flags = nextEffect.flags;
            if ((flags & Snapshot) !== NoFlags) {
                setCurrentFiber(nextEffect);
                commitBeforeMutationLifeCycles(current, nextEffect);
                resetCurrentFiber();
            }
            if ((flags & Passive) !== NoFlags) {
                if (!rootDoesHavePassiveEffects) {
                    rootDoesHavePassiveEffects = true;
                    scheduleCallback(NormalPriority$1, function() {
                        flushPassiveEffects();
                        return null;
                    });
                }
            }
            nextEffect = nextEffect.nextEffect;
        }
    }
    function commitMutationEffects(root, renderPriorityLevel) {
        while(nextEffect !== null){
            setCurrentFiber(nextEffect);
            var flags = nextEffect.flags;
            if (flags & ContentReset) {
                commitResetTextContent(nextEffect);
            }
            if (flags & Ref) {
                var current = nextEffect.alternate;
                if (current !== null) {
                    commitDetachRef(current);
                }
            }
            var primaryFlags = flags & (Placement | Update | Deletion | Hydrating);
            switch(primaryFlags){
                case Placement:
                    {
                        commitPlacement(nextEffect);
                        nextEffect.flags &= ~Placement;
                        break;
                    }
                case PlacementAndUpdate:
                    {
                        commitPlacement(nextEffect);
                        nextEffect.flags &= ~Placement;
                        var _current = nextEffect.alternate;
                        commitWork(_current, nextEffect);
                        break;
                    }
                case Hydrating:
                    {
                        nextEffect.flags &= ~Hydrating;
                        break;
                    }
                case HydratingAndUpdate:
                    {
                        nextEffect.flags &= ~Hydrating;
                        var _current2 = nextEffect.alternate;
                        commitWork(_current2, nextEffect);
                        break;
                    }
                case Update:
                    {
                        var _current3 = nextEffect.alternate;
                        commitWork(_current3, nextEffect);
                        break;
                    }
                case Deletion:
                    {
                        commitDeletion(root, nextEffect);
                        break;
                    }
            }
            resetCurrentFiber();
            nextEffect = nextEffect.nextEffect;
        }
    }
    function commitLayoutEffects(root, committedLanes) {
        while(nextEffect !== null){
            setCurrentFiber(nextEffect);
            var flags = nextEffect.flags;
            if (flags & (Update | Callback)) {
                var current = nextEffect.alternate;
                commitLifeCycles(root, current, nextEffect);
            }
            {
                if (flags & Ref) {
                    commitAttachRef(nextEffect);
                }
            }
            resetCurrentFiber();
            nextEffect = nextEffect.nextEffect;
        }
    }
    function flushPassiveEffects() {
        if (pendingPassiveEffectsRenderPriority !== NoPriority$1) {
            var priorityLevel = pendingPassiveEffectsRenderPriority > NormalPriority$1 ? NormalPriority$1 : pendingPassiveEffectsRenderPriority;
            pendingPassiveEffectsRenderPriority = NoPriority$1;
            {
                return runWithPriority$1(priorityLevel, flushPassiveEffectsImpl);
            }
        }
        return false;
    }
    function enqueuePendingPassiveHookEffectMount(fiber, effect) {
        pendingPassiveHookEffectsMount.push(effect, fiber);
        if (!rootDoesHavePassiveEffects) {
            rootDoesHavePassiveEffects = true;
            scheduleCallback(NormalPriority$1, function() {
                flushPassiveEffects();
                return null;
            });
        }
    }
    function enqueuePendingPassiveHookEffectUnmount(fiber, effect) {
        pendingPassiveHookEffectsUnmount.push(effect, fiber);
        {
            fiber.flags |= PassiveUnmountPendingDev;
            var alternate = fiber.alternate;
            if (alternate !== null) {
                alternate.flags |= PassiveUnmountPendingDev;
            }
        }
        if (!rootDoesHavePassiveEffects) {
            rootDoesHavePassiveEffects = true;
            scheduleCallback(NormalPriority$1, function() {
                flushPassiveEffects();
                return null;
            });
        }
    }
    function invokePassiveEffectCreate(effect) {
        var create = effect.create;
        effect.destroy = create();
    }
    function flushPassiveEffectsImpl() {
        if (rootWithPendingPassiveEffects === null) {
            return false;
        }
        var root = rootWithPendingPassiveEffects;
        var lanes = pendingPassiveEffectsLanes;
        rootWithPendingPassiveEffects = null;
        pendingPassiveEffectsLanes = NoLanes;
        if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
            {
                throw Error("Cannot flush passive effects while already rendering.");
            }
        }
        {
            isFlushingPassiveEffects = true;
        }
        var prevExecutionContext = executionContext;
        executionContext |= CommitContext;
        var prevInteractions = pushInteractions(root);
        var unmountEffects = pendingPassiveHookEffectsUnmount;
        pendingPassiveHookEffectsUnmount = [];
        for(var i = 0; i < unmountEffects.length; i += 2){
            var _effect = unmountEffects[i];
            var fiber = unmountEffects[i + 1];
            var destroy = _effect.destroy;
            _effect.destroy = undefined;
            {
                fiber.flags &= ~PassiveUnmountPendingDev;
                var alternate = fiber.alternate;
                if (alternate !== null) {
                    alternate.flags &= ~PassiveUnmountPendingDev;
                }
            }
            if (typeof destroy === "function") {
                {
                    setCurrentFiber(fiber);
                    {
                        invokeGuardedCallback(null, destroy, null);
                    }
                    if (hasCaughtError()) {
                        if (!(fiber !== null)) {
                            {
                                throw Error("Should be working on an effect.");
                            }
                        }
                        var error = clearCaughtError();
                        captureCommitPhaseError(fiber, error);
                    }
                    resetCurrentFiber();
                }
            }
        }
        var mountEffects = pendingPassiveHookEffectsMount;
        pendingPassiveHookEffectsMount = [];
        for(var _i = 0; _i < mountEffects.length; _i += 2){
            var _effect2 = mountEffects[_i];
            var _fiber = mountEffects[_i + 1];
            {
                setCurrentFiber(_fiber);
                {
                    invokeGuardedCallback(null, invokePassiveEffectCreate, null, _effect2);
                }
                if (hasCaughtError()) {
                    if (!(_fiber !== null)) {
                        {
                            throw Error("Should be working on an effect.");
                        }
                    }
                    var _error4 = clearCaughtError();
                    captureCommitPhaseError(_fiber, _error4);
                }
                resetCurrentFiber();
            }
        }
        var effect = root.current.firstEffect;
        while(effect !== null){
            var nextNextEffect = effect.nextEffect;
            effect.nextEffect = null;
            if (effect.flags & Deletion) {
                detachFiberAfterEffects(effect);
            }
            effect = nextNextEffect;
        }
        {
            popInteractions(prevInteractions);
            finishPendingInteractions(root, lanes);
        }
        {
            isFlushingPassiveEffects = false;
        }
        executionContext = prevExecutionContext;
        flushSyncCallbackQueue();
        nestedPassiveUpdateCount = rootWithPendingPassiveEffects === null ? 0 : nestedPassiveUpdateCount + 1;
        return true;
    }
    function isAlreadyFailedLegacyErrorBoundary(instance) {
        return legacyErrorBoundariesThatAlreadyFailed !== null && legacyErrorBoundariesThatAlreadyFailed.has(instance);
    }
    function markLegacyErrorBoundaryAsFailed(instance) {
        if (legacyErrorBoundariesThatAlreadyFailed === null) {
            legacyErrorBoundariesThatAlreadyFailed = new Set([
                instance
            ]);
        } else {
            legacyErrorBoundariesThatAlreadyFailed.add(instance);
        }
    }
    function prepareToThrowUncaughtError(error) {
        if (!hasUncaughtError) {
            hasUncaughtError = true;
            firstUncaughtError = error;
        }
    }
    var onUncaughtError = prepareToThrowUncaughtError;
    function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
        var errorInfo = createCapturedValue(error, sourceFiber);
        var update = createRootErrorUpdate(rootFiber, errorInfo, SyncLane);
        enqueueUpdate(rootFiber, update);
        var eventTime = requestEventTime();
        var root = markUpdateLaneFromFiberToRoot(rootFiber, SyncLane);
        if (root !== null) {
            markRootUpdated(root, SyncLane, eventTime);
            ensureRootIsScheduled(root, eventTime);
            schedulePendingInteractions(root, SyncLane);
        }
    }
    function captureCommitPhaseError(sourceFiber, error) {
        if (sourceFiber.tag === HostRoot) {
            captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
            return;
        }
        var fiber = sourceFiber.return;
        while(fiber !== null){
            if (fiber.tag === HostRoot) {
                captureCommitPhaseErrorOnRoot(fiber, sourceFiber, error);
                return;
            } else if (fiber.tag === ClassComponent) {
                var ctor = fiber.type;
                var instance = fiber.stateNode;
                if (typeof ctor.getDerivedStateFromError === "function" || typeof instance.componentDidCatch === "function" && !isAlreadyFailedLegacyErrorBoundary(instance)) {
                    var errorInfo = createCapturedValue(error, sourceFiber);
                    var update = createClassErrorUpdate(fiber, errorInfo, SyncLane);
                    enqueueUpdate(fiber, update);
                    var eventTime = requestEventTime();
                    var root = markUpdateLaneFromFiberToRoot(fiber, SyncLane);
                    if (root !== null) {
                        markRootUpdated(root, SyncLane, eventTime);
                        ensureRootIsScheduled(root, eventTime);
                        schedulePendingInteractions(root, SyncLane);
                    } else {
                        if (typeof instance.componentDidCatch === "function" && !isAlreadyFailedLegacyErrorBoundary(instance)) {
                            try {
                                instance.componentDidCatch(error, errorInfo);
                            } catch (errorToIgnore) {}
                        }
                    }
                    return;
                }
            }
            fiber = fiber.return;
        }
    }
    function pingSuspendedRoot(root, wakeable, pingedLanes) {
        var pingCache = root.pingCache;
        if (pingCache !== null) {
            pingCache.delete(wakeable);
        }
        var eventTime = requestEventTime();
        markRootPinged(root, pingedLanes);
        if (workInProgressRoot === root && isSubsetOfLanes(workInProgressRootRenderLanes, pingedLanes)) {
            if (workInProgressRootExitStatus === RootSuspendedWithDelay || workInProgressRootExitStatus === RootSuspended && includesOnlyRetries(workInProgressRootRenderLanes) && now() - globalMostRecentFallbackTime < FALLBACK_THROTTLE_MS) {
                prepareFreshStack(root, NoLanes);
            } else {
                workInProgressRootPingedLanes = mergeLanes(workInProgressRootPingedLanes, pingedLanes);
            }
        }
        ensureRootIsScheduled(root, eventTime);
        schedulePendingInteractions(root, pingedLanes);
    }
    function retryTimedOutBoundary(boundaryFiber, retryLane) {
        if (retryLane === NoLane) {
            retryLane = requestRetryLane(boundaryFiber);
        }
        var eventTime = requestEventTime();
        var root = markUpdateLaneFromFiberToRoot(boundaryFiber, retryLane);
        if (root !== null) {
            markRootUpdated(root, retryLane, eventTime);
            ensureRootIsScheduled(root, eventTime);
            schedulePendingInteractions(root, retryLane);
        }
    }
    function resolveRetryWakeable(boundaryFiber, wakeable) {
        var retryLane = NoLane;
        var retryCache;
        {
            retryCache = boundaryFiber.stateNode;
        }
        if (retryCache !== null) {
            retryCache.delete(wakeable);
        }
        retryTimedOutBoundary(boundaryFiber, retryLane);
    }
    function jnd(timeElapsed) {
        return timeElapsed < 120 ? 120 : timeElapsed < 480 ? 480 : timeElapsed < 1080 ? 1080 : timeElapsed < 1920 ? 1920 : timeElapsed < 3000 ? 3000 : timeElapsed < 4320 ? 4320 : ceil(timeElapsed / 1960) * 1960;
    }
    function checkForNestedUpdates() {
        if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
            nestedUpdateCount = 0;
            rootWithNestedUpdates = null;
            {
                {
                    throw Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
                }
            }
        }
        {
            if (nestedPassiveUpdateCount > NESTED_PASSIVE_UPDATE_LIMIT) {
                nestedPassiveUpdateCount = 0;
                error1("Maximum update depth exceeded. This can happen when a component " + "calls setState inside useEffect, but useEffect either doesn't " + "have a dependency array, or one of the dependencies changes on " + "every render.");
            }
        }
    }
    function flushRenderPhaseStrictModeWarningsInDEV() {
        {
            ReactStrictModeWarnings.flushLegacyContextWarning();
            {
                ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();
            }
        }
    }
    var didWarnStateUpdateForNotYetMountedComponent = null;
    function warnAboutUpdateOnNotYetMountedFiberInDEV(fiber) {
        {
            if ((executionContext & RenderContext) !== NoContext) {
                return;
            }
            if (!(fiber.mode & (BlockingMode | ConcurrentMode))) {
                return;
            }
            var tag = fiber.tag;
            if (tag !== IndeterminateComponent && tag !== HostRoot && tag !== ClassComponent && tag !== FunctionComponent && tag !== ForwardRef && tag !== MemoComponent && tag !== SimpleMemoComponent && tag !== Block) {
                return;
            }
            var componentName = getComponentName(fiber.type) || "ReactComponent";
            if (didWarnStateUpdateForNotYetMountedComponent !== null) {
                if (didWarnStateUpdateForNotYetMountedComponent.has(componentName)) {
                    return;
                }
                didWarnStateUpdateForNotYetMountedComponent.add(componentName);
            } else {
                didWarnStateUpdateForNotYetMountedComponent = new Set([
                    componentName
                ]);
            }
            var previousFiber = current1;
            try {
                setCurrentFiber(fiber);
                error1("Can't perform a React state update on a component that hasn't mounted yet. " + "This indicates that you have a side-effect in your render function that " + "asynchronously later calls tries to update the component. Move this work to " + "useEffect instead.");
            } finally{
                if (previousFiber) {
                    setCurrentFiber(fiber);
                } else {
                    resetCurrentFiber();
                }
            }
        }
    }
    var didWarnStateUpdateForUnmountedComponent = null;
    function warnAboutUpdateOnUnmountedFiberInDEV(fiber) {
        {
            var tag = fiber.tag;
            if (tag !== HostRoot && tag !== ClassComponent && tag !== FunctionComponent && tag !== ForwardRef && tag !== MemoComponent && tag !== SimpleMemoComponent && tag !== Block) {
                return;
            }
            if ((fiber.flags & PassiveUnmountPendingDev) !== NoFlags) {
                return;
            }
            var componentName = getComponentName(fiber.type) || "ReactComponent";
            if (didWarnStateUpdateForUnmountedComponent !== null) {
                if (didWarnStateUpdateForUnmountedComponent.has(componentName)) {
                    return;
                }
                didWarnStateUpdateForUnmountedComponent.add(componentName);
            } else {
                didWarnStateUpdateForUnmountedComponent = new Set([
                    componentName
                ]);
            }
            if (isFlushingPassiveEffects) ;
            else {
                var previousFiber = current1;
                try {
                    setCurrentFiber(fiber);
                    error1("Can't perform a React state update on an unmounted component. This " + "is a no-op, but it indicates a memory leak in your application. To " + "fix, cancel all subscriptions and asynchronous tasks in %s.", tag === ClassComponent ? "the componentWillUnmount method" : "a useEffect cleanup function");
                } finally{
                    if (previousFiber) {
                        setCurrentFiber(fiber);
                    } else {
                        resetCurrentFiber();
                    }
                }
            }
        }
    }
    var beginWork$1;
    {
        var dummyFiber = null;
        beginWork$1 = function(current, unitOfWork, lanes) {
            var originalWorkInProgressCopy = assignFiberPropertiesInDEV(dummyFiber, unitOfWork);
            try {
                return beginWork(current, unitOfWork, lanes);
            } catch (originalError) {
                if (originalError !== null && typeof originalError === "object" && typeof originalError.then === "function") {
                    throw originalError;
                }
                resetContextDependencies();
                resetHooksAfterThrow();
                unwindInterruptedWork(unitOfWork);
                assignFiberPropertiesInDEV(unitOfWork, originalWorkInProgressCopy);
                if (unitOfWork.mode & ProfileMode) {
                    startProfilerTimer(unitOfWork);
                }
                invokeGuardedCallback(null, beginWork, null, current, unitOfWork, lanes);
                if (hasCaughtError()) {
                    var replayError = clearCaughtError();
                    throw replayError;
                } else {
                    throw originalError;
                }
            }
        };
    }
    var didWarnAboutUpdateInRender = false;
    var didWarnAboutUpdateInRenderForAnotherComponent;
    {
        didWarnAboutUpdateInRenderForAnotherComponent = new Set();
    }
    function warnAboutRenderPhaseUpdatesInDEV(fiber) {
        {
            if (isRendering && (executionContext & RenderContext) !== NoContext && !getIsUpdatingOpaqueValueInRenderPhaseInDEV()) {
                switch(fiber.tag){
                    case FunctionComponent:
                    case ForwardRef:
                    case SimpleMemoComponent:
                        {
                            var renderingComponentName = workInProgress1 && getComponentName(workInProgress1.type) || "Unknown";
                            var dedupeKey = renderingComponentName;
                            if (!didWarnAboutUpdateInRenderForAnotherComponent.has(dedupeKey)) {
                                didWarnAboutUpdateInRenderForAnotherComponent.add(dedupeKey);
                                var setStateComponentName = getComponentName(fiber.type) || "Unknown";
                                error1("Cannot update a component (`%s`) while rendering a " + "different component (`%s`). To locate the bad setState() call inside `%s`, " + "follow the stack trace as described in https://reactjs.org/link/setstate-in-render", setStateComponentName, renderingComponentName, renderingComponentName);
                            }
                            break;
                        }
                    case ClassComponent:
                        {
                            if (!didWarnAboutUpdateInRender) {
                                error1("Cannot update during an existing state transition (such as " + "within `render`). Render methods should be a pure " + "function of props and state.");
                                didWarnAboutUpdateInRender = true;
                            }
                            break;
                        }
                }
            }
        }
    }
    var IsThisRendererActing = {
        current: false
    };
    function warnIfNotScopedWithMatchingAct(fiber) {
        {
            if (IsSomeRendererActing.current === true && IsThisRendererActing.current !== true) {
                var previousFiber = current1;
                try {
                    setCurrentFiber(fiber);
                    error1("It looks like you're using the wrong act() around your test interactions.\n" + "Be sure to use the matching version of act() corresponding to your renderer:\n\n" + "// for react-dom:\n" + "import {act} fr" + "om 'react-dom/test-utils';\n" + "// ...\n" + "act(() => ...);\n\n" + "// for react-test-renderer:\n" + "import TestRenderer fr" + "om react-test-renderer';\n" + "const {act} = TestRenderer;\n" + "// ...\n" + "act(() => ...);");
                } finally{
                    if (previousFiber) {
                        setCurrentFiber(fiber);
                    } else {
                        resetCurrentFiber();
                    }
                }
            }
        }
    }
    function warnIfNotCurrentlyActingEffectsInDEV(fiber) {
        {
            if ((fiber.mode & StrictMode1) !== NoMode && IsSomeRendererActing.current === false && IsThisRendererActing.current === false) {
                error1("An update to %s ran an effect, but was not wrapped in act(...).\n\n" + "When testing, code that causes React state updates should be " + "wrapped into act(...):\n\n" + "act(() => {\n" + "  /* fire events that update state */\n" + "});\n" + "/* assert on the output */\n\n" + "This ensures that you're testing the behavior the user would see " + "in the browser." + " Learn more at https://reactjs.org/link/wrap-tests-with-act", getComponentName(fiber.type));
            }
        }
    }
    function warnIfNotCurrentlyActingUpdatesInDEV(fiber) {
        {
            if (executionContext === NoContext && IsSomeRendererActing.current === false && IsThisRendererActing.current === false) {
                var previousFiber = current1;
                try {
                    setCurrentFiber(fiber);
                    error1("An update to %s inside a test was not wrapped in act(...).\n\n" + "When testing, code that causes React state updates should be " + "wrapped into act(...):\n\n" + "act(() => {\n" + "  /* fire events that update state */\n" + "});\n" + "/* assert on the output */\n\n" + "This ensures that you're testing the behavior the user would see " + "in the browser." + " Learn more at https://reactjs.org/link/wrap-tests-with-act", getComponentName(fiber.type));
                } finally{
                    if (previousFiber) {
                        setCurrentFiber(fiber);
                    } else {
                        resetCurrentFiber();
                    }
                }
            }
        }
    }
    var warnIfNotCurrentlyActingUpdatesInDev = warnIfNotCurrentlyActingUpdatesInDEV;
    var didWarnAboutUnmockedScheduler = false;
    function warnIfUnmockedScheduler(fiber) {
        {
            if (didWarnAboutUnmockedScheduler === false && Scheduler.unstable_flushAllWithoutAsserting === undefined) {
                if (fiber.mode & BlockingMode || fiber.mode & ConcurrentMode) {
                    didWarnAboutUnmockedScheduler = true;
                    error1("In Concurrent or Sync modes, the \"scheduler\" module needs to be mocked " + "to guarantee consistent behaviour across tests and browsers. " + "For example, with jest: \n" + "jest.mock('scheduler', () => require" + "('scheduler/unstable_mock'));\n\n" + "For more info, visit https://reactjs.org/link/mock-scheduler");
                }
            }
        }
    }
    function computeThreadID(root, lane) {
        return lane * 1000 + root.interactionThreadID;
    }
    function markSpawnedWork(lane) {
        if (spawnedWorkDuringRender === null) {
            spawnedWorkDuringRender = [
                lane
            ];
        } else {
            spawnedWorkDuringRender.push(lane);
        }
    }
    function scheduleInteractions(root, lane, interactions) {
        if (interactions.size > 0) {
            var pendingInteractionMap = root.pendingInteractionMap;
            var pendingInteractions = pendingInteractionMap.get(lane);
            if (pendingInteractions != null) {
                interactions.forEach(function(interaction) {
                    if (!pendingInteractions.has(interaction)) {
                        interaction.__count++;
                    }
                    pendingInteractions.add(interaction);
                });
            } else {
                pendingInteractionMap.set(lane, new Set(interactions));
                interactions.forEach(function(interaction) {
                    interaction.__count++;
                });
            }
            var subscriber = tracing.__subscriberRef.current;
            if (subscriber !== null) {
                var threadID = computeThreadID(root, lane);
                subscriber.onWorkScheduled(interactions, threadID);
            }
        }
    }
    function schedulePendingInteractions(root, lane) {
        scheduleInteractions(root, lane, tracing.__interactionsRef.current);
    }
    function startWorkOnPendingInteractions(root, lanes) {
        var interactions = new Set();
        root.pendingInteractionMap.forEach(function(scheduledInteractions, scheduledLane) {
            if (includesSomeLane(lanes, scheduledLane)) {
                scheduledInteractions.forEach(function(interaction) {
                    return interactions.add(interaction);
                });
            }
        });
        root.memoizedInteractions = interactions;
        if (interactions.size > 0) {
            var subscriber = tracing.__subscriberRef.current;
            if (subscriber !== null) {
                var threadID = computeThreadID(root, lanes);
                try {
                    subscriber.onWorkStarted(interactions, threadID);
                } catch (error) {
                    scheduleCallback(ImmediatePriority$1, function() {
                        throw error;
                    });
                }
            }
        }
    }
    function finishPendingInteractions(root, committedLanes) {
        var remainingLanesAfterCommit = root.pendingLanes;
        var subscriber;
        try {
            subscriber = tracing.__subscriberRef.current;
            if (subscriber !== null && root.memoizedInteractions.size > 0) {
                var threadID = computeThreadID(root, committedLanes);
                subscriber.onWorkStopped(root.memoizedInteractions, threadID);
            }
        } catch (error2) {
            scheduleCallback(ImmediatePriority$1, function() {
                throw error2;
            });
        } finally{
            var pendingInteractionMap = root.pendingInteractionMap;
            pendingInteractionMap.forEach(function(scheduledInteractions, lane) {
                if (!includesSomeLane(remainingLanesAfterCommit, lane)) {
                    pendingInteractionMap.delete(lane);
                    scheduledInteractions.forEach(function(interaction) {
                        interaction.__count--;
                        if (subscriber !== null && interaction.__count === 0) {
                            try {
                                subscriber.onInteractionScheduledWorkCompleted(interaction);
                            } catch (error) {
                                scheduleCallback(ImmediatePriority$1, function() {
                                    throw error;
                                });
                            }
                        }
                    });
                }
            });
        }
    }
    function shouldForceFlushFallbacksInDEV() {
        return actingUpdatesScopeDepth > 0;
    }
    var actingUpdatesScopeDepth = 0;
    function detachFiberAfterEffects(fiber) {
        fiber.sibling = null;
        fiber.stateNode = null;
    }
    var resolveFamily = null;
    var failedBoundaries = null;
    var setRefreshHandler = function(handler) {
        {
            resolveFamily = handler;
        }
    };
    function resolveFunctionForHotReloading(type) {
        {
            if (resolveFamily === null) {
                return type;
            }
            var family = resolveFamily(type);
            if (family === undefined) {
                return type;
            }
            return family.current;
        }
    }
    function resolveClassForHotReloading(type) {
        return resolveFunctionForHotReloading(type);
    }
    function resolveForwardRefForHotReloading(type) {
        {
            if (resolveFamily === null) {
                return type;
            }
            var family = resolveFamily(type);
            if (family === undefined) {
                if (type !== null && type !== undefined && typeof type.render === "function") {
                    var currentRender = resolveFunctionForHotReloading(type.render);
                    if (type.render !== currentRender) {
                        var syntheticType = {
                            $$typeof: REACT_FORWARD_REF_TYPE,
                            render: currentRender
                        };
                        if (type.displayName !== undefined) {
                            syntheticType.displayName = type.displayName;
                        }
                        return syntheticType;
                    }
                }
                return type;
            }
            return family.current;
        }
    }
    function isCompatibleFamilyForHotReloading(fiber, element) {
        {
            if (resolveFamily === null) {
                return false;
            }
            var prevType = fiber.elementType;
            var nextType = element.type;
            var needsCompareFamilies = false;
            var $$typeofNextType = typeof nextType === "object" && nextType !== null ? nextType.$$typeof : null;
            switch(fiber.tag){
                case ClassComponent:
                    {
                        if (typeof nextType === "function") {
                            needsCompareFamilies = true;
                        }
                        break;
                    }
                case FunctionComponent:
                    {
                        if (typeof nextType === "function") {
                            needsCompareFamilies = true;
                        } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                            needsCompareFamilies = true;
                        }
                        break;
                    }
                case ForwardRef:
                    {
                        if ($$typeofNextType === REACT_FORWARD_REF_TYPE) {
                            needsCompareFamilies = true;
                        } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                            needsCompareFamilies = true;
                        }
                        break;
                    }
                case MemoComponent:
                case SimpleMemoComponent:
                    {
                        if ($$typeofNextType === REACT_MEMO_TYPE) {
                            needsCompareFamilies = true;
                        } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                            needsCompareFamilies = true;
                        }
                        break;
                    }
                default:
                    return false;
            }
            if (needsCompareFamilies) {
                var prevFamily = resolveFamily(prevType);
                if (prevFamily !== undefined && prevFamily === resolveFamily(nextType)) {
                    return true;
                }
            }
            return false;
        }
    }
    function markFailedErrorBoundaryForHotReloading(fiber) {
        {
            if (resolveFamily === null) {
                return;
            }
            if (typeof WeakSet !== "function") {
                return;
            }
            if (failedBoundaries === null) {
                failedBoundaries = new WeakSet();
            }
            failedBoundaries.add(fiber);
        }
    }
    var scheduleRefresh = function(root, update) {
        {
            if (resolveFamily === null) {
                return;
            }
            var staleFamilies = update.staleFamilies, updatedFamilies = update.updatedFamilies;
            flushPassiveEffects();
            flushSync1(function() {
                scheduleFibersWithFamiliesRecursively(root.current, updatedFamilies, staleFamilies);
            });
        }
    };
    var scheduleRoot = function(root, element) {
        {
            if (root.context !== emptyContextObject) {
                return;
            }
            flushPassiveEffects();
            flushSync1(function() {
                updateContainer(element, root, null, null);
            });
        }
    };
    function scheduleFibersWithFamiliesRecursively(fiber, updatedFamilies, staleFamilies) {
        {
            var alternate = fiber.alternate, child = fiber.child, sibling = fiber.sibling, tag = fiber.tag, type = fiber.type;
            var candidateType = null;
            switch(tag){
                case FunctionComponent:
                case SimpleMemoComponent:
                case ClassComponent:
                    candidateType = type;
                    break;
                case ForwardRef:
                    candidateType = type.render;
                    break;
            }
            if (resolveFamily === null) {
                throw new Error("Expected resolveFamily to be set during hot reload.");
            }
            var needsRender = false;
            var needsRemount = false;
            if (candidateType !== null) {
                var family = resolveFamily(candidateType);
                if (family !== undefined) {
                    if (staleFamilies.has(family)) {
                        needsRemount = true;
                    } else if (updatedFamilies.has(family)) {
                        if (tag === ClassComponent) {
                            needsRemount = true;
                        } else {
                            needsRender = true;
                        }
                    }
                }
            }
            if (failedBoundaries !== null) {
                if (failedBoundaries.has(fiber) || alternate !== null && failedBoundaries.has(alternate)) {
                    needsRemount = true;
                }
            }
            if (needsRemount) {
                fiber._debugNeedsRemount = true;
            }
            if (needsRemount || needsRender) {
                scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
            }
            if (child !== null && !needsRemount) {
                scheduleFibersWithFamiliesRecursively(child, updatedFamilies, staleFamilies);
            }
            if (sibling !== null) {
                scheduleFibersWithFamiliesRecursively(sibling, updatedFamilies, staleFamilies);
            }
        }
    }
    var findHostInstancesForRefresh = function(root, families) {
        {
            var hostInstances = new Set();
            var types = new Set(families.map(function(family) {
                return family.current;
            }));
            findHostInstancesForMatchingFibersRecursively(root.current, types, hostInstances);
            return hostInstances;
        }
    };
    function findHostInstancesForMatchingFibersRecursively(fiber, types, hostInstances) {
        {
            var child = fiber.child, sibling = fiber.sibling, tag = fiber.tag, type = fiber.type;
            var candidateType = null;
            switch(tag){
                case FunctionComponent:
                case SimpleMemoComponent:
                case ClassComponent:
                    candidateType = type;
                    break;
                case ForwardRef:
                    candidateType = type.render;
                    break;
            }
            var didMatch = false;
            if (candidateType !== null) {
                if (types.has(candidateType)) {
                    didMatch = true;
                }
            }
            if (didMatch) {
                findHostInstancesForFiberShallowly(fiber, hostInstances);
            } else {
                if (child !== null) {
                    findHostInstancesForMatchingFibersRecursively(child, types, hostInstances);
                }
            }
            if (sibling !== null) {
                findHostInstancesForMatchingFibersRecursively(sibling, types, hostInstances);
            }
        }
    }
    function findHostInstancesForFiberShallowly(fiber, hostInstances) {
        {
            var foundHostInstances = findChildHostInstancesForFiberShallowly(fiber, hostInstances);
            if (foundHostInstances) {
                return;
            }
            var node = fiber;
            while(true){
                switch(node.tag){
                    case HostComponent:
                        hostInstances.add(node.stateNode);
                        return;
                    case HostPortal:
                        hostInstances.add(node.stateNode.containerInfo);
                        return;
                    case HostRoot:
                        hostInstances.add(node.stateNode.containerInfo);
                        return;
                }
                if (node.return === null) {
                    throw new Error("Expected to reach root first.");
                }
                node = node.return;
            }
        }
    }
    function findChildHostInstancesForFiberShallowly(fiber, hostInstances) {
        {
            var node = fiber;
            var foundHostInstances = false;
            while(true){
                if (node.tag === HostComponent) {
                    foundHostInstances = true;
                    hostInstances.add(node.stateNode);
                } else if (node.child !== null) {
                    node.child.return = node;
                    node = node.child;
                    continue;
                }
                if (node === fiber) {
                    return foundHostInstances;
                }
                while(node.sibling === null){
                    if (node.return === null || node.return === fiber) {
                        return foundHostInstances;
                    }
                    node = node.return;
                }
                node.sibling.return = node.return;
                node = node.sibling;
            }
        }
        return false;
    }
    var hasBadMapPolyfill;
    {
        hasBadMapPolyfill = false;
        try {
            var nonExtensibleObject = Object.preventExtensions({});
            new Map([
                [
                    nonExtensibleObject,
                    null
                ]
            ]);
            new Set([
                nonExtensibleObject
            ]);
        } catch (e) {
            hasBadMapPolyfill = true;
        }
    }
    var debugCounter = 1;
    function FiberNode(tag, pendingProps, key, mode) {
        this.tag = tag;
        this.key = key;
        this.elementType = null;
        this.type = null;
        this.stateNode = null;
        this.return = null;
        this.child = null;
        this.sibling = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = pendingProps;
        this.memoizedProps = null;
        this.updateQueue = null;
        this.memoizedState = null;
        this.dependencies = null;
        this.mode = mode;
        this.flags = NoFlags;
        this.nextEffect = null;
        this.firstEffect = null;
        this.lastEffect = null;
        this.lanes = NoLanes;
        this.childLanes = NoLanes;
        this.alternate = null;
        {
            this.actualDuration = Number.NaN;
            this.actualStartTime = Number.NaN;
            this.selfBaseDuration = Number.NaN;
            this.treeBaseDuration = Number.NaN;
            this.actualDuration = 0;
            this.actualStartTime = -1;
            this.selfBaseDuration = 0;
            this.treeBaseDuration = 0;
        }
        {
            this._debugID = debugCounter++;
            this._debugSource = null;
            this._debugOwner = null;
            this._debugNeedsRemount = false;
            this._debugHookTypes = null;
            if (!hasBadMapPolyfill && typeof Object.preventExtensions === "function") {
                Object.preventExtensions(this);
            }
        }
    }
    var createFiber = function(tag, pendingProps, key, mode) {
        return new FiberNode(tag, pendingProps, key, mode);
    };
    function shouldConstruct$1(Component19) {
        var prototype = Component19.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function isSimpleFunctionComponent(type) {
        return typeof type === "function" && !shouldConstruct$1(type) && type.defaultProps === undefined;
    }
    function resolveLazyComponentTag(Component20) {
        if (typeof Component20 === "function") {
            return shouldConstruct$1(Component20) ? ClassComponent : FunctionComponent;
        } else if (Component20 !== undefined && Component20 !== null) {
            var $$typeof = Component20.$$typeof;
            if ($$typeof === REACT_FORWARD_REF_TYPE) {
                return ForwardRef;
            }
            if ($$typeof === REACT_MEMO_TYPE) {
                return MemoComponent;
            }
        }
        return IndeterminateComponent;
    }
    function createWorkInProgress(current, pendingProps) {
        var workInProgress = current.alternate;
        if (workInProgress === null) {
            workInProgress = createFiber(current.tag, pendingProps, current.key, current.mode);
            workInProgress.elementType = current.elementType;
            workInProgress.type = current.type;
            workInProgress.stateNode = current.stateNode;
            {
                workInProgress._debugID = current._debugID;
                workInProgress._debugSource = current._debugSource;
                workInProgress._debugOwner = current._debugOwner;
                workInProgress._debugHookTypes = current._debugHookTypes;
            }
            workInProgress.alternate = current;
            current.alternate = workInProgress;
        } else {
            workInProgress.pendingProps = pendingProps;
            workInProgress.type = current.type;
            workInProgress.flags = NoFlags;
            workInProgress.nextEffect = null;
            workInProgress.firstEffect = null;
            workInProgress.lastEffect = null;
            {
                workInProgress.actualDuration = 0;
                workInProgress.actualStartTime = -1;
            }
        }
        workInProgress.childLanes = current.childLanes;
        workInProgress.lanes = current.lanes;
        workInProgress.child = current.child;
        workInProgress.memoizedProps = current.memoizedProps;
        workInProgress.memoizedState = current.memoizedState;
        workInProgress.updateQueue = current.updateQueue;
        var currentDependencies = current.dependencies;
        workInProgress.dependencies = currentDependencies === null ? null : {
            lanes: currentDependencies.lanes,
            firstContext: currentDependencies.firstContext
        };
        workInProgress.sibling = current.sibling;
        workInProgress.index = current.index;
        workInProgress.ref = current.ref;
        {
            workInProgress.selfBaseDuration = current.selfBaseDuration;
            workInProgress.treeBaseDuration = current.treeBaseDuration;
        }
        {
            workInProgress._debugNeedsRemount = current._debugNeedsRemount;
            switch(workInProgress.tag){
                case IndeterminateComponent:
                case FunctionComponent:
                case SimpleMemoComponent:
                    workInProgress.type = resolveFunctionForHotReloading(current.type);
                    break;
                case ClassComponent:
                    workInProgress.type = resolveClassForHotReloading(current.type);
                    break;
                case ForwardRef:
                    workInProgress.type = resolveForwardRefForHotReloading(current.type);
                    break;
            }
        }
        return workInProgress;
    }
    function resetWorkInProgress(workInProgress, renderLanes) {
        workInProgress.flags &= Placement;
        workInProgress.nextEffect = null;
        workInProgress.firstEffect = null;
        workInProgress.lastEffect = null;
        var current = workInProgress.alternate;
        if (current === null) {
            workInProgress.childLanes = NoLanes;
            workInProgress.lanes = renderLanes;
            workInProgress.child = null;
            workInProgress.memoizedProps = null;
            workInProgress.memoizedState = null;
            workInProgress.updateQueue = null;
            workInProgress.dependencies = null;
            workInProgress.stateNode = null;
            {
                workInProgress.selfBaseDuration = 0;
                workInProgress.treeBaseDuration = 0;
            }
        } else {
            workInProgress.childLanes = current.childLanes;
            workInProgress.lanes = current.lanes;
            workInProgress.child = current.child;
            workInProgress.memoizedProps = current.memoizedProps;
            workInProgress.memoizedState = current.memoizedState;
            workInProgress.updateQueue = current.updateQueue;
            workInProgress.type = current.type;
            var currentDependencies = current.dependencies;
            workInProgress.dependencies = currentDependencies === null ? null : {
                lanes: currentDependencies.lanes,
                firstContext: currentDependencies.firstContext
            };
            {
                workInProgress.selfBaseDuration = current.selfBaseDuration;
                workInProgress.treeBaseDuration = current.treeBaseDuration;
            }
        }
        return workInProgress;
    }
    function createHostRootFiber(tag) {
        var mode;
        if (tag === ConcurrentRoot) {
            mode = ConcurrentMode | BlockingMode | StrictMode1;
        } else if (tag === BlockingRoot) {
            mode = BlockingMode | StrictMode1;
        } else {
            mode = NoMode;
        }
        if (isDevToolsPresent) {
            mode |= ProfileMode;
        }
        return createFiber(HostRoot, null, null, mode);
    }
    function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
        var fiberTag = IndeterminateComponent;
        var resolvedType = type;
        if (typeof type === "function") {
            if (shouldConstruct$1(type)) {
                fiberTag = ClassComponent;
                {
                    resolvedType = resolveClassForHotReloading(resolvedType);
                }
            } else {
                {
                    resolvedType = resolveFunctionForHotReloading(resolvedType);
                }
            }
        } else if (typeof type === "string") {
            fiberTag = HostComponent;
        } else {
            getTag: switch(type){
                case REACT_FRAGMENT_TYPE:
                    return createFiberFromFragment(pendingProps.children, mode, lanes, key);
                case REACT_DEBUG_TRACING_MODE_TYPE:
                    fiberTag = Mode;
                    mode |= DebugTracingMode;
                    break;
                case REACT_STRICT_MODE_TYPE:
                    fiberTag = Mode;
                    mode |= StrictMode1;
                    break;
                case REACT_PROFILER_TYPE:
                    return createFiberFromProfiler(pendingProps, mode, lanes, key);
                case REACT_SUSPENSE_TYPE:
                    return createFiberFromSuspense(pendingProps, mode, lanes, key);
                case REACT_SUSPENSE_LIST_TYPE:
                    return createFiberFromSuspenseList(pendingProps, mode, lanes, key);
                case REACT_OFFSCREEN_TYPE:
                    return createFiberFromOffscreen(pendingProps, mode, lanes, key);
                case REACT_LEGACY_HIDDEN_TYPE:
                    return createFiberFromLegacyHidden(pendingProps, mode, lanes, key);
                case REACT_SCOPE_TYPE:
                default:
                    {
                        if (typeof type === "object" && type !== null) {
                            switch(type.$$typeof){
                                case REACT_PROVIDER_TYPE:
                                    fiberTag = ContextProvider;
                                    break getTag;
                                case REACT_CONTEXT_TYPE:
                                    fiberTag = ContextConsumer;
                                    break getTag;
                                case REACT_FORWARD_REF_TYPE:
                                    fiberTag = ForwardRef;
                                    {
                                        resolvedType = resolveForwardRefForHotReloading(resolvedType);
                                    }
                                    break getTag;
                                case REACT_MEMO_TYPE:
                                    fiberTag = MemoComponent;
                                    break getTag;
                                case REACT_LAZY_TYPE:
                                    fiberTag = LazyComponent;
                                    resolvedType = null;
                                    break getTag;
                                case REACT_BLOCK_TYPE:
                                    fiberTag = Block;
                                    break getTag;
                            }
                        }
                        var info = "";
                        {
                            if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                                info += " You likely forgot to export your component from the file " + "it's defined in, or you might have mixed up default and " + "named imports.";
                            }
                            var ownerName = owner ? getComponentName(owner.type) : null;
                            if (ownerName) {
                                info += "\n\nCheck the render method of `" + ownerName + "`.";
                            }
                        }
                        {
                            {
                                throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (type == null ? type : typeof type) + "." + info);
                            }
                        }
                    }
            }
        }
        var fiber = createFiber(fiberTag, pendingProps, key, mode);
        fiber.elementType = type;
        fiber.type = resolvedType;
        fiber.lanes = lanes;
        {
            fiber._debugOwner = owner;
        }
        return fiber;
    }
    function createFiberFromElement(element, mode, lanes) {
        var owner = null;
        {
            owner = element._owner;
        }
        var type = element.type;
        var key = element.key;
        var pendingProps = element.props;
        var fiber = createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes);
        {
            fiber._debugSource = element._source;
            fiber._debugOwner = element._owner;
        }
        return fiber;
    }
    function createFiberFromFragment(elements, mode, lanes, key) {
        var fiber = createFiber(Fragment1, elements, key, mode);
        fiber.lanes = lanes;
        return fiber;
    }
    function createFiberFromProfiler(pendingProps, mode, lanes, key) {
        {
            if (typeof pendingProps.id !== "string") {
                error1("Profiler must specify an \"id\" as a prop");
            }
        }
        var fiber = createFiber(Profiler1, pendingProps, key, mode | ProfileMode);
        fiber.elementType = REACT_PROFILER_TYPE;
        fiber.type = REACT_PROFILER_TYPE;
        fiber.lanes = lanes;
        {
            fiber.stateNode = {
                effectDuration: 0,
                passiveEffectDuration: 0
            };
        }
        return fiber;
    }
    function createFiberFromSuspense(pendingProps, mode, lanes, key) {
        var fiber = createFiber(SuspenseComponent, pendingProps, key, mode);
        fiber.type = REACT_SUSPENSE_TYPE;
        fiber.elementType = REACT_SUSPENSE_TYPE;
        fiber.lanes = lanes;
        return fiber;
    }
    function createFiberFromSuspenseList(pendingProps, mode, lanes, key) {
        var fiber = createFiber(SuspenseListComponent, pendingProps, key, mode);
        {
            fiber.type = REACT_SUSPENSE_LIST_TYPE;
        }
        fiber.elementType = REACT_SUSPENSE_LIST_TYPE;
        fiber.lanes = lanes;
        return fiber;
    }
    function createFiberFromOffscreen(pendingProps, mode, lanes, key) {
        var fiber = createFiber(OffscreenComponent, pendingProps, key, mode);
        {
            fiber.type = REACT_OFFSCREEN_TYPE;
        }
        fiber.elementType = REACT_OFFSCREEN_TYPE;
        fiber.lanes = lanes;
        return fiber;
    }
    function createFiberFromLegacyHidden(pendingProps, mode, lanes, key) {
        var fiber = createFiber(LegacyHiddenComponent, pendingProps, key, mode);
        {
            fiber.type = REACT_LEGACY_HIDDEN_TYPE;
        }
        fiber.elementType = REACT_LEGACY_HIDDEN_TYPE;
        fiber.lanes = lanes;
        return fiber;
    }
    function createFiberFromText(content, mode, lanes) {
        var fiber = createFiber(HostText, content, null, mode);
        fiber.lanes = lanes;
        return fiber;
    }
    function createFiberFromHostInstanceForDeletion() {
        var fiber = createFiber(HostComponent, null, null, NoMode);
        fiber.elementType = "DELETED";
        fiber.type = "DELETED";
        return fiber;
    }
    function createFiberFromPortal(portal, mode, lanes) {
        var pendingProps = portal.children !== null ? portal.children : [];
        var fiber = createFiber(HostPortal, pendingProps, portal.key, mode);
        fiber.lanes = lanes;
        fiber.stateNode = {
            containerInfo: portal.containerInfo,
            pendingChildren: null,
            implementation: portal.implementation
        };
        return fiber;
    }
    function assignFiberPropertiesInDEV(target, source) {
        if (target === null) {
            target = createFiber(IndeterminateComponent, null, null, NoMode);
        }
        target.tag = source.tag;
        target.key = source.key;
        target.elementType = source.elementType;
        target.type = source.type;
        target.stateNode = source.stateNode;
        target.return = source.return;
        target.child = source.child;
        target.sibling = source.sibling;
        target.index = source.index;
        target.ref = source.ref;
        target.pendingProps = source.pendingProps;
        target.memoizedProps = source.memoizedProps;
        target.updateQueue = source.updateQueue;
        target.memoizedState = source.memoizedState;
        target.dependencies = source.dependencies;
        target.mode = source.mode;
        target.flags = source.flags;
        target.nextEffect = source.nextEffect;
        target.firstEffect = source.firstEffect;
        target.lastEffect = source.lastEffect;
        target.lanes = source.lanes;
        target.childLanes = source.childLanes;
        target.alternate = source.alternate;
        {
            target.actualDuration = source.actualDuration;
            target.actualStartTime = source.actualStartTime;
            target.selfBaseDuration = source.selfBaseDuration;
            target.treeBaseDuration = source.treeBaseDuration;
        }
        target._debugID = source._debugID;
        target._debugSource = source._debugSource;
        target._debugOwner = source._debugOwner;
        target._debugNeedsRemount = source._debugNeedsRemount;
        target._debugHookTypes = source._debugHookTypes;
        return target;
    }
    function FiberRootNode(containerInfo, tag, hydrate2) {
        this.tag = tag;
        this.containerInfo = containerInfo;
        this.pendingChildren = null;
        this.current = null;
        this.pingCache = null;
        this.finishedWork = null;
        this.timeoutHandle = noTimeout;
        this.context = null;
        this.pendingContext = null;
        this.hydrate = hydrate2;
        this.callbackNode = null;
        this.callbackPriority = NoLanePriority;
        this.eventTimes = createLaneMap(NoLanes);
        this.expirationTimes = createLaneMap(NoTimestamp);
        this.pendingLanes = NoLanes;
        this.suspendedLanes = NoLanes;
        this.pingedLanes = NoLanes;
        this.expiredLanes = NoLanes;
        this.mutableReadLanes = NoLanes;
        this.finishedLanes = NoLanes;
        this.entangledLanes = NoLanes;
        this.entanglements = createLaneMap(NoLanes);
        {
            this.mutableSourceEagerHydrationData = null;
        }
        {
            this.interactionThreadID = tracing.unstable_getThreadID();
            this.memoizedInteractions = new Set();
            this.pendingInteractionMap = new Map();
        }
        {
            switch(tag){
                case BlockingRoot:
                    this._debugRootType = "createBlockingRoot()";
                    break;
                case ConcurrentRoot:
                    this._debugRootType = "createRoot()";
                    break;
                case LegacyRoot:
                    this._debugRootType = "createLegacyRoot()";
                    break;
            }
        }
    }
    function createFiberRoot(containerInfo, tag, hydrate3, hydrationCallbacks) {
        var root = new FiberRootNode(containerInfo, tag, hydrate3);
        var uninitializedFiber = createHostRootFiber(tag);
        root.current = uninitializedFiber;
        uninitializedFiber.stateNode = root;
        initializeUpdateQueue(uninitializedFiber);
        return root;
    }
    function registerMutableSourceForHydration(root, mutableSource) {
        var getVersion = mutableSource._getVersion;
        var version5 = getVersion(mutableSource._source);
        if (root.mutableSourceEagerHydrationData == null) {
            root.mutableSourceEagerHydrationData = [
                mutableSource,
                version5
            ];
        } else {
            root.mutableSourceEagerHydrationData.push(mutableSource, version5);
        }
    }
    function createPortal1(children, containerInfo, implementation) {
        var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        return {
            $$typeof: REACT_PORTAL_TYPE,
            key: key == null ? null : "" + key,
            children: children,
            containerInfo: containerInfo,
            implementation: implementation
        };
    }
    var didWarnAboutNestedUpdates;
    var didWarnAboutFindNodeInStrictMode;
    {
        didWarnAboutNestedUpdates = false;
        didWarnAboutFindNodeInStrictMode = {};
    }
    function getContextForSubtree(parentComponent) {
        if (!parentComponent) {
            return emptyContextObject;
        }
        var fiber = get1(parentComponent);
        var parentContext = findCurrentUnmaskedContext(fiber);
        if (fiber.tag === ClassComponent) {
            var Component21 = fiber.type;
            if (isContextProvider(Component21)) {
                return processChildContext(fiber, Component21, parentContext);
            }
        }
        return parentContext;
    }
    function findHostInstanceWithWarning(component, methodName) {
        {
            var fiber = get1(component);
            if (fiber === undefined) {
                if (typeof component.render === "function") {
                    {
                        {
                            throw Error("Unable to find node on an unmounted component.");
                        }
                    }
                } else {
                    {
                        {
                            throw Error("Argument appears to not be a ReactComponent. Keys: " + Object.keys(component));
                        }
                    }
                }
            }
            var hostFiber = findCurrentHostFiber(fiber);
            if (hostFiber === null) {
                return null;
            }
            if (hostFiber.mode & StrictMode1) {
                var componentName = getComponentName(fiber.type) || "Component";
                if (!didWarnAboutFindNodeInStrictMode[componentName]) {
                    didWarnAboutFindNodeInStrictMode[componentName] = true;
                    var previousFiber = current1;
                    try {
                        setCurrentFiber(hostFiber);
                        if (fiber.mode & StrictMode1) {
                            error1("%s is deprecated in StrictMode. " + "%s was passed an instance of %s which is inside StrictMode. " + "Instead, add a ref directly to the element you want to reference. " + "Learn more about using refs safely here: " + "https://reactjs.org/link/strict-mode-find-node", methodName, methodName, componentName);
                        } else {
                            error1("%s is deprecated in StrictMode. " + "%s was passed an instance of %s which renders StrictMode children. " + "Instead, add a ref directly to the element you want to reference. " + "Learn more about using refs safely here: " + "https://reactjs.org/link/strict-mode-find-node", methodName, methodName, componentName);
                        }
                    } finally{
                        if (previousFiber) {
                            setCurrentFiber(previousFiber);
                        } else {
                            resetCurrentFiber();
                        }
                    }
                }
            }
            return hostFiber.stateNode;
        }
    }
    function createContainer(containerInfo, tag, hydrate4, hydrationCallbacks) {
        return createFiberRoot(containerInfo, tag, hydrate4);
    }
    function updateContainer(element, container, parentComponent, callback) {
        {
            onScheduleRoot(container, element);
        }
        var current$1 = container.current;
        var eventTime = requestEventTime();
        {
            if ("undefined" !== typeof jest) {
                warnIfUnmockedScheduler(current$1);
                warnIfNotScopedWithMatchingAct(current$1);
            }
        }
        var lane = requestUpdateLane(current$1);
        var context = getContextForSubtree(parentComponent);
        if (container.context === null) {
            container.context = context;
        } else {
            container.pendingContext = context;
        }
        {
            if (isRendering && current1 !== null && !didWarnAboutNestedUpdates) {
                didWarnAboutNestedUpdates = true;
                error1("Render methods should be a pure function of props and state; " + "triggering nested component updates from render is not allowed. " + "If necessary, trigger nested updates in componentDidUpdate.\n\n" + "Check the render method of %s.", getComponentName(current1.type) || "Unknown");
            }
        }
        var update = createUpdate(eventTime, lane);
        update.payload = {
            element: element
        };
        callback = callback === undefined ? null : callback;
        if (callback !== null) {
            {
                if (typeof callback !== "function") {
                    error1("render(...): Expected the last optional `callback` argument to be a " + "function. Instead received: %s.", callback);
                }
            }
            update.callback = callback;
        }
        enqueueUpdate(current$1, update);
        scheduleUpdateOnFiber(current$1, lane, eventTime);
        return lane;
    }
    function getPublicRootInstance(container) {
        var containerFiber = container.current;
        if (!containerFiber.child) {
            return null;
        }
        switch(containerFiber.child.tag){
            case HostComponent:
                return getPublicInstance(containerFiber.child.stateNode);
            default:
                return containerFiber.child.stateNode;
        }
    }
    function markRetryLaneImpl(fiber, retryLane) {
        var suspenseState = fiber.memoizedState;
        if (suspenseState !== null && suspenseState.dehydrated !== null) {
            suspenseState.retryLane = higherPriorityLane(suspenseState.retryLane, retryLane);
        }
    }
    function markRetryLaneIfNotHydrated(fiber, retryLane) {
        markRetryLaneImpl(fiber, retryLane);
        var alternate = fiber.alternate;
        if (alternate) {
            markRetryLaneImpl(alternate, retryLane);
        }
    }
    function attemptUserBlockingHydration$1(fiber) {
        if (fiber.tag !== SuspenseComponent) {
            return;
        }
        var eventTime = requestEventTime();
        var lane = InputDiscreteHydrationLane;
        scheduleUpdateOnFiber(fiber, lane, eventTime);
        markRetryLaneIfNotHydrated(fiber, lane);
    }
    function attemptContinuousHydration$1(fiber) {
        if (fiber.tag !== SuspenseComponent) {
            return;
        }
        var eventTime = requestEventTime();
        var lane = SelectiveHydrationLane;
        scheduleUpdateOnFiber(fiber, lane, eventTime);
        markRetryLaneIfNotHydrated(fiber, lane);
    }
    function attemptHydrationAtCurrentPriority$1(fiber) {
        if (fiber.tag !== SuspenseComponent) {
            return;
        }
        var eventTime = requestEventTime();
        var lane = requestUpdateLane(fiber);
        scheduleUpdateOnFiber(fiber, lane, eventTime);
        markRetryLaneIfNotHydrated(fiber, lane);
    }
    function runWithPriority$2(priority, fn) {
        try {
            setCurrentUpdateLanePriority(priority);
            return fn();
        } finally{}
    }
    function findHostInstanceWithNoPortals(fiber) {
        var hostFiber = findCurrentHostFiberWithNoPortals(fiber);
        if (hostFiber === null) {
            return null;
        }
        if (hostFiber.tag === FundamentalComponent) {
            return hostFiber.stateNode.instance;
        }
        return hostFiber.stateNode;
    }
    var shouldSuspendImpl = function(fiber) {
        return false;
    };
    function shouldSuspend(fiber) {
        return shouldSuspendImpl(fiber);
    }
    var overrideHookState = null;
    var overrideHookStateDeletePath = null;
    var overrideHookStateRenamePath = null;
    var overrideProps = null;
    var overridePropsDeletePath = null;
    var overridePropsRenamePath = null;
    var scheduleUpdate = null;
    var setSuspenseHandler = null;
    {
        var copyWithDeleteImpl = function(obj, path, index) {
            var key = path[index];
            var updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj);
            if (index + 1 === path.length) {
                if (Array.isArray(updated)) {
                    updated.splice(key, 1);
                } else {
                    delete updated[key];
                }
                return updated;
            }
            updated[key] = copyWithDeleteImpl(obj[key], path, index + 1);
            return updated;
        };
        var copyWithDelete = function(obj, path) {
            return copyWithDeleteImpl(obj, path, 0);
        };
        var copyWithRenameImpl = function(obj, oldPath, newPath, index) {
            var oldKey = oldPath[index];
            var updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj);
            if (index + 1 === oldPath.length) {
                var newKey = newPath[index];
                updated[newKey] = updated[oldKey];
                if (Array.isArray(updated)) {
                    updated.splice(oldKey, 1);
                } else {
                    delete updated[oldKey];
                }
            } else {
                updated[oldKey] = copyWithRenameImpl(obj[oldKey], oldPath, newPath, index + 1);
            }
            return updated;
        };
        var copyWithRename = function(obj, oldPath, newPath) {
            if (oldPath.length !== newPath.length) {
                warn("copyWithRename() expects paths of the same length");
                return;
            } else {
                for(var i = 0; i < newPath.length - 1; i++){
                    if (oldPath[i] !== newPath[i]) {
                        warn("copyWithRename() expects paths to be the same except for the deepest key");
                        return;
                    }
                }
            }
            return copyWithRenameImpl(obj, oldPath, newPath, 0);
        };
        var copyWithSetImpl = function(obj, path, index, value) {
            if (index >= path.length) {
                return value;
            }
            var key = path[index];
            var updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj);
            updated[key] = copyWithSetImpl(obj[key], path, index + 1, value);
            return updated;
        };
        var copyWithSet = function(obj, path, value) {
            return copyWithSetImpl(obj, path, 0, value);
        };
        var findHook = function(fiber, id) {
            var currentHook = fiber.memoizedState;
            while(currentHook !== null && id > 0){
                currentHook = currentHook.next;
                id--;
            }
            return currentHook;
        };
        overrideHookState = function(fiber, id, path, value) {
            var hook = findHook(fiber, id);
            if (hook !== null) {
                var newState = copyWithSet(hook.memoizedState, path, value);
                hook.memoizedState = newState;
                hook.baseState = newState;
                fiber.memoizedProps = _assign({}, fiber.memoizedProps);
                scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
            }
        };
        overrideHookStateDeletePath = function(fiber, id, path) {
            var hook = findHook(fiber, id);
            if (hook !== null) {
                var newState = copyWithDelete(hook.memoizedState, path);
                hook.memoizedState = newState;
                hook.baseState = newState;
                fiber.memoizedProps = _assign({}, fiber.memoizedProps);
                scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
            }
        };
        overrideHookStateRenamePath = function(fiber, id, oldPath, newPath) {
            var hook = findHook(fiber, id);
            if (hook !== null) {
                var newState = copyWithRename(hook.memoizedState, oldPath, newPath);
                hook.memoizedState = newState;
                hook.baseState = newState;
                fiber.memoizedProps = _assign({}, fiber.memoizedProps);
                scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
            }
        };
        overrideProps = function(fiber, path, value) {
            fiber.pendingProps = copyWithSet(fiber.memoizedProps, path, value);
            if (fiber.alternate) {
                fiber.alternate.pendingProps = fiber.pendingProps;
            }
            scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
        };
        overridePropsDeletePath = function(fiber, path) {
            fiber.pendingProps = copyWithDelete(fiber.memoizedProps, path);
            if (fiber.alternate) {
                fiber.alternate.pendingProps = fiber.pendingProps;
            }
            scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
        };
        overridePropsRenamePath = function(fiber, oldPath, newPath) {
            fiber.pendingProps = copyWithRename(fiber.memoizedProps, oldPath, newPath);
            if (fiber.alternate) {
                fiber.alternate.pendingProps = fiber.pendingProps;
            }
            scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
        };
        scheduleUpdate = function(fiber) {
            scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
        };
        setSuspenseHandler = function(newShouldSuspendImpl) {
            shouldSuspendImpl = newShouldSuspendImpl;
        };
    }
    function findHostInstanceByFiber(fiber) {
        var hostFiber = findCurrentHostFiber(fiber);
        if (hostFiber === null) {
            return null;
        }
        return hostFiber.stateNode;
    }
    function emptyFindFiberByHostInstance(instance) {
        return null;
    }
    function getCurrentFiberForDevTools() {
        return current1;
    }
    function injectIntoDevTools(devToolsConfig) {
        var findFiberByHostInstance = devToolsConfig.findFiberByHostInstance;
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        return injectInternals({
            bundleType: devToolsConfig.bundleType,
            version: devToolsConfig.version,
            rendererPackageName: devToolsConfig.rendererPackageName,
            rendererConfig: devToolsConfig.rendererConfig,
            overrideHookState: overrideHookState,
            overrideHookStateDeletePath: overrideHookStateDeletePath,
            overrideHookStateRenamePath: overrideHookStateRenamePath,
            overrideProps: overrideProps,
            overridePropsDeletePath: overridePropsDeletePath,
            overridePropsRenamePath: overridePropsRenamePath,
            setSuspenseHandler: setSuspenseHandler,
            scheduleUpdate: scheduleUpdate,
            currentDispatcherRef: ReactCurrentDispatcher,
            findHostInstanceByFiber: findHostInstanceByFiber,
            findFiberByHostInstance: findFiberByHostInstance || emptyFindFiberByHostInstance,
            findHostInstancesForRefresh: findHostInstancesForRefresh,
            scheduleRefresh: scheduleRefresh,
            scheduleRoot: scheduleRoot,
            setRefreshHandler: setRefreshHandler,
            getCurrentFiber: getCurrentFiberForDevTools
        });
    }
    function ReactDOMRoot(container, options) {
        this._internalRoot = createRootImpl(container, ConcurrentRoot, options);
    }
    function ReactDOMBlockingRoot(container, tag, options) {
        this._internalRoot = createRootImpl(container, tag, options);
    }
    ReactDOMRoot.prototype.render = ReactDOMBlockingRoot.prototype.render = function(children) {
        var root = this._internalRoot;
        {
            if (typeof arguments[1] === "function") {
                error1("render(...): does not support the second callback argument. " + "To execute a side effect after rendering, declare it in a component body with useEffect().");
            }
            var container = root.containerInfo;
            if (container.nodeType !== COMMENT_NODE) {
                var hostInstance = findHostInstanceWithNoPortals(root.current);
                if (hostInstance) {
                    if (hostInstance.parentNode !== container) {
                        error1("render(...): It looks like the React-rendered content of the " + "root container was removed without using React. This is not " + "supported and will cause errors. Instead, call " + "root.unmount() to empty a root's container.");
                    }
                }
            }
        }
        updateContainer(children, root, null, null);
    };
    ReactDOMRoot.prototype.unmount = ReactDOMBlockingRoot.prototype.unmount = function() {
        {
            if (typeof arguments[0] === "function") {
                error1("unmount(...): does not support a callback argument. " + "To execute a side effect after rendering, declare it in a component body with useEffect().");
            }
        }
        var root = this._internalRoot;
        var container = root.containerInfo;
        updateContainer(null, root, null, function() {
            unmarkContainerAsRoot(container);
        });
    };
    function createRootImpl(container, tag, options) {
        var hydrate5 = options != null && options.hydrate === true;
        options != null && options.hydrationOptions || null;
        var mutableSources = options != null && options.hydrationOptions != null && options.hydrationOptions.mutableSources || null;
        var root = createContainer(container, tag, hydrate5);
        markContainerAsRoot(root.current, container);
        container.nodeType;
        {
            var rootContainerElement = container.nodeType === COMMENT_NODE ? container.parentNode : container;
            listenToAllSupportedEvents(rootContainerElement);
        }
        if (mutableSources) {
            for(var i = 0; i < mutableSources.length; i++){
                var mutableSource = mutableSources[i];
                registerMutableSourceForHydration(root, mutableSource);
            }
        }
        return root;
    }
    function createLegacyRoot(container, options) {
        return new ReactDOMBlockingRoot(container, LegacyRoot, options);
    }
    function isValidContainer(node) {
        return !!(node && (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE || node.nodeType === COMMENT_NODE && node.nodeValue === " react-mount-point-unstable "));
    }
    var ReactCurrentOwner$3 = ReactSharedInternals.ReactCurrentOwner;
    var topLevelUpdateWarnings;
    var warnedAboutHydrateAPI = false;
    {
        topLevelUpdateWarnings = function(container) {
            if (container._reactRootContainer && container.nodeType !== COMMENT_NODE) {
                var hostInstance = findHostInstanceWithNoPortals(container._reactRootContainer._internalRoot.current);
                if (hostInstance) {
                    if (hostInstance.parentNode !== container) {
                        error1("render(...): It looks like the React-rendered content of this " + "container was removed without using React. This is not " + "supported and will cause errors. Instead, call " + "ReactDOM.unmountComponentAtNode to empty a container.");
                    }
                }
            }
            var isRootRenderedBySomeReact = !!container._reactRootContainer;
            var rootEl = getReactRootElementInContainer(container);
            var hasNonRootReactChild = !!(rootEl && getInstanceFromNode(rootEl));
            if (hasNonRootReactChild && !isRootRenderedBySomeReact) {
                error1("render(...): Replacing React-rendered children with a new root " + "component. If you intended to update the children of this node, " + "you should instead have the existing children update their state " + "and render the new components instead of calling ReactDOM.render.");
            }
            if (container.nodeType === ELEMENT_NODE && container.tagName && container.tagName.toUpperCase() === "BODY") {
                error1("render(): Rendering components directly into document.body is " + "discouraged, since its children are often manipulated by third-party " + "scripts and browser extensions. This may lead to subtle " + "reconciliation issues. Try rendering into a container element created " + "for your app.");
            }
        };
    }
    function getReactRootElementInContainer(container) {
        if (!container) {
            return null;
        }
        if (container.nodeType === DOCUMENT_NODE) {
            return container.documentElement;
        } else {
            return container.firstChild;
        }
    }
    function shouldHydrateDueToLegacyHeuristic(container) {
        var rootElement = getReactRootElementInContainer(container);
        return !!(rootElement && rootElement.nodeType === ELEMENT_NODE && rootElement.hasAttribute(ROOT_ATTRIBUTE_NAME));
    }
    function legacyCreateRootFromDOMContainer(container, forceHydrate) {
        var shouldHydrate = forceHydrate || shouldHydrateDueToLegacyHeuristic(container);
        if (!shouldHydrate) {
            var warned = false;
            var rootSibling;
            while(rootSibling = container.lastChild){
                {
                    if (!warned && rootSibling.nodeType === ELEMENT_NODE && rootSibling.hasAttribute(ROOT_ATTRIBUTE_NAME)) {
                        warned = true;
                        error1("render(): Target node has markup rendered by React, but there " + "are unrelated nodes as well. This is most commonly caused by " + "white-space inserted around server-rendered markup.");
                    }
                }
                container.removeChild(rootSibling);
            }
        }
        {
            if (shouldHydrate && !forceHydrate && !warnedAboutHydrateAPI) {
                warnedAboutHydrateAPI = true;
                warn("render(): Calling ReactDOM.render() to hydrate server-rendered markup " + "will stop working in React v18. Replace the ReactDOM.render() call " + "with ReactDOM.hydrate() if you want React to attach to the server HTML.");
            }
        }
        return createLegacyRoot(container, shouldHydrate ? {
            hydrate: true
        } : undefined);
    }
    function warnOnInvalidCallback$1(callback, callerName) {
        {
            if (callback !== null && typeof callback !== "function") {
                error1("%s(...): Expected the last optional `callback` argument to be a " + "function. Instead received: %s.", callerName, callback);
            }
        }
    }
    function legacyRenderSubtreeIntoContainer(parentComponent, children, container, forceHydrate, callback) {
        {
            topLevelUpdateWarnings(container);
            warnOnInvalidCallback$1(callback === undefined ? null : callback, "render");
        }
        var root = container._reactRootContainer;
        var fiberRoot;
        if (!root) {
            root = container._reactRootContainer = legacyCreateRootFromDOMContainer(container, forceHydrate);
            fiberRoot = root._internalRoot;
            if (typeof callback === "function") {
                var originalCallback = callback;
                callback = function() {
                    var instance = getPublicRootInstance(fiberRoot);
                    originalCallback.call(instance);
                };
            }
            unbatchedUpdates(function() {
                updateContainer(children, fiberRoot, parentComponent, callback);
            });
        } else {
            fiberRoot = root._internalRoot;
            if (typeof callback === "function") {
                var _originalCallback = callback;
                callback = function() {
                    var instance = getPublicRootInstance(fiberRoot);
                    _originalCallback.call(instance);
                };
            }
            updateContainer(children, fiberRoot, parentComponent, callback);
        }
        return getPublicRootInstance(fiberRoot);
    }
    function findDOMNode1(componentOrElement) {
        {
            var owner = ReactCurrentOwner$3.current;
            if (owner !== null && owner.stateNode !== null) {
                var warnedAboutRefsInRender = owner.stateNode._warnedAboutRefsInRender;
                if (!warnedAboutRefsInRender) {
                    error1("%s is accessing findDOMNode inside its render(). " + "render() should be a pure function of props and state. It should " + "never access something that requires stale data from the previous " + "render, such as refs. Move this logic to componentDidMount and " + "componentDidUpdate instead.", getComponentName(owner.type) || "A component");
                }
                owner.stateNode._warnedAboutRefsInRender = true;
            }
        }
        if (componentOrElement == null) {
            return null;
        }
        if (componentOrElement.nodeType === ELEMENT_NODE) {
            return componentOrElement;
        }
        {
            return findHostInstanceWithWarning(componentOrElement, "findDOMNode");
        }
    }
    function hydrate1(element, container, callback) {
        if (!isValidContainer(container)) {
            {
                throw Error("Target container is not a DOM element.");
            }
        }
        {
            var isModernRoot = isContainerMarkedAsRoot(container) && container._reactRootContainer === undefined;
            if (isModernRoot) {
                error1("You are calling ReactDOM.hydrate() on a container that was previously " + "passed to ReactDOM.createRoot(). This is not supported. " + "Did you mean to call createRoot(container, {hydrate: true}).render(element)?");
            }
        }
        return legacyRenderSubtreeIntoContainer(null, element, container, true, callback);
    }
    function render1(element, container, callback) {
        if (!isValidContainer(container)) {
            {
                throw Error("Target container is not a DOM element.");
            }
        }
        {
            var isModernRoot = isContainerMarkedAsRoot(container) && container._reactRootContainer === undefined;
            if (isModernRoot) {
                error1("You are calling ReactDOM.render() on a container that was previously " + "passed to ReactDOM.createRoot(). This is not supported. " + "Did you mean to call root.render(element)?");
            }
        }
        return legacyRenderSubtreeIntoContainer(null, element, container, false, callback);
    }
    function unstable_renderSubtreeIntoContainer1(parentComponent, element, containerNode, callback) {
        if (!isValidContainer(containerNode)) {
            {
                throw Error("Target container is not a DOM element.");
            }
        }
        if (!(parentComponent != null && has1(parentComponent))) {
            {
                throw Error("parentComponent must be a valid React Component");
            }
        }
        return legacyRenderSubtreeIntoContainer(parentComponent, element, containerNode, false, callback);
    }
    function unmountComponentAtNode1(container) {
        if (!isValidContainer(container)) {
            {
                throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");
            }
        }
        {
            var isModernRoot = isContainerMarkedAsRoot(container) && container._reactRootContainer === undefined;
            if (isModernRoot) {
                error1("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously " + "passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?");
            }
        }
        if (container._reactRootContainer) {
            {
                var rootEl = getReactRootElementInContainer(container);
                var renderedByDifferentReact = rootEl && !getInstanceFromNode(rootEl);
                if (renderedByDifferentReact) {
                    error1("unmountComponentAtNode(): The node you're attempting to unmount " + "was rendered by another copy of React.");
                }
            }
            unbatchedUpdates(function() {
                legacyRenderSubtreeIntoContainer(null, null, container, false, function() {
                    container._reactRootContainer = null;
                    unmarkContainerAsRoot(container);
                });
            });
            return true;
        } else {
            {
                var _rootEl = getReactRootElementInContainer(container);
                var hasNonRootReactChild = !!(_rootEl && getInstanceFromNode(_rootEl));
                var isContainerReactRoot = container.nodeType === ELEMENT_NODE && isValidContainer(container.parentNode) && !!container.parentNode._reactRootContainer;
                if (hasNonRootReactChild) {
                    error1("unmountComponentAtNode(): The node you're attempting to unmount " + "was rendered by React and is not a top-level container. %s", isContainerReactRoot ? "You may have accidentally passed in a React root node instead " + "of its container." : "Instead, have the parent component update its state and " + "rerender in order to remove this component.");
                }
            }
            return false;
        }
    }
    setAttemptUserBlockingHydration(attemptUserBlockingHydration$1);
    setAttemptContinuousHydration(attemptContinuousHydration$1);
    setAttemptHydrationAtCurrentPriority(attemptHydrationAtCurrentPriority$1);
    setAttemptHydrationAtPriority(runWithPriority$2);
    var didWarnAboutUnstableCreatePortal = false;
    {
        if (typeof Map !== "function" || Map.prototype == null || typeof Map.prototype.forEach !== "function" || typeof Set !== "function" || Set.prototype == null || typeof Set.prototype.clear !== "function" || typeof Set.prototype.forEach !== "function") {
            error1("React depends on Map and Set built-in types. Make sure that you load a " + "polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        }
    }
    setRestoreImplementation(restoreControlledState$3);
    setBatchingImplementation(batchedUpdates$1, discreteUpdates$1, flushDiscreteUpdates, batchedEventUpdates$1);
    function createPortal$1(children, container) {
        var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        if (!isValidContainer(container)) {
            {
                throw Error("Target container is not a DOM element.");
            }
        }
        return createPortal1(children, container, null, key);
    }
    function renderSubtreeIntoContainer(parentComponent, element, containerNode, callback) {
        return unstable_renderSubtreeIntoContainer1(parentComponent, element, containerNode, callback);
    }
    function unstable_createPortal1(children, container) {
        var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        {
            if (!didWarnAboutUnstableCreatePortal) {
                didWarnAboutUnstableCreatePortal = true;
                warn("The ReactDOM.unstable_createPortal() alias has been deprecated, " + "and will be removed in React 18+. Update your code to use " + "ReactDOM.createPortal() instead. It has the exact same API, " + "but without the \"unstable_\" prefix.");
            }
        }
        return createPortal$1(children, container, key);
    }
    var Internals = {
        Events: [
            getInstanceFromNode,
            getNodeFromInstance,
            getFiberCurrentPropsFromNode,
            enqueueStateRestore,
            restoreStateIfNeeded,
            flushPassiveEffects,
            IsThisRendererActing
        ]
    };
    var foundDevTools = injectIntoDevTools({
        findFiberByHostInstance: getClosestInstanceFromNode,
        bundleType: 1,
        version: ReactVersion,
        rendererPackageName: "react-dom"
    });
    {
        if (!foundDevTools && canUseDOM && window.top === window.self) {
            if (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1) {
                var protocol = window.location.protocol;
                if (/^(https?|file):$/.test(protocol)) {
                    console.info("%cDownload the React DevTools " + "for a better development experience: " + "https://reactjs.org/link/react-devtools" + (protocol === "file:" ? "\nYou might need to use a local HTTP server (instead of file://): " + "https://reactjs.org/link/react-devtools-faq" : ""), "font-weight:bold");
                }
            }
        }
    }
    exports4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Internals;
    exports4.createPortal = createPortal$1;
    exports4.findDOMNode = findDOMNode1;
    exports4.flushSync = flushSync1;
    exports4.hydrate = hydrate1;
    exports4.render = render1;
    exports4.unmountComponentAtNode = unmountComponentAtNode1;
    exports4.unstable_batchedUpdates = batchedUpdates$1;
    exports4.unstable_createPortal = unstable_createPortal1;
    exports4.unstable_renderSubtreeIntoContainer = renderSubtreeIntoContainer;
    exports4.version = ReactVersion;
})();
exports4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, exports4.createPortal, exports4.findDOMNode, exports4.flushSync, exports4.hydrate, exports4.render, exports4.unmountComponentAtNode, exports4.unstable_batchedUpdates, exports4.unstable_createPortal, exports4.unstable_renderSubtreeIntoContainer, exports4.version;
const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED1 = exports4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, createPortal = exports4.createPortal, findDOMNode = exports4.findDOMNode, flushSync = exports4.flushSync, hydrate = exports4.hydrate, render = exports4.render, unmountComponentAtNode = exports4.unmountComponentAtNode, unstable_batchedUpdates = exports4.unstable_batchedUpdates, unstable_createPortal = exports4.unstable_createPortal, unstable_renderSubtreeIntoContainer = exports4.unstable_renderSubtreeIntoContainer, version1 = exports4.version;
const mod1 = {
    default: exports4,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED1,
    createPortal,
    findDOMNode,
    flushSync,
    hydrate,
    render,
    unmountComponentAtNode,
    unstable_batchedUpdates,
    unstable_createPortal,
    unstable_renderSubtreeIntoContainer,
    version: version1
};
const { default: any , ...rest } = mod;
const react = mod.default;
const __object_assign$ = Object.assign;
var H = Object.create;
var h = Object.defineProperty;
var W = Object.getOwnPropertyDescriptor;
var Y = Object.getOwnPropertyNames;
var G = Object.getPrototypeOf, J = Object.prototype.hasOwnProperty;
var K = (e)=>h(e, "__esModule", {
        value: !0
    })
;
((e)=>typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
        get: (t, r)=>(typeof require != "undefined" ? require : t)[r]
    }) : e
)(function(e) {
    if (typeof require != "undefined") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
});
var P = (e, t)=>()=>(t || e((t = {
            exports: {}
        }).exports, t), t.exports)
;
var X = (e, t, r, o)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let n of Y(t))!J.call(e, n) && (r || n !== "default") && h(e, n, {
        get: ()=>t[n]
        ,
        enumerable: !(o = W(t, n)) || o.enumerable
    });
    return e;
}, O = (e, t)=>X(K(h(e != null ? H(G(e)) : {}, "default", !t && e && e.__esModule ? {
        get: ()=>e.default
        ,
        enumerable: !0
    } : {
        value: e,
        enumerable: !0
    })), e)
;
var T = P((u)=>{
    "use strict";
    var C = __object_assign$, s = typeof Symbol == "function" && Symbol.for, d = s ? Symbol.for("react.element") : 60103, Z1 = s ? Symbol.for("react.portal") : 60106, ee1 = s ? Symbol.for("react.fragment") : 60107, te1 = s ? Symbol.for("react.strict_mode") : 60108, re = s ? Symbol.for("react.profiler") : 60114, ne1 = s ? Symbol.for("react.provider") : 60109, oe1 = s ? Symbol.for("react.context") : 60110, ue1 = s ? Symbol.for("react.forward_ref") : 60112, le = s ? Symbol.for("react.suspense") : 60113, ce = s ? Symbol.for("react.memo") : 60115, fe = s ? Symbol.for("react.lazy") : 60116, j = typeof Symbol == "function" && Symbol.iterator;
    function m(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)t += "&args[]=" + encodeURIComponent(arguments[r]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var I = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, A = {};
    function a(e, t, r) {
        this.props = e, this.context = t, this.refs = A, this.updater = r || I;
    }
    a.prototype.isReactComponent = {};
    a.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error(m(85));
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    a.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function L() {}
    L.prototype = a.prototype;
    function R(e, t, r) {
        this.props = e, this.context = t, this.refs = A, this.updater = r || I;
    }
    var $ = R.prototype = new L;
    $.constructor = R;
    C($, a.prototype);
    $.isPureReactComponent = !0;
    var x = {
        current: null
    }, U = Object.prototype.hasOwnProperty, q = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function D(e, t, r) {
        var o, n = {}, c = null, i = null;
        if (t != null) for(o in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (c = "" + t.key), t)U.call(t, o) && !q.hasOwnProperty(o) && (n[o] = t[o]);
        var l = arguments.length - 2;
        if (l === 1) n.children = r;
        else if (1 < l) {
            for(var f = Array(l), p = 0; p < l; p++)f[p] = arguments[p + 2];
            n.children = f;
        }
        if (e && e.defaultProps) for(o in l = e.defaultProps, l)n[o] === void 0 && (n[o] = l[o]);
        return {
            $$typeof: d,
            type: e,
            key: c,
            ref: i,
            props: n,
            _owner: x.current
        };
    }
    function ie1(e, t) {
        return {
            $$typeof: d,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function w(e) {
        return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function se1(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + ("" + e).replace(/[=:]/g, function(r) {
            return t[r];
        });
    }
    var F = /\/+/g, v = [];
    function N(e, t, r, o) {
        if (v.length) {
            var n = v.pop();
            return n.result = e, n.keyPrefix = t, n.func = r, n.context = o, n.count = 0, n;
        }
        return {
            result: e,
            keyPrefix: t,
            func: r,
            context: o,
            count: 0
        };
    }
    function M(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > v.length && v.push(e);
    }
    function S(e, t, r, o) {
        var n = typeof e;
        (n === "undefined" || n === "boolean") && (e = null);
        var c = !1;
        if (e === null) c = !0;
        else switch(n){
            case "string":
            case "number":
                c = !0;
                break;
            case "object":
                switch(e.$$typeof){
                    case d:
                    case Z1:
                        c = !0;
                }
        }
        if (c) return r(o, e, t === "" ? "." + _(e, 0) : t), 1;
        if (c = 0, t = t === "" ? "." : t + ":", Array.isArray(e)) for(var i = 0; i < e.length; i++){
            n = e[i];
            var l = t + _(n, i);
            c += S(n, l, r, o);
        }
        else if (e === null || typeof e != "object" ? l = null : (l = j && e[j] || e["@@iterator"], l = typeof l == "function" ? l : null), typeof l == "function") for(e = l.call(e), i = 0; !(n = e.next()).done;)n = n.value, l = t + _(n, i++), c += S(n, l, r, o);
        else if (n === "object") throw r = "" + e, Error(m(31, r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r, ""));
        return c;
    }
    function g(e, t, r) {
        return e == null ? 0 : S(e, "", t, r);
    }
    function _(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? se1(e.key) : t.toString(36);
    }
    function pe1(e, t) {
        e.func.call(e.context, t, e.count++);
    }
    function ye(e, t, r) {
        var o = e.result, n = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? E(e, o, r, function(c) {
            return c;
        }) : e != null && (w(e) && (e = ie1(e, n + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(F, "$&/") + "/") + r)), o.push(e));
    }
    function E(e, t, r, o, n) {
        var c = "";
        r != null && (c = ("" + r).replace(F, "$&/") + "/"), t = N(t, c, o, n), g(e, ye, t), M(t);
    }
    var V1 = {
        current: null
    };
    function y() {
        var e = V1.current;
        if (e === null) throw Error(m(321));
        return e;
    }
    var ae1 = {
        ReactCurrentDispatcher: V1,
        ReactCurrentBatchConfig: {
            suspense: null
        },
        ReactCurrentOwner: x,
        IsSomeRendererActing: {
            current: !1
        },
        assign: C
    };
    u.Children = {
        map: function(e, t, r) {
            if (e == null) return e;
            var o = [];
            return E(e, o, null, t, r), o;
        },
        forEach: function(e, t, r) {
            if (e == null) return e;
            t = N(null, null, t, r), g(e, pe1, t), M(t);
        },
        count: function(e) {
            return g(e, function() {
                return null;
            }, null);
        },
        toArray: function(e) {
            var t = [];
            return E(e, t, null, function(r) {
                return r;
            }), t;
        },
        only: function(e) {
            if (!w(e)) throw Error(m(143));
            return e;
        }
    };
    u.Component = a;
    u.Fragment = ee1;
    u.Profiler = re;
    u.PureComponent = R;
    u.StrictMode = te1;
    u.Suspense = le;
    u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae1;
    u.cloneElement = function(e, t, r) {
        if (e == null) throw Error(m(267, e));
        var o = C({}, e.props), n = e.key, c = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (c = t.ref, i = x.current), t.key !== void 0 && (n = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
            for(f in t)U.call(t, f) && !q.hasOwnProperty(f) && (o[f] = t[f] === void 0 && l !== void 0 ? l[f] : t[f]);
        }
        var f = arguments.length - 2;
        if (f === 1) o.children = r;
        else if (1 < f) {
            l = Array(f);
            for(var p = 0; p < f; p++)l[p] = arguments[p + 2];
            o.children = l;
        }
        return {
            $$typeof: d,
            type: e.type,
            key: n,
            ref: c,
            props: o,
            _owner: i
        };
    };
    u.createContext = function(e, t) {
        return t === void 0 && (t = null), e = {
            $$typeof: oe1,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, e.Provider = {
            $$typeof: ne1,
            _context: e
        }, e.Consumer = e;
    };
    u.createElement = D;
    u.createFactory = function(e) {
        var t = D.bind(null, e);
        return t.type = e, t;
    };
    u.createRef = function() {
        return {
            current: null
        };
    };
    u.forwardRef = function(e) {
        return {
            $$typeof: ue1,
            render: e
        };
    };
    u.isValidElement = w;
    u.lazy = function(e) {
        return {
            $$typeof: fe,
            _ctor: e,
            _status: -1,
            _result: null
        };
    };
    u.memo = function(e, t) {
        return {
            $$typeof: ce,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    u.useCallback = function(e, t) {
        return y().useCallback(e, t);
    };
    u.useContext = function(e, t) {
        return y().useContext(e, t);
    };
    u.useDebugValue = function() {};
    u.useEffect = function(e, t) {
        return y().useEffect(e, t);
    };
    u.useImperativeHandle = function(e, t, r) {
        return y().useImperativeHandle(e, t, r);
    };
    u.useLayoutEffect = function(e, t) {
        return y().useLayoutEffect(e, t);
    };
    u.useMemo = function(e, t) {
        return y().useMemo(e, t);
    };
    u.useReducer = function(e, t, r) {
        return y().useReducer(e, t, r);
    };
    u.useRef = function(e) {
        return y().useRef(e);
    };
    u.useState = function(e) {
        return y().useState(e);
    };
    u.version = "16.14.0";
});
var k = P((_e, b)=>{
    "use strict";
    b.exports = T();
});
var B = O(k()), z = O(k()), { Children: Se , Component: ge , Fragment: Ee , Profiler: Ce , PureComponent: Re , StrictMode: $e , Suspense: xe , __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: we , cloneElement: ke , createContext: Pe , createElement: Oe , createFactory: je , createRef: Ie , forwardRef: Ae , isValidElement: Le , lazy: Ue , memo: qe , useCallback: De , useContext: Fe , useDebugValue: Ne , useEffect: Me , useImperativeHandle: Ve , useLayoutEffect: Te , useMemo: be , useReducer: Be , useRef: ze , useState: He , version: We  } = z, { default: de , ...me } = z, Ye = (B.default ?? de) ?? me;
var Q = Object.create;
var H1 = Object.defineProperty;
var Z = Object.getOwnPropertyDescriptor;
var V = Object.getOwnPropertyNames;
var ee = Object.getPrototypeOf, ne = Object.prototype.hasOwnProperty;
var te = (s)=>H1(s, "__esModule", {
        value: !0
    })
;
((s)=>typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(s, {
        get: (r, a)=>(typeof require != "undefined" ? require : r)[a]
    }) : s
)(function(s) {
    if (typeof require != "undefined") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + s + '" is not supported');
});
var ae = (s, r)=>()=>(r || s((r = {
            exports: {}
        }).exports, r), r.exports)
;
var oe = (s, r, a, p)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let d of V(r))!ne.call(s, d) && (a || d !== "default") && H1(s, d, {
        get: ()=>r[d]
        ,
        enumerable: !(p = Z(r, d)) || p.enumerable
    });
    return s;
}, J1 = (s, r)=>oe(te(H1(s != null ? Q(ee(s)) : {}, "default", !r && s && s.__esModule ? {
        get: ()=>s.default
        ,
        enumerable: !0
    } : {
        value: s,
        enumerable: !0
    })), s)
;
var K1 = ae((le, X1)=>{
    X1.exports = (function(s) {
        var r = {};
        function a(p) {
            if (r[p]) return r[p].exports;
            var d = r[p] = {
                exports: {},
                id: p,
                loaded: !1
            };
            return s[p].call(d.exports, d, d.exports, a), d.loaded = !0, d.exports;
        }
        return a.m = s, a.c = r, a.p = "", a(0);
    })([
        function(s, r, a) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var p = Object.assign || function(c) {
                for(var u = 1; u < arguments.length; u++){
                    var _ = arguments[u];
                    for(var t in _)Object.prototype.hasOwnProperty.call(_, t) && (c[t] = _[t]);
                }
                return c;
            }, d = function() {
                function c(u, _) {
                    for(var t = 0; t < _.length; t++){
                        var f = _[t];
                        f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(u, f.key, f);
                    }
                }
                return function(u, _, t) {
                    return _ && c(u.prototype, _), t && c(u, t), u;
                };
            }(), R = a(1), v = n(R), D = a(2), g = n(D), x = a(10), I = n(x), Y1 = a(12), L = n(Y1), T1 = a(13), l = n(T1), j = a(14), i = S(j);
            function S(c) {
                if (c && c.__esModule) return c;
                var u = {};
                if (c != null) for(var _ in c)Object.prototype.hasOwnProperty.call(c, _) && (u[_] = c[_]);
                return u.default = c, u;
            }
            function n(c) {
                return c && c.__esModule ? c : {
                    default: c
                };
            }
            function y(c, u) {
                if (!(c instanceof u)) throw new TypeError("Cannot call a class as a function");
            }
            function h1(c, u) {
                if (!c) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return u && (typeof u == "object" || typeof u == "function") ? u : c;
            }
            function m(c, u) {
                if (typeof u != "function" && u !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof u);
                c.prototype = Object.create(u && u.prototype, {
                    constructor: {
                        value: c,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), u && (Object.setPrototypeOf ? Object.setPrototypeOf(c, u) : c.__proto__ = u);
            }
            var N = [
                "\u{1F519}",
                "\u23F0"
            ], B1 = function(c) {
                m(u, c);
                function u(_) {
                    y(this, u);
                    var t = h1(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, _));
                    return t.state = {
                        textLines: [],
                        isDone: !1
                    }, t.onTypingDone = function() {
                        !t.mounted || (t.setState({
                            isDone: !0
                        }), t.props.onTypingDone());
                    }, t.delayGenerator = function(f, M, W1, U) {
                        var q = t.props.avgTypingDelay, G1 = t.props.stdTypingDelay;
                        return t.props.delayGenerator(q, G1, {
                            line: f,
                            lineIdx: M,
                            character: W1,
                            charIdx: U,
                            defDelayGenerator: function() {
                                var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : q, w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : G1;
                                return i.gaussianRnd(o, w);
                            }
                        });
                    }, t.typeLine = function(f, M) {
                        if (!t.mounted) return Promise.resolve();
                        var W2 = f, U = t.props.onLineTyped;
                        return i.isBackspaceElement(f) ? (f.props.delay > 0 && (t.introducedDelay = f.props.delay), W2 = String("\u{1F519}").repeat(f.props.count)) : i.isDelayElement(f) && (t.introducedDelay = f.props.ms, W2 = "\u23F0"), new Promise(function(q, G2) {
                            t.setState({
                                textLines: t.state.textLines.concat([
                                    ""
                                ])
                            }, function() {
                                i.eachPromise(W2, t.typeCharacter, W2, M).then(function() {
                                    return U(W2, M);
                                }).then(q).catch(G2);
                            });
                        });
                    }, t.typeCharacter = function(f, M, W3, U) {
                        if (!t.mounted) return Promise.resolve();
                        var q = t.props.onCharacterTyped;
                        return new Promise(function(G3) {
                            var e = t.state.textLines.slice();
                            i.sleep(t.introducedDelay).then(function() {
                                t.introducedDelay = null;
                                var o = f === "\u{1F519}", w = f === "\u23F0";
                                if (w) {
                                    G3();
                                    return;
                                }
                                if (o && U > 0) {
                                    for(var b = U - 1, E = e[b], k1 = b; k1 >= 0 && !(E.length > 0 && !N.includes(E[0])); k1--)b = k1, E = e[b];
                                    e[b] = E.substr(0, E.length - 1);
                                } else e[U] += f;
                                t.setState({
                                    textLines: e
                                }, function() {
                                    var P1 = t.delayGenerator(W3, U, f, M);
                                    q(f, M), setTimeout(G3, P1);
                                });
                            });
                        });
                    }, t.mounted = !1, t.linesToType = [], t.introducedDelay = null, _.children && (t.linesToType = i.extractTextFromElement(_.children)), t;
                }
                return d(u, [
                    {
                        key: "componentDidMount",
                        value: function() {
                            this.mounted = !0;
                            var t = this.props, f = t.children, M = t.startDelay;
                            f ? M > 0 && typeof window < "u" ? setTimeout(this.typeAllLines.bind(this), M) : this.typeAllLines() : this.onTypingDone();
                        }
                    },
                    {
                        key: "shouldComponentUpdate",
                        value: function(t, f) {
                            if (f.textLines.length !== this.state.textLines.length) return !0;
                            for(var M = 0; M < f.textLines.length; M++){
                                var W4 = this.state.textLines[M], U = f.textLines[M];
                                if (W4 !== U) return !0;
                            }
                            return this.state.isDone !== f.isDone;
                        }
                    },
                    {
                        key: "componentWillUnmount",
                        value: function() {
                            this.mounted = !1;
                        }
                    },
                    {
                        key: "typeAllLines",
                        value: function() {
                            var t = this, f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.linesToType;
                            return i.eachPromise(f, this.typeLine).then(function() {
                                return t.onTypingDone();
                            });
                        }
                    },
                    {
                        key: "render",
                        value: function() {
                            var t = this.props, f = t.className, M = t.cursor, W5 = this.state.isDone, U = i.cloneElementWithSpecifiedText({
                                element: this.props.children,
                                textLines: this.state.textLines
                            });
                            return v.default.createElement("div", {
                                className: "Typist " + f
                            }, U, v.default.createElement(I.default, p({
                                isDone: W5
                            }, M)));
                        }
                    }
                ]), u;
            }(R.Component);
            B1.propTypes = {
                children: g.default.node,
                className: g.default.string,
                avgTypingDelay: g.default.number,
                stdTypingDelay: g.default.number,
                startDelay: g.default.number,
                cursor: g.default.object,
                onCharacterTyped: g.default.func,
                onLineTyped: g.default.func,
                onTypingDone: g.default.func,
                delayGenerator: g.default.func
            }, B1.defaultProps = {
                className: "",
                avgTypingDelay: 70,
                stdTypingDelay: 25,
                startDelay: 0,
                cursor: {},
                onCharacterTyped: function() {},
                onLineTyped: function() {},
                onTypingDone: function() {},
                delayGenerator: i.gaussianRnd
            }, r.default = B1, B1.Backspace = L.default, B1.Delay = l.default;
        },
        function(s, r) {
            s.exports = Ye;
        },
        function(s, r, a) {
            s.exports = a(9)();
        },
        function(s, r, a) {
            "use strict";
            var p = a(4), d = a(5), R = a(6), v = a(7), D = a(8);
            s.exports = function(g, x) {
                var I = typeof Symbol == "function" && Symbol.iterator, Y2 = "@@iterator";
                function L(e) {
                    var o = e && (I && e[I] || e[Y2]);
                    if (typeof o == "function") return o;
                }
                var T2 = "<<anonymous>>", l = {
                    array: n("array"),
                    bool: n("boolean"),
                    func: n("function"),
                    number: n("number"),
                    object: n("object"),
                    string: n("string"),
                    symbol: n("symbol"),
                    any: y(),
                    arrayOf: h2,
                    element: m(),
                    instanceOf: N,
                    node: _(),
                    objectOf: c,
                    oneOf: B2,
                    oneOfType: u,
                    shape: t
                };
                function j(e, o) {
                    return e === o ? e !== 0 || 1 / e === 1 / o : e !== e && o !== o;
                }
                function i(e) {
                    this.message = e, this.stack = "";
                }
                i.prototype = Error.prototype;
                function S(e) {
                    function b(k2, P2, O1, A, C, F, $) {
                        if (A = A || T2, F = F || O1, $ !== v) {
                            if (x) d(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                            else ;
                        }
                        return P2[O1] == null ? k2 ? P2[O1] === null ? new i("The " + C + " `" + F + "` is marked as required " + ("in `" + A + "`, but its value is `null`.")) : new i("The " + C + " `" + F + "` is marked as required in " + ("`" + A + "`, but its value is `undefined`.")) : null : e(P2, O1, A, C, F);
                    }
                    var E = b.bind(null, !1);
                    return E.isRequired = b.bind(null, !0), E;
                }
                function n(e) {
                    function o(w, b, E, k3, P3, O) {
                        var A = w[b], C = W6(A);
                        if (C !== e) {
                            var F = U(A);
                            return new i("Invalid " + k3 + " `" + P3 + "` of type " + ("`" + F + "` supplied to `" + E + "`, expected ") + ("`" + e + "`."));
                        }
                        return null;
                    }
                    return S(o);
                }
                function y() {
                    return S(p.thatReturnsNull);
                }
                function h2(e) {
                    function o(w, b, E, k4, P4) {
                        if (typeof e != "function") return new i("Property `" + P4 + "` of component `" + E + "` has invalid PropType notation inside arrayOf.");
                        var O2 = w[b];
                        if (!Array.isArray(O2)) {
                            var A = W6(O2);
                            return new i("Invalid " + k4 + " `" + P4 + "` of type " + ("`" + A + "` supplied to `" + E + "`, expected an array."));
                        }
                        for(var C = 0; C < O2.length; C++){
                            var F = e(O2, C, E, k4, P4 + "[" + C + "]", v);
                            if (F instanceof Error) return F;
                        }
                        return null;
                    }
                    return S(o);
                }
                function m() {
                    function e(o, w, b, E, k5) {
                        var P5 = o[w];
                        if (!g(P5)) {
                            var O3 = W6(P5);
                            return new i("Invalid " + E + " `" + k5 + "` of type " + ("`" + O3 + "` supplied to `" + b + "`, expected a single ReactElement."));
                        }
                        return null;
                    }
                    return S(e);
                }
                function N(e) {
                    function o(w, b, E, k6, P6) {
                        if (!(w[b] instanceof e)) {
                            var O4 = e.name || T2, A = G4(w[b]);
                            return new i("Invalid " + k6 + " `" + P6 + "` of type " + ("`" + A + "` supplied to `" + E + "`, expected ") + ("instance of `" + O4 + "`."));
                        }
                        return null;
                    }
                    return S(o);
                }
                function B2(e) {
                    if (!Array.isArray(e)) return p.thatReturnsNull;
                    function o(w, b, E, k7, P7) {
                        for(var O5 = w[b], A = 0; A < e.length; A++)if (j(O5, e[A])) return null;
                        var C = JSON.stringify(e);
                        return new i("Invalid " + k7 + " `" + P7 + "` of value `" + O5 + "` " + ("supplied to `" + E + "`, expected one of " + C + "."));
                    }
                    return S(o);
                }
                function c(e) {
                    function o(w, b, E, k8, P8) {
                        if (typeof e != "function") return new i("Property `" + P8 + "` of component `" + E + "` has invalid PropType notation inside objectOf.");
                        var O6 = w[b], A = W6(O6);
                        if (A !== "object") return new i("Invalid " + k8 + " `" + P8 + "` of type " + ("`" + A + "` supplied to `" + E + "`, expected an object."));
                        for(var C in O6)if (O6.hasOwnProperty(C)) {
                            var F = e(O6, C, E, k8, P8 + "." + C, v);
                            if (F instanceof Error) return F;
                        }
                        return null;
                    }
                    return S(o);
                }
                function u(e) {
                    if (!Array.isArray(e)) return p.thatReturnsNull;
                    for(var o = 0; o < e.length; o++){
                        var w = e[o];
                        if (typeof w != "function") return R(!1, "Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.", q(w), o), p.thatReturnsNull;
                    }
                    function b(E, k9, P9, O7, A) {
                        for(var C = 0; C < e.length; C++){
                            var F = e[C];
                            if (F(E, k9, P9, O7, A, v) == null) return null;
                        }
                        return new i("Invalid " + O7 + " `" + A + "` supplied to " + ("`" + P9 + "`."));
                    }
                    return S(b);
                }
                function _() {
                    function e(o, w, b, E, k10) {
                        return f(o[w]) ? null : new i("Invalid " + E + " `" + k10 + "` supplied to " + ("`" + b + "`, expected a ReactNode."));
                    }
                    return S(e);
                }
                function t(e) {
                    function o(w, b, E, k11, P10) {
                        var O8 = w[b], A = W6(O8);
                        if (A !== "object") return new i("Invalid " + k11 + " `" + P10 + "` of type `" + A + "` " + ("supplied to `" + E + "`, expected `object`."));
                        for(var C in e){
                            var F = e[C];
                            if (!!F) {
                                var $ = F(O8, C, E, k11, P10 + "." + C, v);
                                if ($) return $;
                            }
                        }
                        return null;
                    }
                    return S(o);
                }
                function f(e) {
                    switch(typeof e){
                        case "number":
                        case "string":
                        case "undefined":
                            return !0;
                        case "boolean":
                            return !e;
                        case "object":
                            if (Array.isArray(e)) return e.every(f);
                            if (e === null || g(e)) return !0;
                            var o = L(e);
                            if (o) {
                                var w = o.call(e), b;
                                if (o !== e.entries) {
                                    for(; !(b = w.next()).done;)if (!f(b.value)) return !1;
                                } else for(; !(b = w.next()).done;){
                                    var E = b.value;
                                    if (E && !f(E[1])) return !1;
                                }
                            } else return !1;
                            return !0;
                        default:
                            return !1;
                    }
                }
                function M(e, o) {
                    return e === "symbol" || o["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && o instanceof Symbol;
                }
                function W6(e) {
                    var o = typeof e;
                    return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : M(o, e) ? "symbol" : o;
                }
                function U(e) {
                    if (typeof e > "u" || e === null) return "" + e;
                    var o = W6(e);
                    if (o === "object") {
                        if (e instanceof Date) return "date";
                        if (e instanceof RegExp) return "regexp";
                    }
                    return o;
                }
                function q(e) {
                    var o = U(e);
                    switch(o){
                        case "array":
                        case "object":
                            return "an " + o;
                        case "boolean":
                        case "date":
                        case "regexp":
                            return "a " + o;
                        default:
                            return o;
                    }
                }
                function G4(e) {
                    return !e.constructor || !e.constructor.name ? T2 : e.constructor.name;
                }
                return l.checkPropTypes = D, l.PropTypes = l, l;
            };
        },
        function(s, r) {
            "use strict";
            function a(d) {
                return function() {
                    return d;
                };
            }
            var p = function() {};
            p.thatReturns = a, p.thatReturnsFalse = a(!1), p.thatReturnsTrue = a(!0), p.thatReturnsNull = a(null), p.thatReturnsThis = function() {
                return this;
            }, p.thatReturnsArgument = function(d) {
                return d;
            }, s.exports = p;
        },
        function(s, r) {
            "use strict";
            var a = function(R) {};
            function p(d, R, v, D, g, x, I, Y3) {
                if (a(R), !d) {
                    var L;
                    if (R === void 0) L = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var T3 = [
                            v,
                            D,
                            g,
                            x,
                            I,
                            Y3
                        ], l = 0;
                        L = new Error(R.replace(/%s/g, function() {
                            return T3[l++];
                        })), L.name = "Invariant Violation";
                    }
                    throw L.framesToPop = 1, L;
                }
            }
            s.exports = p;
        },
        function(s, r, a) {
            "use strict";
            var p = a(4), d = p;
            s.exports = d;
        },
        function(s, r) {
            "use strict";
            var a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
            s.exports = a;
        },
        function(s, r, a) {
            "use strict";
            function D(g, x, I, Y, L) {}
            s.exports = D;
        },
        function(s, r, a) {
            "use strict";
            var p = a(4), d = a(5), R = a(7);
            s.exports = function() {
                function v(x, I, Y, L, T, l) {
                    l !== R && d(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                }
                v.isRequired = v;
                function D() {
                    return v;
                }
                var g = {
                    array: v,
                    bool: v,
                    func: v,
                    number: v,
                    object: v,
                    string: v,
                    symbol: v,
                    any: v,
                    arrayOf: D,
                    element: v,
                    instanceOf: D,
                    node: v,
                    objectOf: D,
                    oneOf: D,
                    oneOfType: D,
                    shape: D
                };
                return g.checkPropTypes = p, g.PropTypes = g, g;
            };
        },
        function(s, r, a) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var p = function() {
                function T4(l, j) {
                    for(var i = 0; i < j.length; i++){
                        var S = j[i];
                        S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(l, S.key, S);
                    }
                }
                return function(l, j, i) {
                    return j && T4(l.prototype, j), i && T4(l, i), l;
                };
            }(), d = a(1), R = g(d), v = a(2), D = g(v);
            a(11);
            function g(T5) {
                return T5 && T5.__esModule ? T5 : {
                    default: T5
                };
            }
            function x(T6, l) {
                if (!(T6 instanceof l)) throw new TypeError("Cannot call a class as a function");
            }
            function I(T7, l) {
                if (!T7) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return l && (typeof l == "object" || typeof l == "function") ? l : T7;
            }
            function Y4(T8, l) {
                if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof l);
                T8.prototype = Object.create(l && l.prototype, {
                    constructor: {
                        value: T8,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(T8, l) : T8.__proto__ = l);
            }
            var L = function(T9) {
                Y4(l, T9);
                function l(j) {
                    x(this, l);
                    var i = I(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, j));
                    return i._isReRenderingCursor = !1, i.state = {
                        shouldRender: i.props.show
                    }, i;
                }
                return p(l, [
                    {
                        key: "componentWillReceiveProps",
                        value: function(i) {
                            var S = this, n = !this.props.isDone && i.isDone && this.props.hideWhenDone;
                            n && setTimeout(function() {
                                return S.setState({
                                    shouldRender: !1
                                });
                            }, this.props.hideWhenDoneDelay);
                        }
                    },
                    {
                        key: "componentDidUpdate",
                        value: function() {
                            var i = this.props, S = i.show, n = i.isDone;
                            !S || n || this._isReRenderingCursor || this._reRenderCursor();
                        }
                    },
                    {
                        key: "_reRenderCursor",
                        value: function() {
                            var i = this;
                            this._isReRenderingCursor = !0, this.setState({
                                shouldRender: !1
                            }, function() {
                                i.setState({
                                    shouldRender: !0
                                }, function() {
                                    i._isReRenderingCursor = !1;
                                });
                            });
                        }
                    },
                    {
                        key: "render",
                        value: function() {
                            if (this.state.shouldRender) {
                                var i = this.props.blink ? " Cursor--blinking" : "";
                                return R.default.createElement("span", {
                                    className: "Cursor" + i
                                }, this.props.element);
                            }
                            return null;
                        }
                    }
                ]), l;
            }(d.Component);
            L.propTypes = {
                blink: D.default.bool,
                show: D.default.bool,
                element: D.default.node,
                hideWhenDone: D.default.bool,
                hideWhenDoneDelay: D.default.number,
                isDone: D.default.bool
            }, L.defaultProps = {
                blink: !0,
                show: !0,
                element: "|",
                hideWhenDone: !1,
                hideWhenDoneDelay: 1000,
                isDone: !1
            }, r.default = L;
        },
        function(s, r) {},
        function(s, r, a) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var p = a(1), d = D(p), R = a(2), v = D(R);
            function D(x) {
                return x && x.__esModule ? x : {
                    default: x
                };
            }
            var g = function() {
                return d.default.createElement("noscript", null);
            };
            g.componentName = "Backspace", g.propTypes = {
                count: v.default.number,
                delay: v.default.number
            }, g.defaultProps = {
                count: 1,
                delay: 0
            }, r.default = g;
        },
        function(s, r, a) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var p = a(1), d = D(p), R = a(2), v = D(R);
            function D(x) {
                return x && x.__esModule ? x : {
                    default: x
                };
            }
            var g = function() {
                return d.default.createElement("noscript", null);
            };
            g.componentName = "Delay", g.propTypes = {
                ms: v.default.number.isRequired
            }, r.default = g;
        },
        function(s, r, a) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.sleep = void 0;
            var p = function() {
                function n(y, h3) {
                    var m = [], N = !0, B3 = !1, c = void 0;
                    try {
                        for(var u = y[Symbol.iterator](), _; !(N = (_ = u.next()).done) && (m.push(_.value), !(h3 && m.length === h3)); N = !0);
                    } catch (t) {
                        B3 = !0, c = t;
                    } finally{
                        try {
                            !N && u.return && u.return();
                        } finally{
                            if (B3) throw c;
                        }
                    }
                    return m;
                }
                return function(y, h4) {
                    if (Array.isArray(y)) return y;
                    if (Symbol.iterator in Object(y)) return n(y, h4);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                };
            }();
            r.gaussianRnd = x, r.eachPromise = I, r.exclude = Y5, r.isBackspaceElement = L, r.isDelayElement = T10, r.extractTextFromElement = l, r.cloneElement = j, r.cloneElementWithSpecifiedText = S;
            var d = a(1), R = v(d);
            function v(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            function D(n) {
                if (Array.isArray(n)) {
                    for(var y = 0, h5 = Array(n.length); y < n.length; y++)h5[y] = n[y];
                    return h5;
                } else return Array.from(n);
            }
            r.sleep = function(y) {
                return new Promise(function(h6) {
                    return y != null ? setTimeout(h6, y) : h6();
                });
            };
            function x(n, y) {
                for(var h7 = 12, m = 0, N = 0; N < h7; N++)m += Math.random();
                return m -= h7 / 2, Math.round(m * y) + n;
            }
            function I(n, y) {
                for(var h8 = arguments.length, m = Array(h8 > 2 ? h8 - 2 : 0), N = 2; N < h8; N++)m[N - 2] = arguments[N];
                var B4 = function(u, _, t) {
                    return u.then(function() {
                        return y.apply(void 0, [
                            _,
                            t
                        ].concat(m));
                    });
                };
                return Array.from(n).reduce(B4, Promise.resolve());
            }
            function Y5(n, y) {
                var h9 = {};
                for(var m in n)y.indexOf(m) === -1 && (h9[m] = n[m]);
                return h9;
            }
            function L(n) {
                return n && n.type && n.type.componentName === "Backspace";
            }
            function T10(n) {
                return n && n.type && n.type.componentName === "Delay";
            }
            function l(n) {
                for(var y = n ? [
                    n
                ] : [], h10 = []; y.length > 0;){
                    var m = y.pop();
                    if (R.default.isValidElement(m)) L(m) || T10(m) ? h10.unshift(m) : R.default.Children.forEach(m.props.children, function(f) {
                        y.push(f);
                    });
                    else if (Array.isArray(m)) {
                        var N = !0, B5 = !1, c = void 0;
                        try {
                            for(var u = m[Symbol.iterator](), _; !(N = (_ = u.next()).done); N = !0){
                                var t = _.value;
                                y.push(t);
                            }
                        } catch (f) {
                            B5 = !0, c = f;
                        } finally{
                            try {
                                !N && u.return && u.return();
                            } finally{
                                if (B5) throw c;
                            }
                        }
                    } else h10.unshift(m);
                }
                return h10;
            }
            function j(n, y) {
                var h11 = n.type, m = Y5(n.props, [
                    "children"
                ]), N = new Date().getUTCMilliseconds(), B6 = N + Math.random() + Math.random();
                return m.key = "Typist-element-" + h11 + "-" + B6, R.default.createElement.apply(R.default, [
                    h11,
                    m
                ].concat(D(y)));
            }
            function i(n, y, h12) {
                if (h12 >= y.length) return [
                    null,
                    h12
                ];
                var m = h12, N = function(t) {
                    var f = i(t, y, m), M = p(f, 2), W7 = M[0], U = M[1];
                    return m = U, W7;
                }, B7 = R.default.isValidElement(n) && !(L(n) || T10(n));
                if (B7) {
                    var c = R.default.Children.map(n.props.children, N) || [];
                    return [
                        j(n, c),
                        m
                    ];
                }
                if (Array.isArray(n)) {
                    var u = n.map(N);
                    return [
                        u,
                        m
                    ];
                }
                return [
                    y[m],
                    m + 1
                ];
            }
            function S(n) {
                var y = n.element, h13 = n.textLines;
                if (!!y) return i(y, h13, 0)[0];
            }
        }
    ]);
});
var z1 = J1(K1()), ie = J1(K1()), { default: ue , ...se } = ie, pe = (z1.default ?? ue) ?? se;
function Hand() {
    return react.createElement("svg", {
        className: "hand",
        xmlns: "http://www.w3.org/2000/svg",
        enableBackground: "new 0 0 24 24",
        height: "0.8em",
        viewBox: "0 0 24 24",
        width: "0.8em",
        fill: "#000000"
    }, react.createElement("g", null, react.createElement("rect", {
        fill: "none",
        height: "24",
        width: "24"
    })), react.createElement("g", null, react.createElement("g", null, react.createElement("g", null, react.createElement("path", {
        d: "M23,5.5V20c0,2.2-1.8,4-4,4h-7.3c-1.08,0-2.1-0.43-2.85-1.19L1,14.83c0,0,1.26-1.23,1.3-1.25 c0.22-0.19,0.49-0.29,0.79-0.29c0.22,0,0.42,0.06,0.6,0.16C3.73,13.46,8,15.91,8,15.91V4c0-0.83,0.67-1.5,1.5-1.5S11,3.17,11,4v7 h1V1.5C12,0.67,12.67,0,13.5,0S15,0.67,15,1.5V11h1V2.5C16,1.67,16.67,1,17.5,1S19,1.67,19,2.5V11h1V5.5C20,4.67,20.67,4,21.5,4 S23,4.67,23,5.5z"
    })))));
}
function delayGenerator(mean, std, { line , lineIdx , charIdx , defDelayGenerator  }) {
    if (charIdx === line.length - 1) {
        return 500;
    }
    return defDelayGenerator();
}
function App() {
    const [animated, animate] = react.useState(false);
    return react.createElement("section", {
        className: "page index " + (animated ? "animated" : "")
    }, react.createElement(pe, {
        delayGenerator: delayGenerator,
        className: "typist",
        cursor: {
            show: false
        },
        onTypingDone: ()=>animate(true)
        ,
        avgTypingDelay: 60
    }, react.createElement("div", null, "Hi ", react.createElement(Hand, null)), react.createElement("div", null, "I am a web developer,"), react.createElement("div", null, "a web artist in love with minimalism."), react.createElement("div", null, "My thoughts are on", " ", react.createElement("a", {
        className: "twitter",
        href: "https://twitter.com/jupegarnica"
    }, "twitter")), react.createElement("div", null, "And some of my work at", " ", react.createElement("a", {
        className: "github",
        href: "https://github.com/jupegarnica"
    }, "github"))), react.createElement("div", {
        className: "background"
    }));
}
mod1.render(react.createElement(rest.StrictMode, null, react.createElement(App, null)), document.getElementById("root"));
