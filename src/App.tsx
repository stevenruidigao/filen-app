import React from "react"

import * as windowComponents from "./components/window"
import * as setupComponents from "./components/setup"
import * as routerComponents from "./components/router"
import * as loginComponents from "./components/login"
import * as itemsComponents from "./components/items"
import * as spawnComponents from "./components/spawn"
import * as searchComponents from "./components/search"
import * as renderComponents from "./components/render"
import * as registerComponents from "./components/register"
import * as userComponents from "./components/user"

declare global {
    interface Window {
		currentHref: string,
		selectedItems: Array<any>,
		customFunctions: any,
		customVariables: any
    }
}

interface AppStates {
	mainToolbarTitle: string,
	itemList: Array<any>,
	isLoggedIn: boolean,
	userAPIKey: string,
	userMasterKeys: Array<any>,
	userPublicKey: string,
	userPrivateKey: string,
	selectedItems: number,
	currentHref: string,
	darkMode: boolean,
	userEmail: string,
	userStorageUsagePercentage: number,
	searchbarOpen: boolean,
	windowHeight: number,
	windowWidth: number,
	mainSearchTerm: string,
	oldItemList: Array<any>,
	lang: string,
	showMainToolbarBackButton: boolean
}

export default class App extends React.PureComponent<{}, AppStates> {
    constructor(props){
    	super(props)

        this.state = {
        	mainToolbarTitle: "My Cloud",
        	itemList: [],
        	isLoggedIn: false,
        	userAPIKey: "",
        	userMasterKeys: [],
			userPublicKey: "",
			userPrivateKey: "",
			selectedItems: 0,
			currentHref: window.location.href,
			darkMode: false,
			userEmail: "testnet@filen.io",
			userStorageUsagePercentage: 0.5,
			searchbarOpen: false,
			windowHeight: window.innerHeight,
			windowWidth: window.innerWidth,
			mainSearchTerm: "",
			oldItemList: [],
			lang: "en",
			showMainToolbarBackButton: false
		}

		this.componentDidMount = this.componentDidMount.bind(this)
	}

	componentDidMount(){
		this.setupWindowFunctions()
		this.setupListeners()
		this.setupStatusbar()
		this.windowRouter()

		this.doSetup()
	}

	windowRouter = windowComponents.windowRouter.bind(this)
	setupWindowFunctions = windowComponents.setupWindowFunctions.bind(this)

	setupListeners = setupComponents.setupListeners.bind(this)
	setupStatusbar = setupComponents.setupStatusbar.bind(this)
	doSetup = setupComponents.doSetup.bind(this)

	routeTo = routerComponents.routeTo.bind(this)
	routeToFolder = routerComponents.routeToFolder.bind(this)
	goToFolder = routerComponents.goToFolder.bind(this)
	goBack = routerComponents.goBack.bind(this)

	showLogin = loginComponents.showLogin.bind(this)
	showRegister = registerComponents.showRegister.bind(this)

	updateUserKeys = userComponents.updateUserKeys.bind(this)

    updateItemList = itemsComponents.updateItemList.bind(this)
	refreshMainList = itemsComponents.refreshMainList.bind(this)
	selectItem = itemsComponents.selectItem.bind(this)
	clearSelectedItems = itemsComponents.clearSelectedItems.bind(this)
	selectItemsAction = itemsComponents.selectItemsAction.bind(this)
	previewItem = itemsComponents.previewItem.bind(this)

    spawnToast = spawnComponents.spawnToast.bind(this)
    spawnMoveToast = spawnComponents.spawnMoveToast.bind(this)
    spawnItemActionSheet = spawnComponents.spawnItemActionSheet.bind(this)
	mainFabAction = spawnComponents.mainFabAction.bind(this)
	mainMenuPopover = spawnComponents.mainMenuPopover.bind(this)

	setMainSearchTerm = searchComponents.setMainSearchTerm.bind(this)
	hideMainSearchbar = searchComponents.hideMainSearchbar.bind(this)

    render = renderComponents.render.bind(this)
}