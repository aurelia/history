export class History {
  activate(options:Object):boolean{
    throw new Error('History must implement activate().');
  }

  deactivate():void{
    throw new Error('History must implement deactivate().');
  }

  navigate(fragment:string, options:Object):boolean {
    throw new Error('History must implement navigate().');
  }

  navigateBack():void {
    throw new Error('History must implement navigateBack().');
  }
}
